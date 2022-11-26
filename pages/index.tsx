import { promises as fs } from "fs";
import * as Styled from "../styles";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";
import { Empty, PostsTable } from "../components";
import { getFrontmatterForRecentPosts } from "../api/posts/Posts";
import { PostFrontmatterType } from "../api/posts/Posts.types";

type Props = {
  aboutMdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  recentPosts: Array<PostFrontmatterType>;
};
const IndexPage = ({ aboutMdxSource, recentPosts }: Props) => {
  return (
    <div>
      <Styled.AboutContent>
        <MDXRemote {...aboutMdxSource} />
      </Styled.AboutContent>
      <Empty space="1em" />
      <h2>Recent Posts</h2>
      <PostsTable posts={recentPosts} />
    </div>
  );
};

const getAboutContent = async () => {
  const aboutContent = await fs.readFile(
    join(process.cwd(), "pages-content/about.mdx")
  );
  return await serialize(aboutContent, {
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
  });
};

export const getStaticProps = async () => {
  const aboutMdxSourcePromise = getAboutContent();
  const recentPostsPromise = getFrontmatterForRecentPosts(5);
  return Promise.all([aboutMdxSourcePromise, recentPostsPromise]).then(
    ([aboutMdxSource, recentPosts]) => {
      return { props: { aboutMdxSource, recentPosts } };
    }
  );
};

IndexPage.displayName = "Index";
export default IndexPage;
