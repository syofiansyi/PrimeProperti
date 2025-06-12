interface ProductTabsProps {
  activeTab: string;
  openTab: (tab: string) => void;
}

export default function ProductTabs({ activeTab, openTab }: ProductTabsProps) {
  return (
    <div className="product-tabs">
      <div className="tabs-header">
        <button className={`tab-button ${activeTab === "detail" ? "active" : ""}`} onClick={() => openTab("detail")}>Detail Properti</button>
        <button className={`tab-button ${activeTab === "fasilitas" ? "active" : ""}`} onClick={() => openTab("fasilitas")}>Fasilitas Sekitar</button>
        <button className={`tab-button ${activeTab === "pembayaran" ? "active" : ""}`} onClick={() => openTab("pembayaran")}>Cara Pembayaran</button>
      </div>

      <div id="detail" className={`tab-content ${activeTab === "detail" ? "active" : ""}`}>
        <h3>Deskripsi Lengkap</h3>
        <p>Rumah modern minimalis ini dibangun pada tahun 2020...</p>
        <ul>
          <li>1 lantai dengan 3 kamar tidur</li>
          <li>2 kamar mandi</li>
          <li>Ruang tamu luas</li>
          <li>Ruang keluarga + dapur</li>
          <li>Area servis</li>
          <li>Carport</li>
          <li>Taman depan</li>
        </ul>
      </div>

      <div id="fasilitas" className={`tab-content ${activeTab === "fasilitas" ? "active" : ""}`}>
        <h3>Fasilitas Sekitar</h3>
        <div className="facilities-grid">
          <div className="facility-item"><span>Sekolah Internasional (1 km)</span></div>
          <div className="facility-item"><span>Rumah Sakit (2 km)</span></div>
          <div className="facility-item"><span>Mall (1.5 km)</span></div>
          <div className="facility-item"><span>Stasiun MRT (800 m)</span></div>
          <div className="facility-item"><span>Restoran & Café (500 m)</span></div>
          <div className="facility-item"><span>Tempat Parkir Umum (300 m)</span></div>
        </div>
      </div>

      <div id="pembayaran" className={`tab-content ${activeTab === "pembayaran" ? "active" : ""}`}>
        <h3>Opsi Pembayaran</h3>
        <ul>
          <li><strong>Tunai:</strong> Diskon 2%</li>
          <li><strong>KPR Bank:</strong> Bunga kompetitif</li>
          <li><strong>Cicilan Developer:</strong> DP 30%, cicilan 24 bulan</li>
          <li><strong>Take Over KPR:</strong> Ambil alih KPR lama</li>
        </ul>
        <p>Hubungi kami via WhatsApp untuk info lebih lanjut.</p>
      </div>
    </div>
  );
}
