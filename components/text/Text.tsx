import styled, { css } from "styled-components";

export const Header = styled.h1<{ margin?: string }>`
  ${(props) =>
    props.margin != undefined &&
    css`
      margin: ${props.margin};
    `};
`;

export const Header2 = styled.h2<{ margin?: string }>`
  ${(props) =>
    props.margin != undefined &&
    css`
      margin: ${props.margin};
    `};
`;
