"use client";

import BlogPostEditor from "@/components/admin/blog-post-editor";
import BlogPostsList from "@/components/admin/blog-posts-list";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, PlusCircle, Settings } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("posts");
  const [editingPost, setEditingPost] = useState<any>(null);

  const handleCreateNew = () => {
    setEditingPost(null);
    setActiveTab("editor");
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setActiveTab("editor");
  };

  const handleSaveComplete = () => {
    setActiveTab("posts");
    router.refresh();
  };

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Tableau de bord administrateur</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/change-password">
              <Settings className="mr-2 h-4 w-4" />
              Changer mot de passe
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="posts">Articles</TabsTrigger>
            <TabsTrigger value="editor">Éditeur</TabsTrigger>
          </TabsList>
          <Button onClick={handleCreateNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nouvel article
          </Button>
        </div>

        <TabsContent value="posts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Articles de blog</CardTitle>
              <CardDescription>
                Gérez les articles publiés sur votre blog
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BlogPostsList onEdit={handleEditPost} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="editor">
          <Card>
            <CardHeader>
              <CardTitle>
                {editingPost ? "Modifier l'article" : "Nouvel article"}
              </CardTitle>
              <CardDescription>
                {editingPost
                  ? "Modifiez les détails de l'article"
                  : "Créez un nouvel article de blog"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BlogPostEditor
                post={editingPost}
                onSaveComplete={handleSaveComplete}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
