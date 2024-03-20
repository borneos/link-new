export function populateAdditionalImage(data) {
  const CDN = `https://res.cloudinary.com/borneos-co/image/upload/`;
  const {
    isGrayscale,
    public_id,
    extension,
    height,
    width,
    crop = 'c_fill',
  } = data;

  return `${CDN}w_${width},h_${height},${crop}/${
    isGrayscale ? `e_grayscale/` : ``
  }${public_id}.${extension}`;
}

export const isMobile = (userAgent: string): boolean => {
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
};