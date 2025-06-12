export default function ArticlesSection() {
  return (
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
  );
}
