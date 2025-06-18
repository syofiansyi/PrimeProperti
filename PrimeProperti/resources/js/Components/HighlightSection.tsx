import { useRef } from "react";
import { Link } from "@inertiajs/react";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaExpand,
} from "react-icons/fa";

export default function ProductHighlight() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const icons = [<FaBed />, <FaBath />, <FaRulerCombined />, <FaExpand />];

  const allProperties = [
    {
      title: "Modern Minimalis",
      location: "Jakarta Selatan",
      price: 1200000000,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["3 ", "2", "120m²", "90m²"],
      badge: ["Baru", "Premium"],
      popular: true,
      date: "2025-06-10",
    },
    // ...tambahkan properti lainnya
  ];

  return (
    <section id="artikel" className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Properti Similar</h2>

      <div className="relative">
        {/* Tombol kiri */}
        <button
          onClick={() => handleScroll("prev")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
        >
          ◀
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-4 scroll-smooth transition-all duration-300"
          >
            {allProperties.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                {/* Badge */}
                {item.badge.length > 0 && (
                  <div className="absolute z-10 p-3 flex gap-2">
                    {item.badge.map((b, i) => (
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
                <Link href="/detail#produk">
                  <div
                    className="h-52 bg-cover bg-center w-full"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </Link>

                {/* Konten */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      {item.location}
                    </span>
                    <span className="font-semibold text-blue-600 text-sm">
                      Rp {item.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                    {item.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <span>{icons[i % icons.length]}</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol kanan */}
        <button
          onClick={() => handleScroll("next")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
