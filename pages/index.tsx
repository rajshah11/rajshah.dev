import { IndexLayout } from "../layouts";
import { Posts } from "../api";
import { PostCard } from "../components";

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

const RecentPostsStack = ({ posts }: Props) => {
  return (
    <>
      <PostCard></PostCard>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await Posts.getFrontmatterForAllPosts();
  return { props: { posts } };
};

IndexPage.displayName = "Index";
export default IndexPage;
