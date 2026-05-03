const CLOUD_NAME = 'dpodrwq71';

/**
 * Converts a local asset path to a Cloudinary URL.
 * @param {string} path - The local path (e.g., '/home1.jpg' or 'discovery-gallery/video.mp4')
 * @returns {string} - The full Cloudinary URL
 */
export const getCloudinaryUrl = (path) => {
  if (!path || typeof path !== 'string' || path.startsWith('http') || path.startsWith('data:')) return path;
  
  // Remove leading slash and any leading './' or '../'
  let cleanPath = path.replace(/^(\/|\.\/|\.\.\/)+/, '');
  
  // Normalize extensions for images to .webp (as per previous project optimization)
  const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(cleanPath);
  if (!isVideo) {
    cleanPath = cleanPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  const resourceType = isVideo ? 'video' : 'image';
  
  // Note: We skip the version (v12345) as it's optional for Cloudinary fetching.
  return `https://res.cloudinary.com/${CLOUD_NAME}/${resourceType}/upload/${cleanPath}`;
};
