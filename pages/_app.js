import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.css"
import "../styles/styles.css"
import TopNav from "../components/TopNav"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position="top-right" />
      <TopNav />
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp
