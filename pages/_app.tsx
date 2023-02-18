import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Wrapper } from "../src/components/pages/MainContent/MainContent";
import Head from "next/head";
import favico from "../public/images/favicon.ico";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isWrapper = router.asPath !== "/" && router.asPath !== "/select-hero";
  return (
    <div
      style={{
        background: "white",
        height: "100vh",
        width: "100vw",
        color: "black",
      }}
    >
      <Head>
        <title>Росмолодежь</title>
        <link
          rel="shortcut icon"
          href={"/public/images/favicon.ico"}
          type="image/x-icon"
        />
      </Head>
      {isWrapper ? (
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default MyApp;
