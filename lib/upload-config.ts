export interface UploadConfig {
  maxFileSize: number;
  allowedTypes: string[];
}

export const uploadConfig: UploadConfig = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
  ],
};

export function getImageUrl(filename: string): string {
  // Maintenant que tout passe par Cloudinary, cette fonction n'est plus nécessaire
  // mais gardée pour compatibilité
  return filename;
}
