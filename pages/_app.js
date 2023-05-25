import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";
import { AppProvider } from "../context/context";
import "../public/css/line-awesome.min.css";
import "../public/css/modal-video.scss";
import "../styles/main.sass";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(
      <AppProvider>
        <Head>
          <title>Ferrari Coin </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    );
  }
  return (
    <AppProvider>
      <Head>
        <title>Ferrari Coin</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
