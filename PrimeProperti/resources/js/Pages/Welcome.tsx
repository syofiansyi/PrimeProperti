import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
  
    return (
    <div>
  <header>
    <nav>
      <div className="logo">MyProperty</div>
      <div className="menu-toggle">☰</div>
      <ul className="nav-links">
        <li><a href="#produk">Properti</a></li>
        <li><a href="#artikel">Artikel</a></li>
        <li><a href="#testimoni">Testimoni</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </nav>
  </header>
  {/* Highlight Section */}
  <section className="highlight">
    <h1>Temukan Rumah Impian Anda</h1>
    <p>Kami menyediakan properti berkualitas dengan harga terbaik di lokasi strategis. Mulai perjalanan properti Anda bersama kami.</p>
    <a href="#produk" className="cta-button">Lihat Properti</a>
    <div className="highlight-stats">
      <div className="stat-item">
        <div className="stat-number">500+</div>
        <div>Properti Tersedia</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">98%</div>
        <div>Kepuasan Klien</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">15+</div>
        <div>Tahun Pengalaman</div>
      </div>
    </div>
  </section>
  {/* Search Section */}
  <section className="search-section">
    <div className="search-container">
      <h2 className="search-title">Cari Properti Impian Anda</h2>
      <form className="search-form" id="propertySearch">
        <div className="form-group">
          <label htmlFor="location">Lokasi</label>
          <select id="location" name="location">
            <option value>Semua Lokasi</option>
            <option value="jakarta">Jakarta</option>
            <option value="bandung">Bandung</option>
            <option value="surabaya">Surabaya</option>
            <option value="bali">Bali</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Tipe Properti</label>
          <select id="type" name="type">
            <option value>Semua Tipe</option>
            <option value="rumah">Rumah</option>
            <option value="apartemen">Apartemen</option>
            <option value="tanah">Tanah</option>
            <option value="ruko">Ruko</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Harga Maksimal</label>
          <select id="price" name="price">
            <option value>Semua Harga</option>
            <option value={500}>Hingga Rp 500 juta</option>
            <option value={1000}>Hingga Rp 1 Miliar</option>
            <option value={2000}>Hingga Rp 2 Miliar</option>
            <option value={5000}>Hingga Rp 5 Miliar</option>
            <option value={10000}>Lebih dari Rp 5 Miliar</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bedrooms">Kamar Tidur</label>
          <select id="bedrooms" name="bedrooms">
            <option value>Semua</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
          </select>
        </div>
        <button type="submit" className="search-button">Cari Properti</button>
      </form>
    </div>
  </section>
  {/* Products Section */}
  <section id="produk" className="products">
    <h2>Properti Unggulan Kami</h2>
    <div className="product-filters">
      <div className="filter-group">
        <label htmlFor="sort">Urutkan:</label>
        <select id="sort" name="sort">
          <option value="latest">Terbaru</option>
          <option value="price-asc">Harga Terendah</option>
          <option value="price-desc">Harga Tertinggi</option>
          <option value="popular">Paling Populer</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="view">Tampilkan:</label>
        <select id="view" name="view">
          <option value={12}>12 per halaman</option>
          <option value={24}>24 per halaman</option>
          <option value={36}>36 per halaman</option>
        </select>
      </div>
    </div>
    <div className="product-grid" id="propertyResults">
      {/* Properti akan ditampilkan di sini */}
      <article className="product-card">
        <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Rumah Modern" className="product-image" />
        <div className="product-info">
          <div className="product-badge">Baru</div>
          <h3 className="product-title">Rumah Modern Minimalis</h3>
          <div className="product-location"><i className="fas fa-map-marker-alt" /> Jakarta Selatan</div>
          <div className="product-price">Rp 1,2 Miliar</div>
          <ul className="product-features">
            <li><i className="fas fa-bed" /> 3 Kamar</li>
            <li><i className="fas fa-bath" /> 2 Kamar Mandi</li>
            <li><i className="fas fa-ruler-combined" /> 120m²</li>
            <li><i className="fas fa-building" /> 90m²</li>
          </ul>
          <a href="detail.html" className="cta-button">Detail Properti</a>
        </div>
      </article>
      <article className="product-card">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Rumah Klasik" className="product-image" />
        <div className="product-info">
          <h3 className="product-title">Rumah Klasik Mewah</h3>
          <div className="product-location"><i className="fas fa-map-marker-alt" /> Bandung</div>
          <div className="product-price">Rp 3,5 Miliar</div>
          <ul className="product-features">
            <li><i className="fas fa-bed" /> 5 Kamar</li>
            <li><i className="fas fa-bath" /> 4 Kamar Mandi</li>
            <li><i className="fas fa-ruler-combined" /> 350m²</li>
            <li><i className="fas fa-building" /> 250m²</li>
          </ul>
          <a href="detail.html" className="cta-button">Detail Properti</a>
        </div>
      </article>
      <article className="product-card">
        <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Apartemen" className="product-image" />
        <div className="product-info">
          <div className="product-badge">Promo</div>
          <h3 className="product-title">Apartemen Premium</h3>
          <div className="product-location"><i className="fas fa-map-marker-alt" /> Surabaya Pusat</div>
          <div className="product-price">Rp 850 Juta</div>
          <ul className="product-features">
            <li><i className="fas fa-bed" /> 2 Kamar</li>
            <li><i className="fas fa-bath" /> 2 Kamar Mandi</li>
            <li><i className="fas fa-ruler-combined" /> 75m²</li>
            <li><i className="fas fa-swimming-pool" /> Kolam Renang</li>
          </ul>
          <a href="detail.html" className="cta-button">Detail Properti</a>
        </div>
      </article>
      <article className="product-card">
        <img src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Rumah Taman" className="product-image" />
        <div className="product-info">
          <h3 className="product-title">Rumah dengan Taman Luas</h3>
          <div className="product-location"><i className="fas fa-map-marker-alt" /> Bali</div>
          <div className="product-price">Rp 2,8 Miliar</div>
          <ul className="product-features">
            <li><i className="fas fa-bed" /> 4 Kamar</li>
            <li><i className="fas fa-bath" /> 3 Kamar Mandi</li>
            <li><i className="fas fa-ruler-combined" /> 500m²</li>
            <li><i className="fas fa-tree" /> Taman 200m²</li>
          </ul>
          <a href="detail.html" className="cta-button">Detail Properti</a>
        </div>
      </article>
    </div>
  </section>
  {/* Articles Section */}
  <section id="artikel" className="articles">
    <div className="articles-container">
      <h2>Artikel &amp; Tips Properti</h2>
      <div className="article-grid">
        <article className="article-card">
          <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Tips Membeli Rumah" className="article-image" />
          <div className="article-content">
            <h3 className="article-title">5 Tips Membeli Rumah Pertama untuk Millennial</h3>
            <p className="article-excerpt">Pelajari strategi cerdas untuk memiliki rumah pertama tanpa stres dan sesuai budget...</p>
            <a href="#" className="read-more">Baca Selengkapnya →</a>
          </div>
        </article>
        <article className="article-card">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Investasi Properti" className="article-image" />
          <div className="article-content">
            <h3 className="article-title">Investasi Properti 2023: Lokasi Mana yang Potensial?</h3>
            <p className="article-excerpt">Analisis perkembangan harga properti dan prediksi lokasi-lokasi strategis untuk investasi...</p>
            <a href="#" className="read-more">Baca Selengkapnya →</a>
          </div>
        </article>
        <article className="article-card">
          <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="KPR" className="article-image" />
          <div className="article-content">
            <h3 className="article-title">Panduan Lengkap Mengajukan KPR dengan Bunga Terbaik</h3>
            <p className="article-excerpt">Simak langkah-langkah dan dokumen yang diperlukan untuk mendapatkan KPR dengan bunga kompetitif...</p>
            <a href="#" className="read-more">Baca Selengkapnya →</a>
          </div>
        </article>
      </div>
    </div>
  </section>
  {/* Ratings Section */}
  <section id="testimoni" className="ratings">
    <h2>Apa Kata Klien Kami</h2>
    <div className="rating-container">
      <div className="rating-card">
        <div className="rating-stars">★★★★★</div>
        <p className="rating-text">"Pelayanan sangat profesional. Saya mendapatkan rumah impian di lokasi yang tepat sesuai budget."</p>
        <div className="rating-author">- Bapak Andi Wijaya</div>
      </div>
      <div className="rating-card">
        <div className="rating-stars">★★★★★</div>
        <p className="rating-text">"Proses transaksi cepat dan aman. Agennya sangat membantu menjelaskan semua detail properti."</p>
        <div className="rating-author">- Ibu Sari Dewi</div>
      </div>
      <div className="rating-card">
        <div className="rating-stars">★★★★☆</div>
        <p className="rating-text">"Pilihan properti sangat banyak. Saya akhirnya menemukan apartemen yang sesuai kebutuhan keluarga."</p>
        <div className="rating-author">- Keluarga Budiman</div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer id="kontak">
    <div className="footer-container">
      <div className="footer-about">
        <div className="footer-logo">MyProperty</div>
        <p className="footer-about">Kami adalah perusahaan properti terpercaya dengan pengalaman lebih dari 15 tahun membantu klien menemukan rumah impian mereka.</p>
      </div>
      <div className="footer-links">
        <h3>Tautan Cepat</h3>
        <ul>
          <li><a href="#produk">Properti</a></li>
          <li><a href="#artikel">Artikel</a></li>
          <li><a href="#testimoni">Testimoni</a></li>
          <li><a href="#kontak">Kontak Kami</a></li>
        </ul>
      </div>
      <div className="footer-links">
        <h3>Layanan</h3>
        <ul>
          <li><a href="#">Jual Properti</a></li>
          <li><a href="#">Beli Properti</a></li>
          <li><a href="#">Konsultasi Properti</a></li>
          <li><a href="#">Manajemen Properti</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Hubungi Kami</h3>
        <p><i className="fas fa-map-marker-alt" /> Jl. Properti No. 123, Jakarta</p>
        <p><i className="fas fa-phone" /> 0895424010064</p>
        <p><i className="fas fa-envelope" /> info@Myproperty.com</p>
        <p><i className="fas fa-clock" /> Senin-Jumat: 9.00-17.00</p>
      </div>
    </div>
    <div className="copyright">
      © 2023 MyProperty. Semua hak dilindungi.
    </div>
  </footer>
</div>

    );
}
