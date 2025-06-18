import { useRef } from "react";

export default function RatingsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = container.firstChild
      ? (container.firstChild as HTMLDivElement).offsetWidth + 16
      : 316;
    const scrollAmount = cardWidth * 2;

    container.scrollBy({
      left: dir === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const testimonials = [
    {
      stars: "★★★★★",
      text: `"Pelayanan sangat profesional. Saya mendapatkan rumah impian di lokasi yang tepat sesuai budget."`,
      author: "- Bapak Andi Wijaya",
    },
    {
      stars: "★★★★★",
      text: `"Proses transaksi cepat dan aman. Agennya sangat membantu menjelaskan semua detail properti."`,
      author: "- Ibu Sari Dewi",
    },
    {
      stars: "★★★★☆",
      text: `"Pilihan properti sangat banyak. Saya akhirnya menemukan apartemen yang sesuai kebutuhan keluarga."`,
      author: "- Keluarga Budiman",
    },
    {
      stars: "★★★★★",
      text: `"Layanan luar biasa dan sangat komunikatif dari awal sampai akhir."`,
      author: "- Pak Herman",
    },
    {
      stars: "★★★★★",
      text: `"Sangat puas dengan proses transaksi yang mudah dan aman."`,
      author: "- Bu Lestari",
    },
    {
      stars: "★★★★☆",
      text: `"Saya direkomendasikan properti yang sangat cocok untuk investasi."`,
      author: "- Mas Dedi",
    },
  ];

  return (
    <section id="testimoni" className="py-16 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-gray-800">
        Apa Kata Client Kami
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth gap-4 scrollbar-hide snap-x"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] snap-start flex-shrink-0 bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-yellow-500 text-xl mb-2">{item.stars}</div>
              <p className="text-gray-700 text-sm sm:text-base mb-4">{item.text}</p>
              <div className="text-sm font-semibold text-gray-600">
                {item.author}
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi */}
        <button
          onClick={() => handleScroll("prev")}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white border p-2 rounded-full shadow hover:bg-gray-100 z-10"
        >
          ◀
        </button>
        <button
          onClick={() => handleScroll("next")}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white border p-2 rounded-full shadow hover:bg-gray-100 z-10"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
