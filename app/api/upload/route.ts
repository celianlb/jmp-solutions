import { writeFile } from "fs/promises"
import { NextRequest, NextResponse } from "next/server"
import path from "path"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json(
        { error: "Aucun fichier n'a été envoyé" },
        { status: 400 }
      )
    }

    // Vérifier le type de fichier
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Le fichier doit être une image" },
        { status: 400 }
      )
    }

    // Générer un nom de fichier unique
    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = `${uuidv4()}${path.extname(file.name)}`
    const uploadDir = path.join(process.cwd(), "public/uploads")
    const filePath = path.join(uploadDir, filename)

    // Sauvegarder le fichier
    await writeFile(filePath, buffer)

    // Retourner l'URL de l'image
    return NextResponse.json({ url: `/uploads/${filename}` })
  } catch (error) {
    console.error("Erreur lors de l'upload:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'upload du fichier" },
      { status: 500 }
    )
  }
}
