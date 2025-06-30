import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { marked } from "marked";

type Section = {
  id: string;
  title: string;
  content: string;
  order: number;
};

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content?: string;
  excerpt: string;
  image?: string | null;
  sections: Section[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!post) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: `${post.title} | Blog JMP Solutions`,
    description: post.excerpt,
  };
}

function preprocessMarkdown(text: string): string {
  return (
    text
      // 1. Supprime tous les espaces/tabs en début de ligne avant un tiret
      .replace(/^[ \t]*-+/gm, "-")
      // 2. Ajoute un espace après le tiret si manquant
      .replace(/(^|\n)-([^ \n])/g, "$1- $2")
      // 3. Ajoute une ligne vide avant chaque bloc de liste (sauf si déjà présente)
      .replace(/([^\n])\n(- )/g, "$1\n\n$2")
      // 4. Limite les multiples retours à la ligne à 2
      .replace(/\n{3,}/g, "\n\n")
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
      published: true,
    },
    include: {
      sections: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux articles
        </Link>
      </Button>

      <article className="prose prose-blue max-w-3xl mx-auto">
        <h1>{post.title}</h1>
        <div className="text-muted-foreground mb-8">
          Publié le {formatDate(post.createdAt.toString())}
        </div>
        {post.image && (
          <div className="relative mb-8 rounded-lg overflow-hidden max-h-[600px] flex items-center justify-center">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={800}
              className="max-h-[600px] w-auto h-auto object-contain"
              priority
            />
          </div>
        )}
        {post.sections?.map((section: Section, index: number) => (
          <div key={index} className="mb-8">
            <h2>{section.title}</h2>
            <div
              className="prose prose-blue"
              dangerouslySetInnerHTML={{
                __html: marked(preprocessMarkdown(section.content), {
                  gfm: true,
                }),
              }}
            />
          </div>
        ))}
      </article>
    </div>
  );
}
