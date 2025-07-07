import { useRef } from "react";

interface Rating {
    id: number;
    nama: string;
    ulasan: string;
    total_rate: number;
}

interface Props {
    Rating: Rating[];
}
export default function RatingsSection({ Rating }: Props) {
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
    

  
    return (
        <section id="testimoni" className="py-16 bg-gray-50">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-gray-800">
               What Our Clients Say
            </h2>

            <div className="relative max-w-7xl mx-auto px-4 ">
                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto scroll-smooth gap-4 scrollbar-hide snap-x"
                >
                    {Rating.map((item) => (
                        <div
                            key={item.id}
                            className="min-w-[70%] sm:min-w-[35%] lg:min-w-[30%] snap-start flex-shrink-0 bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                           
                            <div className="text-yellow-500 text-lg">
                                {"★".repeat(item.total_rate) +
                                    "☆".repeat(5 - item.total_rate)}
                            </div>

                        <p className="text-gray-700 text-sm sm:text-base mb-4 break-words whitespace-pre-line max-h-[150px] overflow-y-auto">
  {item.ulasan}
</p>


                            <div className="text-sm font-semibold text-gray-600">
                                {item.nama}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigasi */}
                <button
                    onClick={() => handleScroll("prev")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70"
                >
                    ◀
                </button>
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
