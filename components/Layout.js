import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <Head>
        <title>Andrew Heinke | Front End Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal Website of Andrew Heinke" />
        <meta name="og:title" content="Personal Website of Andrew Heinke" />
      </Head>
      <div className="body">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
