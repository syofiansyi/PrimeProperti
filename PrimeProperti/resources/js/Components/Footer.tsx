import {
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaWhatsapp,
} from "react-icons/fa";

interface users {
    id: number;
    nowhatsap:string;
    maps:string;
}

interface ProductInfoProps {
   users: users[];
}


export default function Footer({ users }: ProductInfoProps) {
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
            <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Column 1 - About */}
                <div>
                    <div className="text-2xl font-bold mb-4">MyProperti</div>
                    <p className="text-gray-300 leading-relaxed">
                        At MyProperti Real Estate, we guide you through your
                        next property investment with confidence and expertise.
                    </p>
                    <div className="flex gap-6 mt-6 text-2xl">
                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400 transition-colors"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://facebook.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://wa.me/62895424010064?text=Halo, saya tertarik dengan layanan Anda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Column 2 - Links */}
                <div>
                    <h4 className="font-bold mb-4">Prime Location</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>Canggu</li>
                        <li>Umalas</li>
                        <li>Ubud</li>
                        <li>Sanur</li>
                        <li>Cliffside Villas</li>
                        <li>Beachfront</li>
                    </ul>
                </div>

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
