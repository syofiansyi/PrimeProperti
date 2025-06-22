import {
    JSXElementConstructor,
    Key,
    ReactElement,
    ReactNode,
    ReactPortal,
    useRef,
} from "react";
import {
    FaMapMarkerAlt,
    FaBed,
    FaBath,
    FaHome,
    FaExpand,
} from "react-icons/fa";
import { Link, router } from "@inertiajs/react";
import { route } from "ziggy-js"; // ✅ Benar

interface SimilarProducts {
    id: number;
  title: string;
  location: string;
  price: number;
  image: any
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

interface Props {
    allprod: SimilarProducts[];
}
export default function ProductHighlight({ allprod }: Props) {
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

  const icons = [<FaBed />, <FaBath />, <FaExpand />, <FaHome />];

    const allProperties = allprod.map((item) => {
        const imageArray =
            typeof item.image === "string"
                ? JSON.parse(item.image)
                : item.image;

        return {
            id: item.id,
            title: item.title,
            location: item.location,
            price: item.price,
            image: imageArray?.[0] ? `${imageArray[0]}` : null,
            features:
                typeof item.features === "string"
                    ? JSON.parse(item.features)
                    : item.features,
            badge:
                typeof item.badge === "string"
                    ? JSON.parse(item.badge)
                    : item.badge,
            popular: !!item.popular,
            date: item.date,
            tipe: item.tipe,
        };
    });

    return (
        <section id="artikel" className="py-10 px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Properti Similar
            </h2>

            <div className="relative">
                {/* Tombol Prev */}
                <button
                    onClick={() => handleScroll("prev")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
                >
                    ◀
                </button>

                {/* Carousel Container */}
                <div
                    ref={carouselRef}
                    className="flex gap-6 justify-center flex-wrap transition-all duration-300"
                >
                    {allProperties.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-full lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden relative"
                        >
                            {/* Badge */}
                            {item.badge.length > 0 && (
                                <div className="absolute z-10 p-3 flex gap-2">
                                    {item.badge.map(
                                        (
                                            b:
                                                | string
                                                | number
                                                | boolean
                                                | ReactElement<
                                                      any,
                                                      | string
                                                      | JSXElementConstructor<any>
                                                  >
                                                | Iterable<ReactNode>
                                                | ReactPortal
                                                | null
                                                | undefined,
                                            i: Key | null | undefined
                                        ) => (
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
                                <div
                                    className="h-52 bg-cover bg-center w-full"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
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
<hr className="h-1"></hr>

                                <div className="flex flex-wrap  justify-between gap-4 text-gray-600 text-sm mt-2">
                                    {item.features.map(
                                        (
                                            f:
                                                | string
                                                | number
                                                | boolean
                                                | ReactElement<
                                                      any,
                                                      | string
                                                      | JSXElementConstructor<any>
                                                  >
                                                | Iterable<ReactNode>
                                                | ReactPortal
                                                | null
                                                | undefined,
                                            i: number
                                        ) => (
                                            <div
                                                key={i}
                                                className="flex flex-wrap justify-between gap-4 text-gray-600 text-sm mt-2">
                                            
                                                <span className="">
                                                    {icons[i % icons.length]}
                                                </span>
                                                <span>{f}</span>
                                            </div>
                                        )
                                    )}
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
