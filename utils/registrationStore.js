import { promises as fs } from 'fs';
import path from 'path';

const registrationsFile = path.resolve(process.cwd(), 'data', 'registrations.json');

async function ensureDir() {
  const dir = path.dirname(registrationsFile);
  await fs.mkdir(dir, { recursive: true });
}

export async function addRegistration(entry) {
  await ensureDir();
  let entries = [];
  try {
    const data = await fs.readFile(registrationsFile, 'utf8');
    entries = JSON.parse(data);
  } catch (_) {
    entries = [];
  }
  entries.push(entry);
  await fs.writeFile(registrationsFile, JSON.stringify(entries, null, 2), 'utf8');
  return true;
}
