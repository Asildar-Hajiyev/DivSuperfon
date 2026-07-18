
import Card from "../components/Card"

function ProductCart({allProduct}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-4">
      {allProduct?.map((item,i)=>(
        <Card item={item} key={i}/>
      ))}
    </div>
  )
}

export default ProductCart
