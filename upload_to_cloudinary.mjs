/**
 * upload_to_cloudinary.mjs
 *
 * Extracts images/video from git history and uploads them to Cloudinary
 * with EXACT public_ids (no random hash suffix).
 *
 * Requirements:
 *   1. In Cloudinary: Settings → Upload → Upload Presets
 *      Create/edit "savtot_admin" preset:
 *        - Signing Mode: Unsigned
 *        - Use filename: ON
 *        - Unique filename: OFF  ← critical
 *
 *   2. Run: node upload_to_cloudinary.mjs
 *
 * Node 18+ required (built-in fetch).
 */

import { execSync } from 'child_process';

const CLOUD_NAME    = 'dpodrwq71';
const UPLOAD_PRESET = 'savtot_admin';

// Git commit BEFORE images were removed from public/
const GIT_COMMIT = 'edd0306';

// Map: { gitPath, publicId, type }
// publicId = exact path Cloudinary will store (no hash, no folder prefix needed)
const FILES = [
  // Home images
  { git: 'public/home1.webp',    id: 'home1',    type: 'image' },
  { git: 'public/home2.webp',    id: 'home2',    type: 'image' },
  { git: 'public/home3.webp',    id: 'home3',    type: 'image' },
  { git: 'public/about_us.webp', id: 'about_us', type: 'image' },
  { git: 'public/arugam.webp',   id: 'arugam',   type: 'image' },
  { git: 'public/1.webp',        id: '1',        type: 'image' },
  { git: 'public/2.webp',        id: '2',        type: 'image' },
  { git: 'public/3.webp',        id: '3',        type: 'image' },
  { git: 'public/4.webp',        id: '4',        type: 'image' },
  { git: 'public/5.webp',        id: '5',        type: 'image' },
  { git: 'public/6.webp',        id: '6',        type: 'image' },
  { git: 'public/8.webp',        id: '8',        type: 'image' },
  { git: 'public/9.webp',        id: '9',        type: 'image' },
  { git: 'public/10.webp',       id: '10',       type: 'image' },
  // Discovery gallery
  { git: 'public/discovery-gallery/PXL_20250804_231312230.webp',   id: 'discovery-gallery/PXL_20250804_231312230',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_061834012.webp',   id: 'discovery-gallery/PXL_20250805_061834012',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_101202880.webp',   id: 'discovery-gallery/PXL_20250805_101202880',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_101212699.webp',   id: 'discovery-gallery/PXL_20250805_101212699',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_110950616.MP.webp',id: 'discovery-gallery/PXL_20250805_110950616.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_110952829.MP.webp',id: 'discovery-gallery/PXL_20250805_110952829.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_110954833.webp',   id: 'discovery-gallery/PXL_20250805_110954833',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_112807041.webp',   id: 'discovery-gallery/PXL_20250805_112807041',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_113440117.webp',   id: 'discovery-gallery/PXL_20250805_113440117',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_131932263.webp',   id: 'discovery-gallery/PXL_20250805_131932263',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_131935688.MP.webp',id: 'discovery-gallery/PXL_20250805_131935688.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250806_022238016.webp',   id: 'discovery-gallery/PXL_20250806_022238016',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250806_043848103.webp',   id: 'discovery-gallery/PXL_20250806_043848103',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250806_103924168.webp',   id: 'discovery-gallery/PXL_20250806_103924168',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250806_104315164.webp',   id: 'discovery-gallery/PXL_20250806_104315164',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_024105138.webp',   id: 'discovery-gallery/PXL_20250807_024105138',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_090023481.webp',   id: 'discovery-gallery/PXL_20250807_090023481',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_090039580.webp',   id: 'discovery-gallery/PXL_20250807_090039580',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_090508332.MP.webp',id: 'discovery-gallery/PXL_20250807_090508332.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_090635657.MP.webp',id: 'discovery-gallery/PXL_20250807_090635657.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_100921999.mp4',    id: 'discovery-gallery/PXL_20250807_100921999',   type: 'video' },
  { git: 'public/discovery-gallery/PXL_20250807_100946064.webp',   id: 'discovery-gallery/PXL_20250807_100946064',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_104232959.webp',   id: 'discovery-gallery/PXL_20250807_104232959',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_104328670.webp',   id: 'discovery-gallery/PXL_20250807_104328670',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250812_051612407.webp',   id: 'discovery-gallery/PXL_20250812_051612407',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250812_090458231.webp',   id: 'discovery-gallery/PXL_20250812_090458231',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250812_091006003.webp',   id: 'discovery-gallery/PXL_20250812_091006003',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_005516532.webp',   id: 'discovery-gallery/PXL_20250813_005516532',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_005533486.webp',   id: 'discovery-gallery/PXL_20250813_005533486',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_084419570.MP.webp',id: 'discovery-gallery/PXL_20250813_084419570.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_090005700.MP.webp',id: 'discovery-gallery/PXL_20250813_090005700.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_090011635.MP.webp',id: 'discovery-gallery/PXL_20250813_090011635.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_090910761.webp',   id: 'discovery-gallery/PXL_20250813_090910761',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_092451170.webp',   id: 'discovery-gallery/PXL_20250813_092451170',   type: 'image' },
];

function getFromGit(commit, filePath) {
  try {
    return execSync(`git show ${commit}:${filePath}`, { maxBuffer: 50 * 1024 * 1024 });
  } catch {
    return null;
  }
}

async function upload(buffer, publicId, type) {
  const mime = type === 'video' ? 'video/mp4' : 'image/webp';

  // Build multipart form manually (no extra deps needed in Node 18+)
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
    `Content-Disposition: form-data; name="file"; filename="${publicId.split('/').pop()}"${CRLF}` +
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
  console.log(`\n🚀  Cloudinary Upload  |  cloud=${CLOUD_NAME}  preset=${UPLOAD_PRESET}`);
  console.log(`📦  Source: git commit ${GIT_COMMIT}\n`);

  let ok = 0, skip = 0, fail = 0;

  for (const { git, id, type } of FILES) {
    process.stdout.write(`  ⬆  ${id} ... `);
    const buf = getFromGit(GIT_COMMIT, git);
    if (!buf) {
      console.log(`⚠️  not found in git`);
      skip++;
      continue;
    }
    try {
      const url = await upload(buf, id, type);
      console.log(`✅  ${url}`);
      ok++;
    } catch (err) {
      console.log(`❌  ${err.message}`);
      fail++;
    }
  }

  console.log(`\n✨  Done — ${ok} uploaded, ${skip} skipped, ${fail} failed.\n`);
  if (fail > 0) {
    console.log('💡  If you see "Invalid upload preset":');
    console.log('    Cloudinary → Settings → Upload → Upload Presets');
    console.log('    → Edit "savtot_admin" → Signing Mode: Unsigned → Save\n');
  }
}

main().catch(console.error);
