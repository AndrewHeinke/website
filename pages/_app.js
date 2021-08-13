import "../styles/app.scss";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import FontFace from "components/FontFace";
import theme from "theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Andrew Heinke | Front End Software Engineer</title>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="description" content="Personal Website of Andrew Heinke" />
        <meta name="og:title" content="Personal Website of Andrew Heinke" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <div className="app-wrapper">
          <div className="body">
            <Header />
            <main>
              <Component {...pageProps} />
            </main>
          </div>
          <Footer />
        </div>
      </ChakraProvider>
      <FontFace />
    </>
  );
}

export default MyApp;
