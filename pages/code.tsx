import { Posts } from "../api";
import { PostCard, Stack } from "../components";

type Props = {
  posts: {
    slug: string;
    frontmatter: Record<string, string> | undefined;
  }[];
};

const CodePage = ({ posts }: Props) => {
  return <AllCodePosts posts={posts} />;
};

const AllCodePosts = ({ posts }: Props) => (
  <Stack direction="column" gap="2em" padding="1em 0 0 0">
    {posts.map((post, index) => (
      <PostCard
        key={`POST-${index}`}
        title={post.frontmatter?.title ?? ""}
        content={post.frontmatter?.banner_text ?? ""}
        date={post.frontmatter?.date ?? ""}
        link={`/posts/${post.slug}`}
      />
    ))}
  </Stack>
);

export const getStaticProps = async () => {
  const posts = await Posts.getFrontmatterForPostsByCategory("code");
  return { props: { posts } };
};

CodePage.displayName = "Code";
export default CodePage;
