import { useEffect } from "react";
import ProductCart from "./ProductCart";
import ProductsCategory from "./ProductsCategory";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4 px-4 lg:px-0">
      <aside className="lg:col-span-3 lg:border-r lg:border-gray-300 lg:pr-6">
        <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-7rem)] lg:overflow-y-auto hide-scrollba">
          <ProductsCategory />
        </div>
      </aside>

      <main className="lg:col-span-9 lg:pl-6">
        <ProductCart />
      </main>
    </div>
  );
}

export default Products;