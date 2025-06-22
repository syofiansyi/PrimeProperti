import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  thumbnail?: string;
}

interface Props {
  Blog: Blog[];
}

export default function ArticlesSection({ Blog }: Props) {
  const articles = Blog.map((item) => {
    const cleanedFilename = (item.thumbnail || "").replace(/"/g, "");
    return {
      id: item.id,
      title: item.title,
      desc: item.description,
      img: `/storage/thumbnails/${cleanedFilename}`,
      content: item.content,
    };
  });

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
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(articles.length - itemsPerPage, prev + 1)
    );
  };

  const translateX = `-${startIndex * (30 / itemsPerPage)}%`;

  return (
    <section className="py-12 px-4 bg-gray-50" id="artikel">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Artikel & Tips Properti
      </h2>

      <div className="relative overflow-hidden">
        {/* Tombol Prev */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full shadow hover:bg-opacity-70 disabled:opacity-30"
        >
          ◀
        </button>

        {/* Carousel Wrapper */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(articles.length * 30) / itemsPerPage}%`,
              transform: `translateX(${translateX})`,
            }}
          >
            {articles.map((item, idx) => (
              <div
                key={idx}
                className="w-1/4 sm:w-1/4 lg:w-1/4 px-2 flex-shrink-0"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {item.desc}
                    </p>
                    <Link
                      href={route("blogsPages.show", item.id)}
                      className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Next */}
        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= articles.length}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full shadow hover:bg-opacity-70 disabled:opacity-30"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
