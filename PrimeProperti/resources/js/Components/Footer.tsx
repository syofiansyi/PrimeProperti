import { useState, useEffect } from "react";

interface users {
    id: number;
    nowhatsap: string;
    maps: string;
}

type Medsos = {
    icon: string;
    medsos: string;
    username: string;
    id: number;
    kategori: string;
};

interface Content {
    id: number;
    kategori: string;
    content: string[]; // array of link
}

interface ProductInfoProps {
    users: users[];
    Medsos: Medsos[];
     Content: Content[];
}

export default function Footer({ users, Medsos,Content }: ProductInfoProps) {
    const [isLoading, setIsLoading] = useState(true);
    const ImgFoot = Medsos.filter(item => item.kategori === "Footer");
 const allCont = Content.filter(
        (item) => item.kategori === "Footer"
    );
    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <footer className="bg-[#3b2f2a] text-white text-sm" id="kontak">
                {/* CTA Section Skeleton */}
                <div className="text-center py-10 border-b border-[#4e413b] px-4 animate-pulse">
                    <div className="h-6 bg-[#4e413b] rounded w-1/3 mx-auto mb-3"></div>
                    <div className="max-w-xl mx-auto space-y-2 mb-4">
                        <div className="h-3 bg-[#4e413b] rounded w-full"></div>
                        <div className="h-3 bg-[#4e413b] rounded w-5/6 mx-auto"></div>
                        <div className="h-3 bg-[#4e413b] rounded w-2/3 mx-auto"></div>
                    </div>
                    <div className="h-10 bg-[#4e413b] rounded-md w-40 mx-auto"></div>
                </div>

                {/* Main Content Skeleton */}
                <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* About Section Skeleton */}
                    <div>
                        <div className="h-8 bg-[#4e413b] rounded w-1/3 mb-4"></div>
                        <div className="space-y-2">
                            <div className="h-3 bg-[#4e413b] rounded w-full"></div>
                            <div className="h-3 bg-[#4e413b] rounded w-5/6"></div>
                            <div className="h-3 bg-[#4e413b] rounded w-2/3"></div>
                        </div>
                        <div className="flex gap-2 mt-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-10 h-10 bg-[#4e413b] rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Map Section Skeleton */}
                    <div>
                        <div className="h-6 bg-[#4e413b] rounded w-1/4 mx-auto mb-4"></div>
                        <div className="w-full h-48 bg-[#4e413b] rounded-md"></div>
                    </div>
                </div>

                {/* Bottom Section Skeleton */}
                <div className="border-t border-[#4e413b] px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="h-4 bg-[#4e413b] rounded w-1/4"></div>
                    <div className="flex gap-4">
                        <div className="h-4 bg-[#4e413b] rounded w-12"></div>
                        <div className="h-4 bg-[#4e413b] rounded w-16"></div>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="bg-[#3b2f2a] text-white text-sm" id="kontak">
            {/* CTA Section */}
            <div className="text-center py-10 border-b border-[#4e413b] px-4">
                <h3 className="text-xl font-semibold mb-2">
                  {allCont[0].content[0]}
                </h3>
                <p className="max-w-xl mx-auto text-gray-300 mb-4">
                 {allCont[0].content[1]}
                </p>
                <a
                    href={`https://wa.me/${users[0]?.nowhatsap}?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20properti%20Anda.`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-white text-[#3b2f2a] font-semibold py-2 px-5 rounded-md hover:bg-gray-200 transition">
                       {allCont[0].content[2]}
                    </button>
                </a>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Column 1 - About */}
                <div>
                    <div className="text-2xl font-bold mb-4">{allCont[0].content[3]}</div>
                    <p className="text-gray-300 leading-relaxed">
                       {allCont[0].content[4]}
                    </p>
                    <div className="flex gap-2 mt-6 text-2xl">
                        {ImgFoot.map((item, index) => (
                            <a
                                key={index}
                                href={item.medsos}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-400 transition-colors"
                            >
                                <img
                                    src={`/storage/${item.icon}`}
                                    alt="icon"
                                    className="w-10 h-10 object-cover rounded transition-colors"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 3 - Map */}
                <div>
                    <h2 className="text-2xl font-semibold text-center mb-4">
                       {allCont[0].content[5]}
                    </h2>
                    <div>
                        <iframe
                            src={users[0]?.maps}
                            width="100%"
                            height="200"
                            className="w-full rounded-md"
                            style={{ border: 0 }}
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#4e413b] text-gray-400 text-xs px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-2">
                <div>© 2025 balimeridianproperty.com — Real estate agency</div>
                <div className="flex gap-4">
                    <a href="#">Terms</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}