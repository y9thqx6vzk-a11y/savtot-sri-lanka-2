export function sanitizePrompt(prompt) {
  if (typeof prompt !== 'string') {
    return { valid: false, error: 'Prompt must be a string' };
  }
  const trimmed = prompt.trim();
  const maxLength = 500; // characters
  if (trimmed.length === 0) {
    return { valid: false, error: 'Prompt cannot be empty' };
  }
  if (trimmed.length > maxLength) {
    return { valid: false, error: `Prompt exceeds ${maxLength} characters` };
  }
  // blacklist common injection cues
  const blacklist = /\b(ignore|reset|system|assistant|prompt\s*injection)\b/i;
  if (blacklist.test(trimmed)) {
    return { valid: false, error: 'Prompt contains disallowed keywords' };
  }
  // strip control characters
  const cleaned = trimmed.replace(/[\x00-\x1F\x7F]/g, '');
  return { valid: true, cleaned };
}
