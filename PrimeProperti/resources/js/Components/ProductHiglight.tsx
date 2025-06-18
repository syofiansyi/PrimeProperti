import { useRef } from "react";
import { Link } from "@inertiajs/react";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaExpand } from "react-icons/fa";

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
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["3 ", "2", "120m²", "90m²"],
            badge: ["Baru", "Premium"],
            popular: true,
            date: "2025-06-10",
        },
        {
            title: "Apartemen City View",
            location: "Bandung",
            price: 850000000,
            image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["2 ", "1", "80m²", "70m²"],
            badge: ["Baru", "Premium"],
            popular: false,
            date: "2025-06-01",
        },
        {
            title: "Ruko Strategis Pusat",
            location: "Surabaya",
            price: 1500000000,
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["2 Lantai", "1 KM", "100m²", "150m²"],
            badge: ["Baru"],
            popular: true,
            date: "2025-05-28",
        },
        {
            title: "Villa Pantai Eksklusif",
            location: "Bali",
            price: 4500000000,
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["4 ", "3 KM", "250m²", "500m²"],
            badge: ["Baru"],
            popular: true,
            date: "2025-06-05",
        },
        {
            title: "Tanah Kavling Murah",
            location: "Bogor",
            price: 400000000,
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["-", "-", "-", "120m²"],
            badge: ["Baru"],
            popular: false,
            date: "2025-05-20",
        },
        {
            title: "Rumah Subsidi Asri",
            location: "Bekasi",
            price: 300000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["2 ", "1 KM", "60m²", "45m²"],
            badge: ["Baru", "Premium"],
            popular: false,
            date: "2025-06-02",
        },
        {
            title: "Apartemen Minimalis",
            location: "Jakarta Pusat",
            price: 1000000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["1 ", "1 KM", "50m²", "45m²"],
            badge: [],
            popular: true,
            date: "2025-06-07",
        },
        {
            title: "Ruko Dua Lantai",
            location: "Bandung",
            price: 1300000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["2 Lantai", "2 KM", "100m²", "200m²"],
            badge: ["Baru", "Premium"],
            popular: false,
            date: "2025-05-30",
        },
        {
            title: "Rumah Cluster Elite",
            location: "Depok",
            price: 1750000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["4 ", "3 KM", "200m²", "180m²"],
            badge: ["Baru"],
            popular: true,
            date: "2025-06-09",
        },
        {
            title: "Rumah Cluster Elite",
            location: "Depok",
            price: 1750000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["4 ", "3 KM", "200m²", "180m²"],
            badge: ["Baru"],
            popular: true,
            date: "2025-06-09",
        },
    ];
  return (
    <section id="artikel" className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Properti Similar</h2>

      <div className="relative">
        {/* Tombol Prev */}
        <button
          onClick={() => handleScroll("prev")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
        >
          ◀
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-hidden gap-4 scroll-smooth"
        >
          {allProperties.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-1/4 bg-white rounded-lg shadow-md overflow-hidden relative"
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

        {/* Tombol Next */}
        <button
          onClick={() => handleScroll("next")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
