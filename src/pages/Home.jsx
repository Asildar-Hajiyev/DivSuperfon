import { useContext } from "react"
import { DATA } from "../Context/Context"


function Home() {
  const {user} = useContext(DATA)
  return (
    <>
        {user.map((item,i)=>(
          <div key={i}>{item.title}</div>
        ))}
    </>
  )
}

export default Home
