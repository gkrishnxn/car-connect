import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  
  <Footer />
  </>
}
