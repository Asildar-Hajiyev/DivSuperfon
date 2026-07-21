import { ToastContainer } from "react-toastify"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRouter from "./provider/AppRouter"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header/>
      <AppRouter/>
     <ToastContainer
        position="bottom-right"
        autoClose={3500}
        newestOnTop
        toastClassName="toasty-toast"
        bodyClassName="toasty-body"
      />
      <Footer/>
    </>
  )
}

export default App
