import { IndexLayout } from "../layouts";
import { Posts } from "../api";
import { PostCard, Stack, Badge } from "../components";
import { BANNER_LABEL, RECENT_POSTS_COUNT } from "../constants";

type Props = {
  posts: {
    slug: string;
    frontmatter: Record<string, string> | undefined;
  }[];
};
const IndexPage = ({ posts }: Props) => {
  return (
    <IndexLayout>
      <RecentPostsStack posts={posts}></RecentPostsStack>
    </IndexLayout>
  );
};

const RecentPostsStack = ({ posts }: Props) => (
  <Stack direction="column" gap="2em">
    {posts.map((post, index) => (
      <Badge
        key={`BADGE-${index}`}
        content={
          BANNER_LABEL.includes(post.frontmatter?.banner_label ?? "")
            ? post.frontmatter?.banner_label
            : ""
        }
        toUpperCase={true}
      >
        <PostCard
          key={`POST-${index}`}
          title={post.frontmatter?.title ?? ""}
          content={post.frontmatter?.banner_text ?? ""}
          date={post.frontmatter?.date ?? ""}
          link={`/posts/${post.slug}`}
        />
      </Badge>
    ))}
  </Stack>
);

export const getStaticProps = async () => {
  const posts = await Posts.getFrontmatterForRecentPosts(RECENT_POSTS_COUNT);
  return { props: { posts } };
};

IndexPage.displayName = "Index";
export default IndexPage;
