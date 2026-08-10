// Simple in-memory rate limiter using Map

const rateMap = new Map(); // key: IP, value: { count, firstSeen }

function cleanup() {
  const now = Date.now();
  for (const [ip, info] of rateMap.entries()) {
    if (now - info.firstSeen > 60 * 1000) {
      rateMap.delete(ip);
    }
  }
}

// Periodic cleanup every minute
setInterval(cleanup, 60 * 1000);

export async function rateLimiter(req) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('remote-addr') || 'unknown';
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (entry && now - entry.firstSeen < 60 * 1000) {
    if (entry.count >= 20) {
      return false; // limit exceeded
    }
    entry.count += 1;
    rateMap.set(ip, entry);
    return true;
  }
  // New entry or expired
  rateMap.set(ip, { count: 1, firstSeen: now });
  return true;
}
