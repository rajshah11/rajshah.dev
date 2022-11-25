import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ImageGallery } from "../components";
import "../public/styles/flexboxgrid.css";
import "../public/prism/prism.css";
import { GlobalStyle, LightTheme, DarkTheme } from "../styles";
import { ThemeProvider } from "styled-components";
import * as React from "react";
import {
  ThemeContext,
  ThemeContextType,
  ThemeType,
} from "../styles/themes/ThemeContext";

const components = { ImageGallery: ImageGallery };

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState<ThemeType>("dark");
  const themeContext: ThemeContextType = {
    theme: theme,
    toggleTheme: () => setTheme(theme == "dark" ? "light" : "dark"),
  };
  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={theme == "dark" ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
