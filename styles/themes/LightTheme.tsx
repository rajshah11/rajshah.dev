import { DefaultTheme } from "styled-components";
import { BaseTheme } from "./BaseTheme";
import { cyan, slate } from "@radix-ui/colors";

export const LightTheme: DefaultTheme = {
  ...BaseTheme,
  colors: {
    appBackground: cyan.cyan1,
    subtleBackground: cyan.cyan2,
    uiElementBackground: cyan.cyan3,
    hoveredUiElementBackground: cyan.cyan4,
    activeUiElementBackground: cyan.cyan5,
    subtleBordersAndSeperators: cyan.cyan6,
    uiElementBorder: cyan.cyan7,
    hoveredUiElementBorder: cyan.cyan8,
    solidBackground: cyan.cyan9,
    hoveredSolidBackground: cyan.cyan10,
    lowContrastText: cyan.cyan11,
    highContrastText: cyan.cyan12,
  },
  grays: {
    appBackground: slate.slate1,
    subtleBackground: slate.slate2,
    uiElementBackground: slate.slate3,
    hoveredUiElementBackground: slate.slate4,
    activeUiElementBackground: slate.slate5,
    subtleBordersAndSeperators: slate.slate6,
    uiElementBorder: slate.slate7,
    hoveredUiElementBorder: slate.slate8,
    solidBackground: slate.slate9,
    hoveredSolidBackground: slate.slate10,
    lowContrastText: slate.slate11,
    highContrastText: slate.slate12,
  },
};
