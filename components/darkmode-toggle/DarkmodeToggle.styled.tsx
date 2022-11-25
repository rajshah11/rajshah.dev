import styled, { css } from "styled-components";
import * as Toggle from "@radix-ui/react-toggle";
import { SunIcon as SunSvg, MoonIcon as MoonSvg } from "@radix-ui/react-icons";

export const DarkmodeToggleIcon = styled(Toggle.Root)`
  ${(props) => css`
    background-color: ${props.theme.colors.appBackground};
    color: ${props.theme.colors.lowContrastText};
    height: 3em;
    width: 3em;
    display: flex;
    line-height: 1;
    align-items: center;
    justify-content: center;
    margin-left: 0.0625em;
    margin-left: 0;
    border-radius: 0.5em;
    border-width: 0;
    &:hover {
      background-color: ${props.theme.colors.hoveredUiElementBackground};
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
