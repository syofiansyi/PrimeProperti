export default function Footer() {
  return (
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
  );
}
