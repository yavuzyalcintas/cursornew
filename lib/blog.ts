import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  content: string;
}

export async function getAllPostSlugs() {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    author: data.author,
    content,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPosts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      return await getPostBySlug(slug);
    })
  );

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
