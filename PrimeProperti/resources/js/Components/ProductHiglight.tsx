import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { FaMapMarkerAlt, FaBed, FaBath, FaExpand, FaHome } from "react-icons/fa";
import { route } from "ziggy-js";

interface SimilarProducts {
  id: number;
  title: string;
  location: string;
  price: number;
  image: any;
  features: string;
  badge: string;
  popular: boolean;
  date: string;
  tipe: string;
}

interface Props {
  allprod: SimilarProducts[];
}

export default function ProductHighlight({ allprod }: Props) {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const icons = [<FaBed />, <FaBath />, <FaExpand />, <FaHome />];

  const allProperties = allprod.map((item) => {
    const imageArray =
      typeof item.image === "string" ? JSON.parse(item.image) : item.image;
    return {
      ...item,
      image: imageArray?.[0] ?? null,
      features: typeof item.features === "string" ? JSON.parse(item.features) : item.features,
      badge: typeof item.badge === "string" ? JSON.parse(item.badge) : item.badge,
    };
  });

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      setItemsPerPage(width < 640 ? 1 : width < 1024 ? 2 : 3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(allProperties.length - itemsPerPage, prev + itemsPerPage)
    );
  };

  const visibleWidth = 100 * allProperties.length / itemsPerPage;

  return (
    <section id="artikel" className="py-10 px-4 overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-center">Properti Similar</h2>

      <div className="relative">
        {/* Tombol Prev */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
        >
          ◀
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${visibleWidth}%`,
              transform: `translateX(-${(startIndex / allProperties.length) * 100}%)`,
            }}
          >
            {allProperties.map((item, idx) => (
              <div
                key={idx}
                className="w-1/4 sm:w-1/4 lg:w-1/4 px-2 flex-shrink-0"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-full">
                  {/* Badge */}
                  {item.badge.length > 0 && (
                    <div className="absolute z-10 p-3 flex gap-2">
                      {item.badge.map((b: string, i: number) => (
                        <span
                          key={i}
                          className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Gambar */}
                  <Link href={route("products.show", item.id)} className="block">
                    <div
                      className="h-52 bg-cover bg-center w-full"
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    ></div>
                  </Link>

                  {/* Konten */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {item.location}
                      </span>
                      <span className="font-semibold text-blue-600 text-sm">
                        Rp {item.price.toLocaleString()}
                      </span>
                    </div>
                    <hr className="h-1" />

                    <div className="flex flex-wrap justify-between gap-4 text-gray-600 text-sm mt-2">
                      {item.features.map((f: string, i: number) => (
                        <div key={i} className="flex items-center gap-1">
                          <span>{icons[i % icons.length]}</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Next */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
