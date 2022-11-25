import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostLayout, PostLayoutKeysType } from "../../layouts";
import { Posts } from "../../api";

interface PostInterface {
  slug: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

export default function PostPage({
  post,
}: {
  post: PostInterface;
}): JSX.Element {
  const layout: PostLayoutKeysType = (post.mdxSource.frontmatter?.layout ??
    "post") as PostLayoutKeysType;
  return (
    <PostLayout title={post.mdxSource.frontmatter?.title} layout={layout}>
      <MDXRemote {...post.mdxSource} />
    </PostLayout>
  );
}

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
