import { signOut } from "firebase/auth"
import { auth } from "../firebase/Firebase"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


function Profil() {
  const navigate = useNavigate()
  async function logout(){
    toast.success('profilde cixis edilir')
    setTimeout(()=>{
       signOut(auth)
    navigate('/login')
    },3000)
  }
  return (
    <div className="flex items-center justify-center gap-3 m-19">
      <h2>profil</h2>
      <button onClick={logout} className="rounded-sm px-2 py-1 bg-orange-400 text-white ">cixis edin</button>
    </div>
  )
}

export default Profil
