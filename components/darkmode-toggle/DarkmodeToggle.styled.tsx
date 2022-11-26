import styled, { css } from "styled-components";
import * as Toggle from "@radix-ui/react-toggle";
import { SunIcon as SunSvg, MoonIcon as MoonSvg } from "@radix-ui/react-icons";

export const DarkmodeToggleIcon = styled(Toggle.Root)`
  ${(props) => css`
    background-color: ${props.theme.colors.subtleBackground};
    color: ${props.theme.colors.lowContrastText};
    height: 2.25em;
    width: 2.25em;
    display: block;
    border-radius: 0.5em;
    border-width: 0;
    &:hover {
      background-color: ${props.theme.colors.hoveredUiElementBackground};
      color: ${props.theme.colors.highContrastText};
      cursor: pointer;
    }
  `}
`;

export const SunIcon = styled(SunSvg)`
  width: 1.5em;
  height: 1.5em;
  margin: auto;
`;

export const MoonIcon = styled(MoonSvg)`
  width: 1.5em;
  height: 1.5em;
  margin: auto;
`;
