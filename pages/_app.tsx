import Container from "@/components/Container";
import Header from "@/components/Header";
import Head from "next/head";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/global.css";
import { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
