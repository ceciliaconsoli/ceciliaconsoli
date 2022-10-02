import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import { ni18nConfig } from "../ni18n.config";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNav = router.pathname === "/projects/[...slug]" ? false : true;

  const locale: any =
    typeof window !== "undefined" && window.localStorage.getItem("MY_LANGUAGE");
  useSyncLanguage(locale);

  return (
    <>
      <Head>
        <title>Cecilia Consoli | Portfolio</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);
