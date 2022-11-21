import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import { MDXProvider } from "@mdx-js/react";
import { ImageGallery } from "../layout/StyledLayouts";
import "../public/styles/flexboxgrid.css";
import "../public/prism/prism.css";

const components = { ImageGallery };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;
