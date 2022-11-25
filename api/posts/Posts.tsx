import fs from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import remarkPrism from "remark-prism";
import { PostFrontmatterType, PostType } from "./Posts.types";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<PostType> {
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

const sortPostsByDate = (posts: Array<PostType>) =>
  posts.sort((p1, p2) => {
    return (
      new Date(p2.mdxSource.frontmatter?.date ?? "1970-01-01").getTime() -
      new Date(p1.mdxSource.frontmatter?.date ?? "1970-01-01").getTime()
    );
  });

export async function getAllPosts(): Promise<Array<PostType>> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug))
  );
  // sort posts by date in descending order
  return sortPostsByDate(posts);
}

export async function getFrontmatterForAllPosts(): Promise<
  Array<PostFrontmatterType>
> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug))
  );
  // sort posts by date in descending order
  return sortPostsByDate(posts).map((p) => {
    return {
      slug: p.slug,
      frontmatter: p.mdxSource.frontmatter,
    };
  });
}
