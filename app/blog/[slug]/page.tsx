import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!post) {
    return {
      title: "Article non trouvé",
    }
  }

  return {
    title: `${post.title} | Blog JMP Solutions`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
      published: true,
    },
  })

  if (!post) {
    notFound()
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
        <div className="text-muted-foreground mb-8">Publié le {formatDate(post.createdAt.toString())}</div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

