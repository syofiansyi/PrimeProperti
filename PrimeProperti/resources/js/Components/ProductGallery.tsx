import { useState } from "react";
interface DetailProd {
   id: number;
    title: string;
    location: string;
    price: number;
    image?: string[] | string;
    features: string;
    badge: string;
    maps: string;
    properti_detail: string;
    properti_pembayaran: string;
    properti_fasilitas: string;
    popular:boolean;
    date:string;
    deskripsi:string;
    tipe:string;
}

interface ProductGalleryProps {
  mainImage: string;
  changeImage: (src: string) => void;
   DetailProd:DetailProd[];
}

export default function ProductGallery({
  mainImage,
  changeImage,
  DetailProd,
}: ProductGalleryProps) {
 const thumbnails = (DetailProd[0].image as unknown as string[]).map((img, index) => ({
  src: `${img}`,
  alt: `Gambar ${index + 1}`, // atau alt dari properti lain jika ada
}));

   
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
      {thumbnails.slice(0, 6).map((thumb, idx) => {
  const isLastVisible = idx === 5 && thumbnails.length > 6;
  const remaining = thumbnails.length - 6;

  return (
    <div
      key={idx}
      className="relative w-20 h-20 rounded overflow-hidden cursor-pointer border hover:ring-2 ring-[#8B5E4D] transition"
      onClick={() => setActiveIndex(idx)}
    >
      <img
        src={thumb.src}
        alt={thumb.alt}
        className={`w-full h-full object-cover ${isLastVisible ? 'opacity-50' : ''}`}
      />
      {isLastVisible && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
          +{remaining}
        </div>
      )}
    </div>
  );
})}

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
