import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostType = {
  slug: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};

export type PostFrontmatterType = {
  slug: string;
  frontmatter: Record<string, string> | undefined;
};
