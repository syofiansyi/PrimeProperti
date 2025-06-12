import { Link } from '@inertiajs/react';
export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">MyProperty</div>
        <div className="menu-toggle">☰</div>
       <ul className="nav-links">
  <li><Link href="/" className="product-detail">Home</Link></li>
  <li><Link href="/#produk">Properti</Link></li>
  <li><Link href="/#artikel">Artikel</Link></li>
  <li><Link href="/#testimoni">Testimoni</Link></li>
  <li><Link href="/#kontak">Kontak</Link></li>
</ul>

      </nav>
    </header>
  );
}
