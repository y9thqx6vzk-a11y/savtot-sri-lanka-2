export const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dsgvsqnjp';

/**
 * Converts a local asset path to a Cloudinary URL.
 * Images are stored at the root level of the Cloudinary account
 * with their original filename as the public_id (no hash suffix).
 *
 * @param {string} path - e.g. '/home1.webp' or '/discovery-gallery/PXL_....webp'
 * @returns {string} Full Cloudinary URL
 */
export const getCloudinaryUrl = (path) => {
  if (!path || typeof path !== 'string' || path.startsWith('http') || path.startsWith('data:')) return path;

  // Remove leading slash / ./ / ../
  const cleanPath = path.replace(/^(\/|\.\/|\.\.\/)+/, '');

  const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(cleanPath);
  const resourceType = isVideo ? 'video' : 'image';

  // f_auto = serve webp/avif automatically; q_auto = optimal quality
  const transforms = isVideo ? '' : 'f_auto,q_auto/';

  return `https://res.cloudinary.com/${CLOUD_NAME}/${resourceType}/upload/${transforms}${cleanPath}`;
};
