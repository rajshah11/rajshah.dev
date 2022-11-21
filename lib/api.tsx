import fs from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import remarkPrism from "remark-prism";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const mdxSource = await serialize(fileContents, {
    mdxOptions: {
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkPrism,
        remarkGfm,
      ],
      rehypePlugins: [],
      format: "mdx",
    },
    parseFrontmatter: true,
  });

  return { slug: realSlug, mdxSource };
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug))
  );
  // sort posts by date in descending order
  return posts;
}
