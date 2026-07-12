import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");

export type BlogPostMetadata = {
  title: string;
  date: string;
  description: string;
  category: string;
  author: string;
  slug: string;
};

export type BlogPost = {
  metadata: BlogPostMetadata;
  content: string;
};

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(contentDir, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      metadata: {
        title: data.title,
        date: data.date,
        description: data.description,
        category: data.category,
        author: data.author,
        slug: realSlug,
      },
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const slugs = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.metadata.date > post2.metadata.date ? -1 : 1));
    
  return posts;
}
