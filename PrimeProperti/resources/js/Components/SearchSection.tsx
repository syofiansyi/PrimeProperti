export default function SearchSection() {
  return (
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
  );
}
