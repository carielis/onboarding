import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Wrapper } from "../src/components/pages/MainContent/MainContent";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isWrapper = router.asPath !== "/";
  return (
    <div
      style={{
        background: "white",
        height: "100vh",
        width: "100vw",
        color: "black",
      }}
    >
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
