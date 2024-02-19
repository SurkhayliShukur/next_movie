import "@/styles/globals.css";
import GlobalContext from "../context/GlobalContext"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalContext>
        <Component {...pageProps} />;
        <ToastContainer />
      </GlobalContext>

    </>

  )
}