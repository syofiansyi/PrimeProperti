import {
    JSXElementConstructor,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from "react";
import {
    FaMapMarkerAlt,
    FaBed,
    FaBath,
    FaHome,
    FaExpand,
    FaStar,
} from "react-icons/fa";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

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
    maps?: any;
    properti_detail?: any;
    properti_pembayaran?: any;
    properti_fasilitas?: any;
    deskripsi?: string;
    satuan:string;
}

interface Props {
    allprod: SimilarProducts[];
}

export default function ProductHighlight({ allprod }: Props) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [imageLoadStates, setImageLoadStates] = useState<
        Record<number, boolean>
    >({});

    const handleScroll = (direction: "prev" | "next") => {
        const container = carouselRef.current;
        if (!container) return;

        const scrollAmount = container.offsetWidth;
        container.scrollBy({
            left: direction === "next" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    };

    const icons = [<FaBed />, <FaBath />, <FaExpand />, <FaHome />];

    const allProperties = allprod.map((item) => {
        let imageArray = [];
        let featureArray = [];
        let badgeArray = [];

        try {
            imageArray =
                typeof item.image === "string"
                    ? JSON.parse(item.image)
                    : item.image;
        } catch {}

        try {
            featureArray =
                typeof item.features === "string"
                    ? JSON.parse(item.features)
                    : item.features;
        } catch {}

        try {
            badgeArray =
                typeof item.badge === "string"
                    ? JSON.parse(item.badge)
                    : item.badge;
        } catch {}

        return {
            id: item.id,
            title: item.title,
            location: item.location,
            price: item.price,
            image: imageArray?.[0] ?? null,
            features: featureArray ?? [],
            badge: badgeArray ?? [],
            popular: !!item.popular,
            date: item.date,
            tipe: item.tipe,
            satuan: item.satuan,
        };
    });

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleImageLoad = (id: number) => {
        setImageLoadStates((prev) => ({ ...prev, [id]: true }));
    };

    const handleImageError = (id: number) => {
        setImageLoadStates((prev) => ({ ...prev, [id]: false }));
    };

    return (
        <section id="artikel" className="py-10 px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Similar Properties
            </h2>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Tombol Prev */}
                {!isLoading && allProperties.length > 3 && (
                    <button
                        onClick={() => handleScroll("prev")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
                    >
                        ◀
                    </button>
                )}

                {/* Carousel Container */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto gap-6 scroll-smooth transition-all duration-300 pb-4"
                    style={{
                        scrollbarWidth: "auto",
                        msOverflowStyle: "auto",
                    }}
                >
                    <style>{`
                        div::-webkit-scrollbar {
                            height: 8px;
                        }
                        div::-webkit-scrollbar-thumb {
                            background-color: rgba(0, 0, 0, 0.3);
                            border-radius: 8px;
                        }
                    `}</style>

                    {isLoading
                        ? // Show skeleton loading when data is loading
                          [...Array(3)].map((_, index) => (
                              <div
                                  key={`skeleton-${index}`}
                                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                              >
                                  <ProductCardSkeleton />
                              </div>
                          ))
                        : // Show actual content when data is loaded
                          allProperties.map((item) => {
                              const isImageLoaded =
                                  imageLoadStates[item.id] !== false;
                              const hasImage = item.image !== null;

                              return (
                                  <div
                                      key={item.id}
                                      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md overflow-hidden relative"
                                  >
                                      {/* Badge */}
                                      {item.badge.length > 0 && (
                                          <div className="absolute z-10 p-3 flex gap-2">
                                              {item.badge.map(
                                                  (b: string, i: number) => (
                                                      <span
                                                          key={i}
                                                          className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
                                                      >
                                                          {b}
                                                      </span>
                                                  )
                                              )}
                                          </div>
                                      )}

                                      {/* Gambar */}
                                      <Link
                                          href={route("products.show", item.id)}
                                          className="block"
                                      >
                                          {!isImageLoaded || !hasImage ? (
                                              <div className="h-52 bg-gray-200 animate-pulse w-full"></div>
                                          ) : (
                                              <div
                                                  className="h-52 bg-cover bg-center w-full"
                                                  style={{
                                                      backgroundImage: `url(${item.image})`,
                                                  }}
                                              >
                                                  <img
                                                      src={item.image}
                                                      alt={item.title}
                                                      className="hidden"
                                                      onLoad={() =>
                                                          handleImageLoad(
                                                              item.id
                                                          )
                                                      }
                                                      onError={() =>
                                                          handleImageError(
                                                              item.id
                                                          )
                                                      }
                                                  />
                                              </div>
                                          )}
                                          {item.popular && (
                                              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                  <FaStar />
                                              </span>
                                          )}
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
                                         <span className="font-semibold text-blue-600 text-sm whitespace-nowrap">
  Rp {item.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{item.satuan}
</span>


                                          </div>

                                          <hr className="h-1" />

                                         <div className="flex justify-between gap-2 mt-2">
  {item.features.map((f: string, i: number) => (
    <div
      key={i}
      className="flex items-center gap-2 text-sm text-gray-600"
    >
      <span>{icons[i % icons.length]}</span>
      <span>
        {f}
        {(i === 2 || i === 3) && 'm²'}
      </span>
    </div>
  ))}
</div>

                                      </div>
                                  </div>
                              );
                          })}
                </div>

                {/* Tombol Next */}
                {!isLoading && allProperties.length > 3 && (
                    <button
                        onClick={() => handleScroll("next")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
                    >
                        ▶
                    </button>
                )}
            </div>
        </section>
    );
}
