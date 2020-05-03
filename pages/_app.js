import Layout from "../components/Layout/Layout";
import { GlobalStyle } from "../components/Layout/GlobalStyleSheet";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}
