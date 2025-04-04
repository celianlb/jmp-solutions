import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        published: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error)
    return NextResponse.json(
      { message: "Une erreur est survenue lors de la récupération des articles" },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
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

    // Vérifier si le slug existe déjà
    const existingPost = await prisma.post.findUnique({
      where: {
        slug,
      },
    })

    if (existingPost) {
      return NextResponse.json({ message: "Un article avec ce slug existe déjà" }, { status: 400 })
    }

    const post = await prisma.post.create({
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
    console.error("Erreur lors de la création de l'article:", error)
    return NextResponse.json({ message: "Une erreur est survenue lors de la création de l'article" }, { status: 500 })
  }
}

