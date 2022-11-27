import { PostLayoutKeysType } from "../Layout.types";
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
  <div>
    <h1>{title}</h1>
    <Styled.PostDate> {dayjs(date).format("MMMM DD, YYYY")}</Styled.PostDate>
    <Styled.PostContent>{children}</Styled.PostContent>
  </div>
);
