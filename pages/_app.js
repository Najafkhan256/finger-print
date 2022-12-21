import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { useEffect } from "react";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
