import { FaRegTrashCan } from "react-icons/fa6";
import { CiCircleInfo, CiShoppingCart } from "react-icons/ci";

function Basket() {
  const sebet = [1];
  return (
    <>
      {sebet.length === 0 ? (
        <div className="flex items-center justify-between flex-col py-48">
          <CiShoppingCart className="text-[120px]" />
          <span className="text-2xl text-gray-600">Sizin səbətiniz boşdur</span>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 p-4 mt-32 max-w-7xl mx-auto">
          {/* SOL */}
          <div className="flex-1 space-y-4">
            {sebet.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 bg-white shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 flex-1">
                  <img
                    className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-lg object-cover shrink-0"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex flex-col gap-3 text-center sm:text-left">
                    <h2 className="font-semibold text-lg">{item.title}</h2>

                    <span className="text-xl font-bold">{item.price} ₼</span>

                    <div className="flex items-center justify-center sm:justify-start gap-3 border-t pt-3">
                      <p className="text-gray-600">Say</p>

                      <div className="border rounded-lg px-3 py-1 flex items-center gap-4">
                        <button className="text-lg">-</button>

                        <span className="font-semibold">{item.count}</span>

                        <button className="text-lg">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="self-center sm:self-auto p-3 rounded-lg bg-[#001623] text-white hover:bg-[#49637b] transition cursor-pointer">
                  <FaRegTrashCan className="text-xl" />
                </button>
              </div>
            ))}
          </div>

          {/* SAĞ */}

          <div className="w-full lg:w-[380px]">
            <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white lg:sticky lg:top-30">
              <h2 className="font-semibold text-lg mb-4">Sifarişin yekunu</h2>
              <div className="bg-green-500 text-white p-3 rounded-lg text-sm mb-4">
                Kombo kampaniyasına qoşuldunuz!
              </div>
              <div className="flex justify-between py-3">
                <p>Cəmi məbləğ</p>
                <span>350.79 ₼</span>
              </div>

              <div className="flex justify-between py-3">
                <p>Endirim</p>
                <span className="font-semibold">-31.31 ₼</span>
              </div>
              <div className="flex justify-between items-center py-3 text-lg">
                <p>Çatdırılma</p>

                <div className="flex items-center gap-2 text-sm">
                  Ərazidən asılıdır
                  <CiCircleInfo className="text-2xl text-red-500 cursor-pointer" />
                </div>
              </div>

              <div className="border-t mt-3 pt-4 flex justify-between font-semibold text-lg">
                <p>Yekun</p>
                <span>319.48 ₼</span>
              </div>

              <button className="w-full mt-5 py-3 rounded-lg bg-[#001623] text-white hover:bg-[#49637b] transition">
                Sifarişi tamamla
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Basket;
