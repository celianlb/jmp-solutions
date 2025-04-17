"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, ImagePlus, Loader2, X } from "lucide-react"
import { slugify } from "@/lib/utils"

type Section = {
  id?: string
  title: string
  content: string
  order: number
}

type BlogPost = {
  id?: string
  title: string
  slug: string
  content?: string
  excerpt: string
  image?: string
  sections: Section[]
  published: boolean
}

interface BlogPostEditorProps {
  post?: BlogPost | null
  onSaveComplete: () => void
}

export default function BlogPostEditor({ post, onSaveComplete }: BlogPostEditorProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<BlogPost>({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    image: post?.image || "",
    sections: post?.sections || [{ title: "", content: "", order: 0 }],
    published: post?.published || false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [autoSlug, setAutoSlug] = useState(true)

  useEffect(() => {
    if (post) {
      setFormData({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || "",
        image: post.image || "",
        sections: post.sections || [{ title: "", content: "", order: 0 }],
        published: post.published,
      })
      setAutoSlug(false)
    }
  }, [post])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Auto-generate slug from title if enabled
    if (name === "title" && autoSlug) {
      setFormData((prev) => ({ ...prev, slug: slugify(value) }))
    }
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutoSlug(false)
    handleChange(e)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const url = post?.id ? `/api/blog/${post.id}` : "/api/blog"
      const method = post?.id ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Une erreur est survenue")
      }

      onSaveComplete()
      router.refresh()
    } catch (error: any) {
      setError(error.message || "Une erreur est survenue")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="title">Titre</Label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" name="slug" value={formData.slug} onChange={handleSlugChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <div className="flex items-center gap-4">
          <Input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0]
              if (file) {
                const formData = new FormData()
                formData.append("file", file)

                try {
                  const response = await fetch("/api/upload", {
                    method: "POST",
                    body: formData,
                  })

                  if (!response.ok) {
                    throw new Error("Erreur lors de l'upload de l'image")
                  }

                  const data = await response.json()
                  setFormData((prev) => ({ ...prev, image: data.url }))
                } catch (error: any) {
                  setError(error.message || "Une erreur est survenue lors de l'upload de l'image")
                }
              }
            }}
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById("image")?.click()}
            className="flex items-center gap-2"
          >
            <ImagePlus className="h-4 w-4" />
            {formData.image ? "Changer l'image" : "Ajouter une image"}
          </Button>
          {formData.image && (
            <div className="relative w-24 h-24">
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-full object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, image: "" }))}
                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Extrait</Label>
        <Textarea id="excerpt" name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} required />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Sections</h3>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              if (formData.sections.length < 4) {
                setFormData((prev) => ({
                  ...prev,
                  sections: [
                    ...prev.sections,
                    {
                      title: "",
                      content: "",
                      order: prev.sections.length,
                    },
                  ],
                }))
              }
            }}
            disabled={formData.sections.length >= 4}
          >
            Ajouter une section
          </Button>
        </div>

        {formData.sections.map((section, index) => (
          <div key={index} className="space-y-4 border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Section {index + 1}</h4>
              {formData.sections.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-destructive"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      sections: prev.sections
                        .filter((_, i) => i !== index)
                        .map((s, i) => ({ ...s, order: i })),
                    }))
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`section-${index}-title`}>Titre de la section</Label>
              <Input
                id={`section-${index}-title`}
                value={section.title}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    sections: prev.sections.map((s, i) =>
                      i === index ? { ...s, title: e.target.value } : s
                    ),
                  }))
                }}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`section-${index}-content`}>Contenu de la section</Label>
              <Textarea
                id={`section-${index}-content`}
                value={section.content}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    sections: prev.sections.map((s, i) =>
                      i === index ? { ...s, content: e.target.value } : s
                    ),
                  }))
                }}
                rows={6}
                required
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="published"
          checked={formData.published}
          onCheckedChange={(checked) => handleSwitchChange("published", checked)}
        />
        <Label htmlFor="published">Publier l'article</Label>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onSaveComplete}>
          Annuler
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {post?.id ? "Mettre à jour" : "Créer l'article"}
        </Button>
      </div>
    </form>
  )
}

