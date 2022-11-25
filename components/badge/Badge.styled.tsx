import { Label } from "@radix-ui/react-label";
import styled, { css } from "styled-components";

export const BadgeRoot = styled.div<{ $isTop: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isTop ? "column" : "column-reverse")};
  padding: 0;
  margin: 0;
`;

export const Badge = styled.div<{ $isLeft: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: ${(props) => (props.$isLeft ? "flex-start" : "flex-end")};
  padding: 0;
  margin: 0;
`;

export const BadgeLabel = styled(Label)`
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
  `}
`;
