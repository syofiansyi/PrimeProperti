import { Link,  } from '@inertiajs/react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
        <nav>
      <div className="logo">MyProperty</div>
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/#produk">Properti</Link></li>
        <li><Link href="/#artikel">Artikel</Link></li>
        <li><Link href="/#testimoni">Testimoni</Link></li>
        <li><Link href="/#kontak">Kontak</Link></li>
      </ul>
    </nav>
    </header>
  );
}
