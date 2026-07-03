import { CiHeart } from "react-icons/ci";

const wishlist = []
function Favorite() {
  return (
    <>
     {
        wishlist.length === 0 ? (
                <div className="flex items-center justify-between flex-col py-48">
                  <CiHeart className="text-[120px]" />
                  <span className="text-2xl text-gray-600">Sizin səbətiniz boşdur</span>
                </div>
              ) :("salam")
     } 
    </>
  )
}

export default Favorite
