import { useContext } from "react";
import { DATA } from "../Context/Context";
import { useParams } from "react-router-dom";
import Detailsimg from "./Details-comp/Detailsimg";

function Details() {
  const { id } = useParams();
  const { user } = useContext(DATA);
  const product = user.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Mehsul tapilmadi</h2>;
  }
  return (
    <div className="flex items-start mt-12 p-4 gap-4">
      <div className="">
        <Detailsimg product={product} />
      </div>
      <div className="flex items-start flex-col gap-2">
        <h2>{product.title}</h2>
        <div className="flex">
          <span>Məhsulun kodu: {product.productCode}</span>
          <span>{product.inStock ? "Anbarda var" : "Anbarda yoxdur"}</span>
        </div>
        <p>{product.price} ₼</p>
      </div>
    </div>
  );
}

export default Details;
