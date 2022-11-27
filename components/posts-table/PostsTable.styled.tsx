import styled, { css } from "styled-components";

export const PostsTable = styled.div`
  a {
    text-decoration: none;

    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
    }
    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }`;

export const PostTitle = styled.h3`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const PostDate = styled.div`
  font-size: 0.8em;
  color: ${(props) => props.theme.colors.lowContrastText};
`;

export const PostTitleAndDate = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const PostCategories = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25em;
  margin: auto;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const TableColumn = styled.div<{ width: string; customCss?: any }>`
  ${(props) => css`
    display: flex;
    flex-basis: ${props.width};
    ${props.customCss && props.customCss}
  }
  `}
`;
