
import { useState, useEffect } from 'react';
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Tutup menu saat ukuran layar besar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#f7f5f5]">MyProperty</div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Menu Items */}
        <ul
          className={`
            md:flex md:flex-row md:items-center gap-6 text-sm font-medium 
            ${menuOpen
              ? 'absolute top-full left-0 w-full bg-white border-t border-gray-200 flex flex-col text-black'
              : 'hidden md:flex'}
          `}
        >
          {[
          { label: 'Home', href: '/' },
  { label: 'Properti', href: '#produk' },
  { label: 'Artikel', href: '#artikel' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
  { label: 'Login', href: route("dashboard") },
          ].map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 md:py-0 hover:text-[#8B5E4D] transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
