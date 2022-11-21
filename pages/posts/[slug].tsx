import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostLayout, PostLayoutKeys } from "../../layout/StyledLayouts";
import { getAllPosts, getPostBySlug } from "../../lib/api";

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
  const layout: PostLayoutKeys = (post.mdxSource.frontmatter?.layout ??
    "post") as PostLayoutKeys;
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
  const post = await getPostBySlug(params.slug);

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
  const posts = await getAllPosts();
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
