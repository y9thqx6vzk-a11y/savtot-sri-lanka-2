import { scryptSync, randomBytes } from 'crypto';

/**
 * Generate a password hash using scrypt.
 * Returns a string in the form "salt:hash".
 */
export function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

/**
 * Compare a plain password with a stored hash (salt:hash).
 * Returns true if they match, false otherwise.
 */
export function comparePassword(password, storedHash) {
  if (!storedHash) return false;
  const [salt, hash] = storedHash.split(':');
  if (!salt || !hash) return false;
  const derived = scryptSync(password, salt, 64).toString('hex');
  return derived === hash;
}
