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
      include: {
        sections: {
          orderBy: {
            order: 'asc'
          }
        }
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
    const { title, slug, excerpt, published, image, sections } = json

    // Validation
    if (!title || !slug || !sections || sections.length === 0) {
      return NextResponse.json({ message: "Titre, slug et au moins une section sont requis" }, { status: 400 })
    }

    // Validation des sections
    if (sections.length > 4) {
      return NextResponse.json({ message: "Maximum 4 sections autorisées" }, { status: 400 })
    }

    for (const section of sections) {
      if (!section.title || !section.content) {
        return NextResponse.json({ message: "Chaque section doit avoir un titre et un contenu" }, { status: 400 })
      }
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
        content: "", // Champ requis mais non utilisé
        excerpt: excerpt || "",
        published: published || false,
        image: image || null,
        sections: {
          create: sections.map((section: { title: string; content: string }, index: number) => ({
            title: section.title,
            content: section.content,
            order: index,
          })),
        },
      },
      include: {
        sections: true,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error("Erreur lors de la création de l'article:", error)
    return NextResponse.json({ message: "Une erreur est survenue lors de la création de l'article" }, { status: 500 })
  }
}

