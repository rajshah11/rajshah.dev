import * as Styled from "./PostLayout.styled";
import dayjs from "dayjs";
import Head from "next/head";

export const PostLayout = ({
  title,
  date,
  children,
}: {
  title: string | undefined;
  date: string;
  children: React.ReactNode;
}) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{title}</h1>
    <Styled.PostDate> {dayjs(date).format("MMMM DD, YYYY")}</Styled.PostDate>
    <Styled.PostContent>{children}</Styled.PostContent>
  </div>
);
