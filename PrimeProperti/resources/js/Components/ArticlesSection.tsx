import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function ArticlesSection() {
  const articles = [
    {
      title: "Tips Investasi Properti",
      desc: "Pelajari cara memilih properti yang tepat untuk investasi.",
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Desain Rumah Minimalis",
      desc: "Inspirasi desain rumah modern dan hemat ruang.",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Legalitas Properti",
      desc: "Kenali pentingnya legalitas sebelum membeli properti.",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Strategi Renovasi",
      desc: "Tingkatkan nilai properti dengan renovasi yang tepat.",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Peluang Sewa Jangka Pendek",
      desc: "Manfaatkan tren wisata dengan properti sewa jangka pendek.",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
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
      Math.min(articles.length - itemsPerPage, prev + itemsPerPage)
    );
  };

  const visibleArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Artikel & Tips Properti
      </h2>

      <div className="flex items-center justify-center gap-4 flex-wrap lg:flex-nowrap">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2 bg-white rounded-full shadow hover:bg-blue-100 disabled:opacity-30"
        >
          ◀
        </button>

        <div className="flex gap-6 justify-center flex-wrap transition-all duration-300">
          {visibleArticles.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[300px] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <Link
                  href="/blog"
                  className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= articles.length}
          className="p-2 bg-white rounded-full shadow hover:bg-blue-100 disabled:opacity-30"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
