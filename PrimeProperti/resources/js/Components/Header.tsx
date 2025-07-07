import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

interface MenuItemProps {
    label: React.ReactNode;
    href: string;
    onClick?: () => void;
    isActive?: boolean;
}

function MenuItem({ label, href, onClick, isActive = false }: MenuItemProps) {
    const isHashLink = href.startsWith("#");

    const baseClasses =
        "block px-4 py-3 md:py-2 transition-colors duration-300 font-medium";
    const activeClasses = "text-[#8B5E4D] font-semibold";
    const hoverClasses = "hover:text-[#8B5E4D]";

    const className = `${baseClasses} ${
        isActive ? activeClasses : hoverClasses
    } text-black`;

    return isHashLink ? (
        <a href={href} onClick={onClick} className={className}>
            {label}
        </a>
    ) : (
        <Link href={href} onClick={onClick} className={className}>
            {label}
        </Link>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            // Cari semua section yang memiliki id
            const sections = document.querySelectorAll("section[id]");

            let current = "";

            sections.forEach((section) => {
                // pastikan TypeScript tahu ini HTMLElement
                const sec = section as HTMLElement;

                const sectionTop = sec.offsetTop;
                const sectionHeight = sec.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight * 0.25) {
                    current = sec.getAttribute("id") || "";
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const menuItems = [
        { label: "Home", href: "/", id: "" },
        { label: "Property", href: "#produk", id: "produk" },
        { label: "Artikel", href: "#artikel", id: "artikel" },
        { label: "Testimoni", href: "#testimoni", id: "testimoni" },
        { label: "Contact", href: "#kontak", id: "kontak" },
        { label: "Login", href: route("products.index"), id: "login" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
            }`}
        >
       <nav className="h-[60px] max-w-7xl mx-auto lg: flex items-center justify-between">
  <Link href="/" className="flex items-center">
    <img src="/icon.png" className="h-[15vh] w-auto" alt="Logo" />
  </Link>

                {/* Mobile menu button with solid white background */}
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    className="relative z-50 p-2 bg-white rounded-md md:hidden focus:outline-none shadow-sm ml-2"
                >
                    <div className="w-6 flex flex-col items-center">
                        {" "}
                        {/* ubah items-end jadi items-center */}
                        <span
                            className={`block h-0.5 bg-black rounded-full transition-all duration-300 ${
                                menuOpen
                                    ? "w-6 rotate-45 translate-y-1.5"
                                    : "w-6 mb-1.5"
                            }`}
                        ></span>
                        <span
                            className={`block h-0.5 bg-black rounded-full transition-all duration-300 ${
                                menuOpen ? "opacity-0" : "w-5 mb-1.5"
                            }`}
                        ></span>
                        <span
                            className={`block h-0.5 bg-black rounded-full transition-all duration-300 ${
                                menuOpen
                                    ? "w-6 -rotate-45 -translate-y-1.5"
                                    : "w-4"
                            }`}
                        ></span>
                    </div>
                </button>

                {/* Desktop menu */}
                <ul className="hidden md:flex md:flex-row md:items-center gap-2 text-sm">
                    {menuItems.map((item, idx) => (
                        <li key={idx}>
                            <MenuItem
                                label={item.label}
                                href={item.href}
                                isActive={activeSection === item.id}
                                onClick={() => setMenuOpen(false)}
                            />
                        </li>
                    ))}
                </ul>

                {/* Mobile menu overlay */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        onClick={toggleMenu}
                    ></div>
                )}

                {/* Mobile menu content */}
                <ul
                    className={`
            fixed top-0 right-0 h-full w-64 bg-white z-40
            flex flex-col pt-20 px-4 gap-1
            transform transition-transform duration-300 ease-in-out
            shadow-2xl
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            md:hidden
          `}
                >
                    {menuItems.map((item, idx) => (
                        <li
                            key={idx}
                            className="border-b border-gray-200 last:border-b-0"
                        >
                            <MenuItem
                                label={item.label}
                                href={item.href}
                                isActive={activeSection === item.id}
                                onClick={toggleMenu}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
