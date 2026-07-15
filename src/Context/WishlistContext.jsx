import { useState } from "react"
import { WISHLIST } from "./Context"

function WishlistContext({children}) {
    const [wistList,setWishlist] = useState([])
   function addWishlist(id,image,title,price){
    setWishlist((item) =>
      item.find((item) => item.id === id)
        ? item.map((index) =>
            index.id === id
              ? { ...index, quantity: index.quantity + 1 }
              : index,
          )
        : [...item, { id, image, title, price, quantity: 1 }],
    )
    console.log(wistList)
   }
   function removeWislist(){
    setWishlist([])
   }
   function removeWislistCart(id){
    setWishlist((item) => item.filter((index) => index.id !== id))
   }
    function checkedWislist(item){
        return  wistList.filter((e) => e.id === item.id).length > 0;
    }
   function wishListOnClickMove(item ){
    const isInWishlist = checkedWislist(item)
    isInWishlist ? removeWislistCart(item.id) : addWishlist(item.id,item.image,item.title,item.price)
   }
  return (
    <WISHLIST.Provider  value={{ addWishlist, removeWislist, removeWislistCart, wistList ,checkedWislist , wishListOnClickMove}}>
      {children}
    </WISHLIST.Provider>
  )
}

export default WishlistContext
