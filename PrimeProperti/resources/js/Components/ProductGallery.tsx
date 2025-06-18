import { useState } from "react";

interface ProductGalleryProps {
  mainImage: string;
  changeImage: (src: string) => void;
}

export default function ProductGallery({
  mainImage,
  changeImage,
}: ProductGalleryProps) {
  const thumbnails = [
    {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Tampak Depan",
    },
    {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Ruang Tamu",
    },
    {
      src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Kamar Tidur",
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Dapur",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (activeIndex !== null) {
      setActiveIndex((prev) => (prev! - 1 + thumbnails.length) % thumbnails.length);
    }
  };

  const handleNext = () => {
    if (activeIndex !== null) {
      setActiveIndex((prev) => (prev! + 1) % thumbnails.length);
    }
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <img
        src={mainImage}
        alt="Rumah Modern Minimalis"
        className="w-full max-h-[500px] object-cover rounded-lg shadow"
      />

      {/* Thumbnails */}
      <div className="flex gap-4 flex-wrap justify-center">
        {thumbnails.map((thumb, idx) => (
          <img
            key={idx}
            src={thumb.src}
            alt={thumb.alt}
            className="w-20 h-20 object-cover rounded cursor-pointer border hover:ring-2 ring-[#8B5E4D] transition"
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 hover:text-[#8B5E4D] z-10"
            >
              ‹
            </button>

            {/* Image */}
            <img
              src={thumbnails[activeIndex].src}
              alt={thumbnails[activeIndex].alt}
              className="max-w-full max-h-full object-contain rounded shadow-lg"
            />

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 hover:text-[#8B5E4D] z-10"
            >
              ›
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
