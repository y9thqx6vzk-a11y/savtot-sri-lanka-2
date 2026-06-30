export const CLOUD_NAME = 'dsgvsqnjp'; // Reverted to original account where all old images reside

/**
 * Converts a local asset path to a Cloudinary URL.
 * Images are stored at the root level of the Cloudinary account
 * with their original filename as the public_id (no hash suffix).
 *
 * @param {string} path - e.g. '/home1.webp' or '/discovery-gallery/PXL_....webp'
 * @returns {string} Full Cloudinary URL
 */
export const getCloudinaryUrl = (path, options = {}) => {
  if (!path || typeof path !== 'string' || path.startsWith('http') || path.startsWith('data:')) return path;

  // Remove leading slash / ./ / ../
  const cleanPath = path.replace(/^(\/|\.\/|\.\.\/)+/, '');

  const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(cleanPath);
  const resourceType = isVideo ? 'video' : 'image';

  // Base optimizations: f_auto (best format), q_auto (best quality/size ratio), fl_progressive for faster perceived loading
  let transforms = 'f_auto,q_auto,fl_progressive';
  
  if (!isVideo) {
    if (options.width) transforms += `,w_${options.width}`;
    if (options.height) transforms += `,h_${options.height}`;
    if (options.crop) transforms += `,c_${options.crop || 'limit'}`;
  } else {
    // For videos, we might want to limit bitrate or size if needed
    if (options.width) transforms += `,w_${options.width}`;
  }

  return `https://res.cloudinary.com/${CLOUD_NAME}/${resourceType}/upload/${transforms}/${cleanPath}`;
};
