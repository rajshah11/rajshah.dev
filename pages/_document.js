import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="/prism/prism.css" rel="stylesheet" />
        <link href="/styles/flexboxgrid.css" rel="stylesheet" />
      </Head>
      <body>
        <Main>
          <script src="/prism/prism.js"></script>
        </Main>
        <NextScript />
      </body>
    </Html>
  );
}
