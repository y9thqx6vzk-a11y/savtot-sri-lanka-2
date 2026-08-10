// Simple console logger fallback

const logger = {
  info: (...args) => console.log('[INFO]', ...args),
  debug: (...args) => console.debug('[DEBUG]', ...args),
  error: (...args) => console.error('[ERROR]', ...args),
  warn: (...args) => console.warn('[WARN]', ...args)
};

export { logger };
