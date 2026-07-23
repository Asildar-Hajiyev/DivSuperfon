import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function Profil() {
  const navigate = useNavigate()
  const [user,setUser]= useState('')
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login")
    }
    console.log("klasndlakndlaknsdlasn")
    window.scrollTo(0, 0);
  }, []);

  async function logout() {
    toast.success("profilde cixis edilir");
    setTimeout(() => {
      signOut(auth);
      navigate("/login");
    }, 3000);
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser({
        email: user.email,
        name: user.displayName,
        phone: user.phoneNumber,
        photo: user.photoURL,
        uid: user.uid,
      });
    }
  });

  return () => unsubscribe();
  },[])
  return (
   <div>
      <div>
        <h2>Profil</h2>
        <p>{user?.name}</p>
      </div>


  <div className="px-6 pb-6">
    <button
      onClick={logout}
       >
      Çıxış edin
    </button>
  </div>

</div>
  );
}

export default Profil;
