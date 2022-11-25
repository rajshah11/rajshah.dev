import * as Styled from "../post-card/PostCard.styled";
import * as Types from "../post-card/PostCard.types";
import dayjs from "dayjs";

export const PostCard = ({
  title,
  content,
  date,
  link,
}: Types.PostCardProps) => {
  return (
    <Styled.PostCardRoot>
      <Styled.PostCardMain href={link} passHref>
        <Styled.PostCardTitle>{title}</Styled.PostCardTitle>
        <Styled.StyledDate>
          {dayjs(date).format("MMMM DD, YYYY")}
        </Styled.StyledDate>
        <Styled.PostCardContent>{content}</Styled.PostCardContent>
      </Styled.PostCardMain>
      <Styled.PostCardLink href={link}>Read More &rarr;</Styled.PostCardLink>
    </Styled.PostCardRoot>
  );
};
