import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

interface Content {
    id: number;
    kategori: string;
    content: string[]; // array of link
}
type Medsos = {
    icon: string;
    medsos: string;
    username: string;
    id: number;
    kategori: string;
};

interface Props {
    Content: Content[];
    Medsos: Medsos[];
}
export default function HighlightSection({ Content, Medsos }: Props) {
    const allCont = Content.filter(
        (item) => item.kategori === "HighlightSection"
    );
    const ImgHse = Medsos.filter((item) => item.kategori === "HiglightSection");

    return (
        <section
            className="relative bg-cover bg-center text-white py-20 px-4 sm:px-6 lg:px-8 text-center"
            style={{
                backgroundImage: `url( /storage/${ImgHse[0].icon})`,
            }}
        >
            {/* Overlay gradasi gelap */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0"></div>

            {/* Konten */}
            <div className="relative max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    {allCont[0].content[0]}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                    {allCont[0].content[1]}
                </p>
                <Link
                    href="/#produk"
                    className="inline-block bg-white text-[#8B5E4D] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300"
                >
                    {" "}
                    {allCont[0].content[2]}
                </Link>
            </div>
        </section>
    );
}
