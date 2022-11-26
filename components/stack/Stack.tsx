import styled, { css } from "styled-components";

export const Stack = styled.div<{
  direction: "row" | "column";
  gap?: string | number;
  padding?: string;
  margin?: string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
}>`
  ${({ direction, gap, padding, margin, justifyContent, alignItems }) => css`
    display: flex;
    flex-direction: ${direction};
    ${gap &&
    css`
      gap: ${gap};
    `}
    ${padding &&
    css`
      padding: ${padding};
    `}
    ${margin &&
    css`
      margin: ${margin};
    `}
        ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
   ${alignItems &&
    css`
      align-items: ${alignItems};
    `}
  `}
`;
