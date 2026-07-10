import { useContext } from "react"
import { DATA } from "../Context/Context"
import Card from "../components/Card"

function ProductCart() {
    const {user} =useContext(DATA)
  return (
    <div className="grid grid-cols-3 gap-6">
      {user.map((item,i)=>(
        <Card item={item} i={i}/>
      ))}
    </div>
  )
}

export default ProductCart
