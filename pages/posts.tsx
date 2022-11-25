import { PostsLayout } from "../layouts";
import { Posts } from "../api";
import { PostsTable } from "../components";

type Props = {
  posts: {
    slug: string;
    frontmatter: Record<string, string> | undefined;
  }[];
};
const PostsPage = ({ posts }: Props) => {
  return (
    <PostsLayout>
      <PostsTable posts={posts}></PostsTable>
    </PostsLayout>
  );
};

export const getStaticProps = async () => {
  const posts = await Posts.getFrontmatterForAllPosts();
  return { props: { posts } };
};

PostsPage.displayName = "Posts";
export default PostsPage;
