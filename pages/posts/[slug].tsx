import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostLayout } from "../../layouts";
import { Posts } from "../../api";

interface PostInterface {
  slug: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

const PostPage = ({ post }: { post: PostInterface }) => {
  return (
    <PostLayout
      title={post.mdxSource.frontmatter?.title}
      date={post.mdxSource.frontmatter?.date ?? ""}
    >
      <MDXRemote {...post.mdxSource} />
    </PostLayout>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await Posts.getPostBySlug(params.slug);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths(): Promise<{
  paths: { params: { slug: string } }[];
  fallback: boolean;
}> {
  const posts = await Posts.getAllPosts();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

PostPage.displayName = "Post";
export default PostPage;
