import { IndexLayout } from "../layouts";
import { Posts } from "../api";
import { PostCard, Stack } from "../components";

type Props = {
  posts: {
    slug: string;
    frontmatter: Record<string, string> | undefined;
  }[];
};
const IndexPage = ({ posts }: Props) => (
  <IndexLayout>
    <RecentPostsStack posts={posts}></RecentPostsStack>
  </IndexLayout>
);

const RecentPostsStack = ({ posts }: Props) => (
  <Stack direction="column" gap="2em">
    {posts.map((post) => (
      <PostCard
        title={post.frontmatter?.title ?? ""}
        content={post.frontmatter?.banner_text ?? ""}
        date={post.frontmatter?.date ?? ""}
        link={`/posts/${post.slug}`}
      />
    ))}
  </Stack>
);

export const getStaticProps = async () => {
  const posts = await Posts.getFrontmatterForAllPosts();
  return { props: { posts } };
};

IndexPage.displayName = "Index";
export default IndexPage;
