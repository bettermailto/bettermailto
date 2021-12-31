import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.sessions}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
