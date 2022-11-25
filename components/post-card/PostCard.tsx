import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as Styled from "../post-card/PostCard.styled";

export const PostCard = () => {
  return (
    <Styled.PostCardRoot>
      <Styled.PostCardMain href="/posts/css-magic-to-size-a-container" passHref>
        <Styled.PostCardTitle>
          CSS magic to size a container for any viewport
        </Styled.PostCardTitle>
        <Styled.PostCardContent>
          A simple CSS trick to set the max-width of component such that content
          is centered and in-focus on any viewport. The same logic can also
          applied to other quantities like height, font size, etc.
        </Styled.PostCardContent>
      </Styled.PostCardMain>
      <Styled.PostCardLink href="/posts/css-magic-to-size-a-container">
        Read More &rarr;
      </Styled.PostCardLink>
    </Styled.PostCardRoot>
  );
};
