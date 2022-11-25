import Link from "next/link";
import styled, { css } from "styled-components";

export const PostCardRoot = styled.div`
  ${(props) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${props.theme.colors.uiElementBackground};
    border: 0.0625em solid;
    border-color: ${props.theme.colors.uiElementBorder};
    border-radius: 0.5em;
    box-shadow: 0.0625em 0.0625em 2em
      ${props.theme.colors.subtleBordersAndSeperators};
    margin: auto;
    padding-right: 1em;
    padding-left: 1em;
    padding-bottom: 1em;
    &:hover {
      background-color: ${props.theme.colors.hoveredUiElementBackground};
      border-color: ${props.theme.colors.hoveredUiElementBorder};
      cursor: pointer;
    }
  `}
`;

export const PostCardTitle = styled.h3`
  margin-block-end: 0.5em;
`;

export const PostCardContent = styled.div`
  padding-bottom: 1em;
`;

export const PostCardMain = styled(Link)`
  text-decoration: none;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }

  &:hover,
  &:active {
    text-decoration: none;
  }
`;

export const PostCardLink = styled(Link)`
  text-decoration: none;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
export const StyledDate = styled.div`
  font-size: 0.8em;
  color: ${(props) => props.theme.colors.lowContrastText};
  padding-bottom: 0.8em;
`;
