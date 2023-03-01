import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <>
      <Html className="scroll-smooth" lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="canonical" href="https://fastwpay.com" />
          <meta charSet="UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
