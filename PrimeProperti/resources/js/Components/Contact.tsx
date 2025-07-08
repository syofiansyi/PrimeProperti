interface users {
    id: number;
    nowhatsap: string;
    maps: string;
}
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

interface ProductInfoProps {
    users: users[];
    Content: Content[];
    Medsos: Medsos[];
}

export default function Contact({ users, Content, Medsos }: ProductInfoProps) {
    const allCont = Content.filter((item) => item.kategori === "Contact");
    const ImgCont = Medsos.filter((item) => item.kategori === "Contact");
    console.log(ImgCont[0].icon);
    return (
        <section
            className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
            style={{
                backgroundImage: `url( /storage/${ImgCont[0].icon})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Konten */}
            <div className="relative z-10 text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {" "}
                    {allCont[0].content[0]}
                </h2>
                <p className="text-base md:text-lg mb-6">
                    {allCont[0].content[1]}
                </p>
                <a
                    href={`https://wa.me/${users[0].nowhatsap}?text=Halo, saya tertarik dengan layanan Anda`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium transition duration-300"
                >
                    📞 {allCont[0].content[2]}
                </a>
            </div>
        </section>
    );
}
