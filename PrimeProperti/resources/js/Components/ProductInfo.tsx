interface ProductInfoProps {
  whatsappLink: string;
}

export default function ProductInfo({ whatsappLink }: ProductInfoProps) {
  return (
    <div className="product-info">
      <div className="product-badge">Baru</div>
      <h1 className="product-title">Rumah Modern Minimalis</h1>
      <div className="product-location">Jl. Melati No. 15, Jakarta Selatan</div>
      <div className="product-price">Rp 1,2 Miliar</div>

      <div className="product-meta">
        <div className="meta-item"><div><div>Luas Tanah</div><strong>120 m²</strong></div></div>
        <div className="meta-item"><div><div>Luas Bangunan</div><strong>90 m²</strong></div></div>
        <div className="meta-item"><div><div>Kamar Tidur</div><strong>3</strong></div></div>
        <div className="meta-item"><div><div>Kamar Mandi</div><strong>2</strong></div></div>
      </div>

      <div className="product-description">
        <p>Rumah modern minimalis dengan desain elegan di lokasi strategis Jakarta Selatan...</p>
      </div>

      <div className="product-features">
        <h3>Fasilitas Properti:</h3>
        <div className="features-grid">
          <div className="feature-item">Carport untuk 1 mobil</div>
          <div className="feature-item">Taman depan</div>
          <div className="feature-item">Dapur modern</div>
          <div className="feature-item">Kamar mandi mewah</div>
          <div className="feature-item">Listrik 2200 watt</div>
          <div className="feature-item">Air PDAM dan sumur</div>
          <div className="feature-item">Keamanan 24 jam</div>
          <div className="feature-item">Internet fiber optic</div>
        </div>
      </div>

      <a href={whatsappLink} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        Hubungi via WhatsApp
      </a>
    </div>
  );
}
