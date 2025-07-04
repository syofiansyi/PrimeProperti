import { all } from "axios";


interface users {
    id: number;
    nowhatsap: string;
    maps: string;
}

type Medsos = {
    icon: string; // atau mungkin JSON string
    medsos: string; // link
    username: string;
    id: number;
    kategori: string;
};

interface ProductInfoProps {
    users: users[];
    Medsos: Medsos[];
}

export default function Footer({ users, Medsos }: ProductInfoProps) {
   const allFoot = Medsos.filter(item => item.kategori === "footer")

    return (
        <footer className="bg-[#3b2f2a] text-white text-sm" id="kontak">
            {/* CTA Section */}
            <div className="text-center py-10 border-b border-[#4e413b] px-4">
                <h3 className="text-xl font-semibold mb-2">
                    Get personalized service
                </h3>
                <p className="max-w-xl mx-auto text-gray-300 mb-4">
                    You will receive prompt support and guidance. Our expert
                    team will provide top-notch assistance.
                </p>
                <a
                    href={`https://wa.me/${users[0].nowhatsap}?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20properti%20Anda.`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-white text-[#3b2f2a] font-semibold py-2 px-5 rounded-md hover:bg-gray-200 transition">
                        REQUEST NOW
                    </button>
                </a>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Column 1 - About */}
                <div>
                    <div className="text-2xl font-bold mb-4">MyProperti</div>
                    <p className="text-gray-300 leading-relaxed">
                        At MyProperti Real Estate, we guide you through your
                        next property investment with confidence and expertise.
                    </p>
                    <div className="flex gap-2 mt-6 text-2xl">
                        {allFoot.map((item, index) => (
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

                {/* Column 2 - Links */}
                {/* <div>
                    <h4 className="font-bold mb-4">Prime Location</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>Canggu</li>
                        <li>Umalas</li>
                        <li>Ubud</li>
                        <li>Sanur</li>
                        <li>Cliffside Villas</li>
                        <li>Beachfront</li>
                    </ul>
                </div> */}

                {/* Column 3 - Map */}
                <div>
                    <h2 className="text-2xl font-semibold text-center mb-4">
                        Visit Us
                    </h2>
                    <div>
                        <iframe
                            src={users[0].maps}
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
                <div>© 2025 MyPrime — Real estate agency</div>
                <div className="flex gap-4">
                    <a href="#">Terms</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}
