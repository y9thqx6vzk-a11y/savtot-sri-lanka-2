import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { sanitizePrompt } from '../../../utils/sanitizePrompt.js';
import { rateLimiter } from '../../../utils/rateLimiter.js';
import { logger } from '../../../utils/logger.js';
import { htmlEscape } from '../../../utils/htmlEscape.js';

export async function POST(req) {
  // Rate limiting
  const rateLimitResult = await rateLimiter.check(req);
  if (rateLimitResult !== true) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  // Enforce payload size limit (2 KB)
  const contentLength = parseInt(req.headers.get('content-length') || '0', 10);
  if (contentLength > 2048) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
  }
  try {
    const { prompt, systemInstruction } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key is not configured.' }, { status: 500 });
    }

    // Reject user‑provided systemInstruction unless admin token is present
    const adminToken = req.headers.get('x-admin-token');
    if (systemInstruction && adminToken !== process.env.ADMIN_API_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized system instruction' }, { status: 403 });
    }

    // Sanitize prompt to prevent injection
    const safePrompt = sanitizePrompt(prompt);
    if (!safePrompt.valid) {
      return NextResponse.json({ error: safePrompt.error }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-preview-09-2025",
      systemInstruction: systemInstruction || undefined,
    });

    const result = await model.generateContent(safePrompt.cleaned);
    const text = result.response.text();

    // Escape the model output before sending to client
    const escaped = htmlEscape(text);
    return NextResponse.json({ reply: escaped });
  } catch (error) {
    logger.error('Chat API Error:', error);
    return NextResponse.json({ error: "Failed to communicate with AI" }, { status: 500 });
  }
}
