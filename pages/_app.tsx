import type { AppProps } from 'next/app'
import Layout from "../layout/Layout"
import ThemeInterface from "../types/theme"
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('Rendering!')
  const [darkmode, setDarkmode] = useState(true)

  const toggleDarkmode = () => {
    setDarkmode(!darkmode)
  }

  const theme: ThemeInterface = { darkmode, toggleDarkmode }
  return <>
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
}

export default MyApp
