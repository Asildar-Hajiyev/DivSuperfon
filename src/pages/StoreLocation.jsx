import { useState } from "react";

function StoreLocation() {
  const dataLocation = [
    {
      id: 1,
      name: "28 May mağazası",
      city: "Bakı",
      address: "Nəsimi ray., Azadlıq pr. 18",
      phone: "+994 51 240 50 75",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.382231833205!2d49.84585647521392!3d40.37741265803272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d2f8c5608d1%3A0xf81a4107d2f23293!2sSUPERFON!5e1!3m2!1saz!2saz!4v1782239875346!5m2!1saz!2saz",
    },
    {
      id: 2,
      name: "Xalqlar mağazası",
      city: "Bakı",
      address: "Qara Qarayev pr. 126",
      phone: "+994 51 205 88 15",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.9330442708651!2d49.951599109620076!3d40.39620849890293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063002eed1f2b%3A0xd5304ccc6c78f173!2sSuperfon%20Giperaks%20Xalqlar!5e1!3m2!1saz!2saz!4v1782239992105!5m2!1saz!2saz",
    },
    {
      id: 3,
      name: "Mingeçevir mağazası",
      city: "Sumqayıt",
      address: "10-cu mikrorayon, Sülh küçəsi 5",
      phone: "+994 55 301 22 11",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.3727147451363!2d47.053707791813956!3d40.76922334470278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4038eb20eb96a119%3A0x358a3519e346d91e!2zU3VwZXJmb24gTWluZ8mZw6dldmly!5e1!3m2!1saz!2saz!4v1782240160911!5m2!1saz!2saz",
    },
    {
      id: 4,
      name: "Gəncə mağazası",
      city: "Gəncə",
      address: "Heydər Əliyev prospekti 120",
      phone: "+994 50 410 33 44",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.1727907175642!2d46.3602567258046!3d40.68219912341497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403f518aea57c5ef%3A0x6a396f13f529240d!2zU3VwZXJmb24gR8mZbmPJmQ!5e1!3m2!1saz!2saz!4v1782240116657!5m2!1saz!2saz",
    },
  ];
  const [openMap, setOpenMap] = useState(dataLocation[0]?.embedUrl);
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* MAP */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src={openMap}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* LOCATION CARDS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataLocation.map((item) => (
            <div
              key={item.id}
              
              className="group relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Üst vurğu xətti */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-300 rounded-t-2xl" />

              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                {item.name}
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <span>📍</span>
                  <span>{item.location}</span>
                </div>

                <div className="flex items-start gap-2 text-gray-700">
                  <span>🏢</span>
                  <span>{item.address}</span>
                </div>

                <div className="flex items-start gap-2 text-blue-600 font-medium">
                  <span>📞</span>
                  <span>{item.phone}</span>
                </div>
              </div>

              {/* Hover düyməsi effekti */}
              <div onClick={() => setOpenMap(item.embedUrl)} className="mt-4 opacity-0 group-hover:opacity-100 transition ">
                <button className="w-full py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer">
                  View on Map
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StoreLocation;
