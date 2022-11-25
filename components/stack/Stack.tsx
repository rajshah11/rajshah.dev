import styled, { css } from "styled-components";

export const Stack = styled.div<{
  direction: "row" | "column";
  gap: string | undefined;
}>`
  ${(props) => css`
    display: flex;
    flex-direction: ${props.direction};
    ${props.gap &&
    css`
      gap: ${props.gap};
    `}
  `}
`;
