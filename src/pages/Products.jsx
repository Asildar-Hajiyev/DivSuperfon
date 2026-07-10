import { useEffect } from "react";
import ProductCart from "./ProductCart";
import ProductsCategory from "./ProductsCategory";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 mt-4 ">
      <aside className="col-span-3 border-r border-gray-300 pr-6">
  <div className="sticky top-28 self-start h-fit">
    <ProductsCategory />
  </div>
</aside>

<main className="col-span-9 pl-6">
  <ProductCart />
</main>
    </div>
  );
}

export default Products;
