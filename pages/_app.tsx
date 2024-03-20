import { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { Outfit } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import ENV from "@/constant/env";
const outfit = Outfit({ subsets: ["latin"] });
import { isMobile } from "../helpers/utils";
import { SessionProvider } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.css";


function App({ Component, pageProps: {session, ...pageProps}, isMobile }:AppProps & { isMobile: boolean}) {
  return (
    <SessionProvider session={session}>
      <main className={outfit.className}>
        <Component {...pageProps } isMobile={isMobile} />
        <ToastContainer />
      </main>
    </SessionProvider>
  );
}

App.getInitialProps = async ({ ctx, Component }) => {
  let isMobileDevice = false;

  if (ctx.req) {
    const userAgent = ctx.req.headers['user-agent'];
    isMobileDevice = isMobile(userAgent);
  }

  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps, isMobile: isMobileDevice };
};

export default App;