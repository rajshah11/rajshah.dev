import { Layout } from "../layout/Layout";

export const PostsLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout pageHeader="Posts" layout="posts">
    {children}
  </Layout>
);
