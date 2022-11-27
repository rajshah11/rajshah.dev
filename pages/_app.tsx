import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ImageGallery } from "../components";
import "../public/styles/flexboxgrid.css";
import "../public/styles/prism/prism.css";
import { GlobalStyle, LightTheme, DarkTheme } from "../styles";
import { ThemeProvider } from "styled-components";
import * as React from "react";
import {
  ThemeContext,
  ThemeContextType,
  ThemeType,
} from "../styles/themes/ThemeContext";
import { Layout } from "../layouts";
import { NextPage } from "next";

const components = { ImageGallery: ImageGallery };
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [theme, setTheme] = React.useState<ThemeType>("dark");
  React.useEffect(() => {
    const darkmodePreference = window.localStorage.getItem(
      "dark-mode-preference"
    ) as ThemeType;
    darkmodePreference && setTheme(darkmodePreference);
  }, []);
  const themeContext: ThemeContextType = {
    theme: theme,
    toggleTheme: () => {
      window.localStorage.setItem(
        "dark-mode-preference",
        theme == "dark" ? "light" : "dark"
      );
      setTheme(theme == "dark" ? "light" : "dark");
    },
  };
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={theme == "dark" ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <MDXProvider components={components}>
          {getLayout(<Component {...pageProps} />)}
        </MDXProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
