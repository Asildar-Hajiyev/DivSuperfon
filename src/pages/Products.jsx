import { useEffect } from "react";
import ProductCart from "./ProductCart";
import ProductsCategory from "./ProductsCategory";

function Products() {
  useEffect(()=>{
     window.scrollTo(0, 0);
  },[])
  return (
    <div className="flex items-center">
      <ProductsCategory />
      <ProductCart/>
    </div>
  );
}

export default Products;
