import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!post) {
      return NextResponse.json(
        { message: "Article non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'article:", error);
    return NextResponse.json(
      {
        message: "Une erreur est survenue lors de la récupération de l'article",
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  const { id } = await params;

  if (!session) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
  }

  try {
    const json = await request.json();
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

    // Vérifier si le slug existe déjà (sauf pour le même article)
    const existingPost = await prisma.post.findFirst({
      where: {
        slug,
        id: {
          not: id,
        },
      },
    });

    if (existingPost) {
      return NextResponse.json(
        { message: "Un article avec ce slug existe déjà" },
        { status: 400 }
      );
    }

    // Supprimer les sections existantes
    await prisma.section.deleteMany({
      where: {
        postId: id,
      },
    })

    // Mettre à jour l'article avec les nouvelles sections
    const post = await prisma.post.update({
      where: {
        id,
      },
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
        sections: {
          orderBy: {
            order: 'asc'
          }
        }
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'article:", error);
    return NextResponse.json(
      {
        message: "Une erreur est survenue lors de la mise à jour de l'article",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
  }

  try {
    await prisma.post.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: "Article supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'article:", error);
    return NextResponse.json(
      {
        message: "Une erreur est survenue lors de la suppression de l'article",
      },
      { status: 500 }
    );
  }
}
