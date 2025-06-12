export default function RatingsSection() {
  return (
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
  );
}
