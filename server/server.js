import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer for image uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Save with the ID from the form to easily overwrite or find
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, req.body.id ? `${req.body.id}.jpg` : file.fieldname + '-' + uniqueSuffix + '.jpg');
  }
});
const upload = multer({ storage });

// Admin Password (Simple setup)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '1086E';

// Data files
const DATA_FILE = path.join(__dirname, 'registrations.json');
const CONTENT_FILE = path.join(__dirname, 'content.json');

// --- Endpoints ---

// 1. Gemini AI Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { prompt, systemInstruction } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;
    const MODEL_NAME = "gemini-2.5-flash-preview-09-2025";
    
    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API key is not configured on the server.' });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] }
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error details:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Error generating content.";
    res.json({ reply: text });

  } catch (error) {
    console.error("Chat API Error:", error);
    res.status(500).json({ error: "Failed to communicate with AI" });
  }
});

// 2. Registration Endpoint
app.post('/api/register', async (req, res) => {
  try {
    const newRegistration = {
      ...req.body,
      timestamp: new Date().toISOString()
    };

    let registrations = [];
    try {
      const fileData = await fs.readFile(DATA_FILE, 'utf8');
      registrations = JSON.parse(fileData);
    } catch (e) {
      // File doesn't exist yet, it's fine
    }

    registrations.push(newRegistration);
    await fs.writeFile(DATA_FILE, JSON.stringify(registrations, null, 2));

    console.log("New registration received:", newRegistration.name);
    res.json({ success: true, message: "Registration saved successfully" });

  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: "Failed to save registration" });
  }
});

// 3. Admin Login
app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    // In a real app, use JWT. For simplicity, we just return success
    res.json({ success: true, token: "admin-token-123" });
  } else {
    res.status(401).json({ success: false, message: "Invalid password" });
  }
});

// 4. Upload Image Endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  
  // Return the path where the image can be accessed
  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ success: true, imageUrl });
});

// 5. Content CMS Endpoints
app.get('/api/content', async (req, res) => {
  try {
    const fileData = await fs.readFile(CONTENT_FILE, 'utf8');
    res.json(JSON.parse(fileData));
  } catch (error) {
    console.error("Error reading content.json:", error);
    res.status(500).json({ error: "Failed to load content" });
  }
});

app.post('/api/content', async (req, res) => {
  try {
    const { path: fieldPath, newValue } = req.body;
    
    // Read current content
    const fileData = await fs.readFile(CONTENT_FILE, 'utf8');
    let content = JSON.parse(fileData);
    
    // Update the specific field using the dot-notation path
    // e.g. path = 'he.hero.title'
    const keys = fieldPath.split('.');
    let current = content;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = newValue;
    
    // Save back to file
    await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2));
    res.json({ success: true, content });
  } catch (error) {
    console.error("Error updating content.json:", error);
    res.status(500).json({ error: "Failed to update content" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
