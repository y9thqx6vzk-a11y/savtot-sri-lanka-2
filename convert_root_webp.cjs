const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const dir = path.join(__dirname, 'public');

async function convert() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const outputName = file.replace(/\.jpg$/i, '.webp').replace(/\.jpeg$/i, '.webp');
      const outputPath = path.join(dir, outputName);
      
      console.log(`Converting ${file} to ${outputName}`);
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        fs.unlinkSync(inputPath); // Delete the original
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err.message);
      }
    }
  }
}

convert().then(() => console.log('Done converting root images to WebP.')).catch(console.error);
