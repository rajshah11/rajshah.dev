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

export const PostTitle = styled.h2``;

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

export const PostCategoryLabel = styled.label`
  ${(props) => css`
    font-size: 0.8em;
    display: flex;
    color: ${props.theme.grays.highContrastText};
    background-color: ${props.theme.grays.uiElementBackground};
    border: 0.25em solid;
    border-color: ${props.theme.grays.uiElementBorder};
    border-radius: 0.5em;
    padding-right: 1em;
    padding-left: 1em;
    padding-bottom: 0.25em;
    padding-top: 0.25em;
    z-index: 1;
    &:hover {
      cursor: pointer;
    }
  `}
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
