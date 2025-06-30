import { uploadToCloudinary } from "@/lib/cloudinary";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  try {
    console.log("Début de l'upload - Environnement:", process.env.NODE_ENV);

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      console.log("Erreur: Aucun fichier reçu");
      return NextResponse.json(
        { error: "Aucun fichier n'a été envoyé" },
        { status: 400 }
      );
    }

    console.log("Fichier reçu:", {
      name: file.name,
      type: file.type,
      size: file.size,
    });

    // Vérifier le type de fichier
    if (!file.type.startsWith("image/")) {
      console.log("Erreur: Type de fichier invalide:", file.type);
      return NextResponse.json(
        { error: "Le fichier doit être une image" },
        { status: 400 }
      );
    }

    // Vérifier la taille du fichier (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      console.log("Erreur: Fichier trop volumineux:", file.size);
      return NextResponse.json(
        { error: "Le fichier est trop volumineux. Taille maximum : 5MB" },
        { status: 400 }
      );
    }

    // Générer un nom de fichier unique
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${uuidv4()}${file.name.substring(file.name.lastIndexOf("."))}`;

    // Utiliser Cloudinary dans tous les environnements
    try {
      // Vérifier si Cloudinary est configuré
      if (
        !process.env.CLOUDINARY_CLOUD_NAME ||
        !process.env.CLOUDINARY_API_KEY ||
        !process.env.CLOUDINARY_API_SECRET
      ) {
        console.error("Configuration Cloudinary manquante");
        return NextResponse.json(
          {
            error:
              "Configuration d'upload manquante. Veuillez configurer Cloudinary.",
          },
          { status: 500 }
        );
      }

      const imageUrl = await uploadToCloudinary(buffer, filename);
      console.log("Upload Cloudinary réussi:", imageUrl);

      // Retourner l'URL de l'image
      return NextResponse.json({ url: imageUrl });
    } catch (cloudinaryError) {}
  } catch (error) {
    console.error("Erreur générale lors de l'upload:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'upload du fichier" },
      { status: 500 }
    );
  }
}
