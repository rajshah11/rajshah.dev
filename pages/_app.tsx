import type { AppProps } from 'next/app'
import GlobalFonts from "../fonts/fonts";
import Layout from "../layout/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalFonts />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
