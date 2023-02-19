import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Wrapper } from "../src/components/pages/MainContent/MainContent";
import Head from "next/head";
import favico from "../public/images/favicon.ico";
import { WrapperHr } from "../src/components/hr/MainContent/MainContent";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isWrapper =
    router.asPath !== "/" &&
    router.asPath !== "/select-hero" &&
    router.asPath.indexOf("/hr") === -1;
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
        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')`,
          }}
        ></style>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      {isWrapper ? (
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      ) : router.asPath.indexOf("/hr") === -1 ? (
        <Component {...pageProps} />
      ) : (
        <WrapperHr>
          <Component {...pageProps} />
        </WrapperHr>
      )}
    </div>
  );
}

export default MyApp;
