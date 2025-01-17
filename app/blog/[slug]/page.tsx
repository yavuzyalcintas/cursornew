import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    return (
      <article className="container mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:text-gray-100 prose-a:text-primary hover:prose-a:text-primary/90 max-w-4xl">
        <div className="text-muted-foreground mb-8">
          <span>{post.date}</span> • <span>{post.author}</span>
        </div>
        <div className="prose-p:text-gray-300 prose-strong:text-gray-200 prose-em:text-gray-300 prose-code:text-gray-200 prose-li:text-gray-300">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
