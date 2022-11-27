import styled, { css } from "styled-components";
import * as Toggle from "@radix-ui/react-toggle";
import { SunIcon as SunSvg, MoonIcon as MoonSvg } from "@radix-ui/react-icons";

export const DarkmodeToggleIcon = styled(Toggle.Root)`
  ${(props) => css`
    background-color: ${props.theme.colors.subtleBackground};
    color: ${props.theme.colors.lowContrastText};
    height: 3em;
    width: 3em;
    margin: auto;
    border-radius: 0.5em;
    border-width: 0;
    margin: auto;
    &:hover {
      background-color: ${props.theme.colors.hoveredUiElementBackground};
      color: ${props.theme.colors.highContrastText};
      cursor: pointer;
    }
  `}
`;

export const SunIcon = styled(SunSvg)`
  width: 2em;
  height: 2em;
`;

export const MoonIcon = styled(MoonSvg)`
  width: 2em;
  height: 2em;
`;
