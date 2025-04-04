import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: params.id,
      },
    })

    if (!post) {
      return NextResponse.json({ message: "Article non trouvé" }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error("Erreur lors de la récupération de l'article:", error)
    return NextResponse.json(
      { message: "Une erreur est survenue lors de la récupération de l'article" },
      { status: 500 },
    )
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  try {
    const json = await request.json()
    const { title, slug, content, excerpt, published } = json

    // Validation
    if (!title || !slug || !content) {
      return NextResponse.json({ message: "Titre, slug et contenu sont requis" }, { status: 400 })
    }

    // Vérifier si le slug existe déjà (sauf pour le même article)
    const existingPost = await prisma.post.findFirst({
      where: {
        slug,
        id: {
          not: params.id,
        },
      },
    })

    if (existingPost) {
      return NextResponse.json({ message: "Un article avec ce slug existe déjà" }, { status: 400 })
    }

    const post = await prisma.post.update({
      where: {
        id: params.id,
      },
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || "",
        published: published || false,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'article:", error)
    return NextResponse.json(
      { message: "Une erreur est survenue lors de la mise à jour de l'article" },
      { status: 500 },
    )
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  try {
    await prisma.post.delete({
      where: {
        id: params.id,
      },
    })

    return NextResponse.json({ message: "Article supprimé avec succès" })
  } catch (error) {
    console.error("Erreur lors de la suppression de l'article:", error)
    return NextResponse.json(
      { message: "Une erreur est survenue lors de la suppression de l'article" },
      { status: 500 },
    )
  }
}

