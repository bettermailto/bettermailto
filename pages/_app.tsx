import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import Head from "next/head";
import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.sessions}>
      <Head>
        <title>bettermailto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:title" content="bettermailto" />
        <meta property="og:url" content="https://bettermailto.com/" />
        <meta
          property="og:description"
          content="The no-code replacement for mailto."
        />
        <meta property="og:site_name" content="bettermailto" />
        <meta
          property="og:image"
          content="https://bettermailto.com/static/bettermailto-card.png"
        />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="752" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="bettermailto" />
        <meta
          name="twitter:description"
          content="The no-code replacement for mailto."
        />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
