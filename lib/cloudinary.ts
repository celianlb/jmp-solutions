import { v2 as cloudinary } from "cloudinary";

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(
  file: Buffer,
  filename: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "jmp-solutions",
        public_id: filename.replace(/\.[^/.]+$/, ""), // Enlever l'extension
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          console.error("Erreur Cloudinary:", error);
          reject(error);
        } else if (result) {
          console.log("Upload Cloudinary réussi:", result.secure_url);
          resolve(result.secure_url);
        } else {
          reject(new Error("Aucun résultat de Cloudinary"));
        }
      }
    );

    uploadStream.end(file);
  });
}

export default cloudinary;
