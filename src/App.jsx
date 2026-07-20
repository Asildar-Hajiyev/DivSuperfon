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
      <ToastContainer position="top-right" autoClose={2000}/> 
      <Footer/>
    </>
  )
}

export default App
