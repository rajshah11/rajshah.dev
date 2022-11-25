import { DefaultTheme } from "styled-components";
import { BaseTheme } from "./BaseTheme";
import { cyanDark, slateDark } from "@radix-ui/colors";

export const DarkTheme: DefaultTheme = {
  ...BaseTheme,
  colors: {
    appBackground: cyanDark.cyan1,
    subtleBackground: cyanDark.cyan2,
    uiElementBackground: cyanDark.cyan3,
    hoveredUiElementBackground: cyanDark.cyan4,
    activeUiElementBackground: cyanDark.cyan5,
    subtleBordersAndSeperators: cyanDark.cyan6,
    uiElementBorder: cyanDark.cyan7,
    hoveredUiElementBorder: cyanDark.cyan8,
    solidBackground: cyanDark.cyan9,
    hoveredSolidBackground: cyanDark.cyan10,
    lowContrastText: cyanDark.cyan11,
    highContrastText: cyanDark.cyan12,
  },
  grays: {
    appBackground: slateDark.slate1,
    subtleBackground: slateDark.slate2,
    uiElementBackground: slateDark.slate3,
    hoveredUiElementBackground: slateDark.slate4,
    activeUiElementBackground: slateDark.slate5,
    subtleBordersAndSeperators: slateDark.slate6,
    uiElementBorder: slateDark.slate7,
    hoveredUiElementBorder: slateDark.slate8,
    solidBackground: slateDark.slate9,
    hoveredSolidBackground: slateDark.slate10,
    lowContrastText: slateDark.slate11,
    highContrastText: slateDark.slate12,
  },
};
