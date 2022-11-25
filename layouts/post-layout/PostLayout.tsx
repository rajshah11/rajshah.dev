import { timeLog } from "console";
import { Layout } from "../layout/Layout";
import { PostLayoutKeysType } from "../layout/Layout.types";
import * as Styled from "../post-layout/PostLayout.style";

export const PostLayout = ({
  title,
  children,
  layout,
}: {
  title: string | undefined;
  children: React.ReactNode;
  layout: PostLayoutKeysType;
}) => (
  <Layout title={title} pageHeader={title} layout={layout}>
    <Styled.PostContent>{children}</Styled.PostContent>
  </Layout>
);
