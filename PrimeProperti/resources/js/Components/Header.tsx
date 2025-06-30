import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

// Komponen MenuItem modular
function MenuItem({ label, href, onClick }) {
  const isHashLink = href.startsWith("#");

  return isHashLink ? (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-3 md:py-0 hover:text-[#8B5E4D] transition"
    >
      {label}
    </a>
  ) : (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 md:py-0 hover:text-[#8B5E4D] transition"
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Tutup menu ketika ukuran layar >= 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Kunci scroll body saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Properti", href: "#produk" },
    { label: "Artikel", href: "#artikel" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
    { label: "Login", href: route("products.index") },
  ];

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#f7f5f5]">MyProperty</div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Menu */}
        <ul
          className={`
            md:flex md:flex-row md:items-center gap-6 text-sm font-medium
            transition-all duration-300 ease-in-out
            ${menuOpen
              ? "absolute top-full left-0 w-full bg-white border-t border-gray-200 flex flex-col text-black"
              : "hidden md:flex"}
          `}
        >
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <MenuItem
                label={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
