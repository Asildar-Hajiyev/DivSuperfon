import { useContext } from "react"
import { DATA } from "../Context/Context"
import Card from "../components/Card"

function ProductCart() {
    const {user} =useContext(DATA)
  return (
    <div className=" flex items-center flex-wrap">
      {user.map((item,i)=>(
        <Card item={item} i={i}/>
      ))}
    </div>
  )
}

export default ProductCart
