import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-semibold mb-2 text-primary hover:text-primary/90">
                {post.title}
              </h2>
              <div className="text-gray-600 text-sm mb-2">
                <span>{post.date}</span> • <span>{post.author}</span>
              </div>
              <p className="text-gray-400">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
