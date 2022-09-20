import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components";

<link href="https://fonts.googleapis.com/css2?family=Recursive&display=swap" rel="stylesheet"></link>

const GlobalStyle = createGlobalStyle`

@font-face{
  font-family: 'Recursive';
  src: url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');
}

html{
  background: #05445E;
  height: 100%;
  max-width: 60%;
  margin:0 auto;
  padding: 0;
}

body{
  font-family: 'Recursive', monospace;
  font-size: 20px;
  color: white;
  padding: 5% 5% 5% 5%;
}

a{
  color: white;
}
`;

const theme = {

};

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
