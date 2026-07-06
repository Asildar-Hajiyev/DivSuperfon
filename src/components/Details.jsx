import { useContext } from "react"
import { DATA } from "../Context/Context"
import { useParams } from "react-router-dom"

function Details() {
    const {id} = useParams()
    const {user} = useContext(DATA)
    const product = user.find((item)=>item.id===Number(id))
    if(!product){
        return <h2>Mehsul tapilmadi</h2>
    }
  return (
    <>
 <div className="max-w-5xl mx-auto p-5">
      <img
        src={product.image}
        alt={product.title}
        className="w-80"
      />

      <h1 className="text-3xl font-bold mt-4">
        {product.title}
      </h1>

      <p className="text-xl mt-2">
        ${product.price}
      </p>
    </div>
    </>
  )
}

export default Details
