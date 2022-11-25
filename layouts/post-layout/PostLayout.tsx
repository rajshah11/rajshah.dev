import { Layout } from "../layout/Layout";
import { PostLayoutKeysType } from "../layout/Layout.types";
import * as Styled from "./PostLayout.styled";
import dayjs from "dayjs";

export const PostLayout = ({
  title,
  date,
  children,
  layout,
}: {
  title: string | undefined;
  date: string;
  children: React.ReactNode;
  layout: PostLayoutKeysType;
}) => (
  <Layout title={title} pageHeader={title} layout={layout}>
    <Styled.PostDate> {dayjs(date).format("MMMM DD, YYYY")}</Styled.PostDate>
    <Styled.PostContent>{children}</Styled.PostContent>
  </Layout>
);
