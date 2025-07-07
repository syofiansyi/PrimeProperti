import { useRef, useState, useEffect } from "react";
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
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = 300;
        if (direction === "right") {
            const isEnd =
                container.scrollLeft + container.clientWidth >=
                container.scrollWidth - 10;

            if (isEnd) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        } else {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    const handleImageLoad = (id: number) => {
        setImageLoaded((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <section className="py-12 px-4 bg-gray-50" id="artikel">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                Property Articles & Tips{" "}
            </h2>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Single Skeleton Box during loading */}
                {isLoading && (
                    <div className="w-[250px] sm:w-[280px] lg:w-[300px] mx-auto bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                        <div className="h-40 w-full bg-gray-200"></div>
                        <div className="p-4 space-y-3">
                            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-full"></div>
                                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                            </div>
                            <div className="h-8 bg-gray-200 rounded w-1/2 mt-2"></div>
                        </div>
                    </div>
                )}

                {/* Actual content when loaded */}
                {!isLoading && (
                    <>
                        {/* Tombol Prev */}
                        {articles.length > 0 && (
                            <button
                                onClick={() => scroll("left")}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                            >
                                ◀
                            </button>
                        )}

                        {/* Carousel Scroll */}
                        <div
                            ref={scrollRef}
                            className="overflow-x-auto flex gap-4 px-4 scroll-smooth scrollbar-hide"
                        >
                            {articles.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="w-[250px] sm:w-[280px] lg:w-[300px] flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden"
                                >
                                    {!imageLoaded[item.id] ? (
                                        <div className="h-40 w-full bg-gray-200 animate-pulse"></div>
                                    ) : (
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-40 w-full object-cover"
                                            onLoad={() =>
                                                handleImageLoad(item.id)
                                            }
                                        />
                                    )}
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            {item.desc}
                                        </p>
                                        <Link
                                            href={route(
                                                "blogsPages.show",
                                                item.id
                                            )}
                                            className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                                        >
                                           Read more
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tombol Next */}
                        {articles.length > 0 && (
                            <button
                                onClick={() => scroll("right")}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                            >
                                ▶
                            </button>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
