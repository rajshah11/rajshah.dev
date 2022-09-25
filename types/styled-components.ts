import * as styledComponents from "styled-components";

import ThemeInterface from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeConsumer,
  useTheme,
  ThemeContext
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeConsumer, useTheme, ThemeContext};
export default styled;