import { useContext, useState } from "react";
import { FaChevronDown, FaSearch, FaAngleUp } from "react-icons/fa";
import { DATA } from "../Context/Context";

function ProductsCategory() {
  const { user } = useContext(DATA);

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const filtereData = user.filter(
    (item, index, arr) =>
      index === arr.findIndex((el) => el.category === item.category),
  );

  return (
    <div className="w-full bg-white rounded-lg ">
      <div className="border-b border-gray-300">
        <div
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex justify-between items-center p-4 cursor-pointer"
        >
          <h2 className="font-semibold text-blue-950">Kateqoriyalar</h2>
          {categoryOpen ? <FaAngleUp /> : <FaChevronDown />}
        </div>

        {categoryOpen && (
          <div className="p-4">
            {filtereData.map((item) => (
              <div key={item.id}>
                <label className="flex gap-2">
                  <input type="checkbox" />
                  {item.category}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-b border-gray-300">
        <div
          onClick={() => setBrandOpen(!brandOpen)}
          className="flex justify-between items-center p-4 cursor-pointer"
        >
          <h2 className="font-semibold text-blue-950">Brendlər</h2>

          {brandOpen ? <FaAngleUp /> : <FaChevronDown />}
        </div>

        {brandOpen && (
          <div className="p-4 space-y-2">
            {filtereData.map((item) => (
              <div key={item.id}>
                <label className="flex gap-2">
                  <input type="checkbox" />
                  {item.brand}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-b border-gray-300">
        <div
          onClick={() => setPriceOpen(!priceOpen)}
          className="flex justify-between items-center p-4 cursor-pointer"
        >
          <h2 className="font-semibold text-blue-950">Qiymət</h2>

          {priceOpen ? <FaAngleUp /> : <FaChevronDown />}
        </div>

        {priceOpen && (
          <div className="p-4 flex gap-3">
            <input
              type="number"
              placeholder="Min"
              className="border p-2 rounded w-full"
            />

            <input
              type="number"
              placeholder="Max"
              className="border p-2 rounded w-full"
            />

            <button className="bg-blue-950 text-white px-4 rounded">
              <FaSearch />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsCategory;
