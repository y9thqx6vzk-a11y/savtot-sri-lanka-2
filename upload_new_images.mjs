import { readFileSync } from 'fs';

const CLOUD_NAME = 'dsgvsqnjp';
const UPLOAD_PRESET = 'savtot_admin';

const filesToUpload = [
  { path: 'public/10.jpg', id: '10', type: 'image' },
  { path: 'public/small_1.webp', id: 'small_1', type: 'image' },
  { path: 'public/small_2.webp', id: 'small_2', type: 'image' },
  { path: 'public/home-page.jpg', id: 'home-page', type: 'image' }
];

async function upload(buffer, publicId, type, originalPath) {
  const mime = originalPath.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
  const boundary = '----FormBoundary' + Math.random().toString(36).slice(2);
  const CRLF = '\r\n';

  const addField = (name, value) =>
    `--${boundary}${CRLF}Content-Disposition: form-data; name="${name}"${CRLF}${CRLF}${value}${CRLF}`;

  const textParts = [
    addField('upload_preset', UPLOAD_PRESET),
    addField('public_id', publicId),
  ].join('');

  const fileHeader =
    `--${boundary}${CRLF}` +
    `Content-Disposition: form-data; name="file"; filename="${publicId}"${CRLF}` +
    `Content-Type: ${mime}${CRLF}${CRLF}`;

  const footer = `${CRLF}--${boundary}--${CRLF}`;

  const body = Buffer.concat([
    Buffer.from(textParts, 'utf8'),
    Buffer.from(fileHeader, 'utf8'),
    buffer,
    Buffer.from(footer, 'utf8'),
  ]);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${type}/upload`,
    {
      method: 'POST',
      headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` },
      body,
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || JSON.stringify(data));
  return data.secure_url;
}

async function main() {
  for (const file of filesToUpload) {
    try {
      console.log(`Uploading ${file.path} to Cloudinary as ${file.id}...`);
      const buffer = readFileSync(file.path);
      const url = await upload(buffer, file.id, file.type, file.path);
      console.log(`Success! URL: ${url}`);
    } catch (e) {
      console.error(`Failed to upload ${file.path}:`, e.message);
    }
  }
}

main();
