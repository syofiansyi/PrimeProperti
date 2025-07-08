import { useState } from "react";

interface DetailProd {
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
  maps?: any;
  properti_detail?: any;
  properti_pembayaran?: any;
  properti_fasilitas?: any;
  deskripsi?: string;
}

interface ProductGalleryProps {
  mainImage: string | null;
  changeImage: (src: string) => void;
  DetailProd: DetailProd[];
}

export default function ProductGallery({
  mainImage,
  changeImage,
  DetailProd,
}: ProductGalleryProps) {
  const thumbnails = (DetailProd[0].image as unknown as string[]).map((img, index) => ({
    src: `/storage/${img}`,
    alt: `Gambar ${index + 1}`,
  }));

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAllThumbnailsModal, setShowAllThumbnailsModal] = useState(false);
  const MAX_VISIBLE_THUMBNAILS = 5;

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

  const openThumbnailModal = () => {
    setShowAllThumbnailsModal(true);
  };

  const closeThumbnailModal = () => {
    setShowAllThumbnailsModal(false);
  };

  return (
    <div className="space-y-4">
      {/* Main Image - Lebih besar */}
      <img
        src={`/storage/${mainImage}`}
        alt="Rumah Modern Minimalis"
        className="w-full h-[300px] object-cover rounded-lg shadow-lg"
      />

      {/* Thumbnails */}
      <div className="flex gap-4 flex-wrap justify-center">
        {thumbnails.slice(0, MAX_VISIBLE_THUMBNAILS).map((thumb, idx) => {
          const isLastVisibleThumbnail = idx === MAX_VISIBLE_THUMBNAILS - 1 && thumbnails.length > MAX_VISIBLE_THUMBNAILS;
          
          return (
            <div key={idx} className="relative">
              <img
                src={thumb.src}
                alt={thumb.alt}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 hover:ring-4 ring-[#8B5E4D] transition-all duration-300 ${
                  isLastVisibleThumbnail ? "opacity-80" : ""
                }`}
                onClick={() => isLastVisibleThumbnail ? openThumbnailModal() : setActiveIndex(idx)}
              />
              {isLastVisibleThumbnail && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    +{thumbnails.length - MAX_VISIBLE_THUMBNAILS}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal untuk gambar besar - Ukuran diperbesar */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold px-4 py-2 hover:text-[#8B5E4D] z-10 bg-black bg-opacity-50 rounded-full"
            >
              ‹
            </button>

            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                src={thumbnails[activeIndex].src}
                alt={thumbnails[activeIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold px-4 py-2 hover:text-[#8B5E4D] z-10 bg-black bg-opacity-50 rounded-full"
            >
              ›
            </button>

            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-lg">
              {activeIndex + 1} / {thumbnails.length}
            </div>
          </div>
        </div>
      )}

      {/* Modal untuk semua thumbnail - Ukuran diperbesar */}
      {showAllThumbnailsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Semua Gambar ({thumbnails.length})</h3>
              <button
                onClick={closeThumbnailModal}
                className="text-gray-600 hover:text-gray-900 text-3xl bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {thumbnails.map((thumb, idx) => (
                <div 
                  key={idx} 
                  className="cursor-pointer group transition-all duration-300"
                  onClick={() => {
                    setActiveIndex(idx);
                    closeThumbnailModal();
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 group-hover:border-[#8B5E4D] transition-all">
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Lihat
                      </span>
                    </div>
                  </div>
                  <p className="text-center text-md mt-2 font-medium">Gambar {idx + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}