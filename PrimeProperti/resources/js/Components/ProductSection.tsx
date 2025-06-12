import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductSection() {
 const allProperties = [
  {
    title: "Rumah Modern Minimalis",
    location: "Jakarta Selatan",
    price: 1200000000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["3 Kamar", "2 Kamar Mandi", "120m²", "90m²"],
    badge: "Baru",
    popular: true,
    date: "2025-06-10",
  },
  {
    title: "Apartemen City View",
    location: "Bandung",
    price: 850000000,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["2 Kamar", "1 Kamar Mandi", "80m²", "70m²"],
    badge: "",
    popular: false,
    date: "2025-06-01",
  },
  {
    title: "Ruko Strategis Pusat Kota",
    location: "Surabaya",
    price: 1500000000,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["2 Lantai", "1 Kamar Mandi", "100m²", "150m²"],
    badge: "Disewakan",
    popular: true,
    date: "2025-05-28",
  },
  {
    title: "Villa Pantai Eksklusif",
    location: "Bali",
    price: 4500000000,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["4 Kamar", "3 Kamar Mandi", "250m²", "500m²"],
    badge: "Premium",
    popular: true,
    date: "2025-06-05",
  },
  {
    title: "Tanah Kavling Murah",
    location: "Bogor",
    price: 400000000,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["-","-", "-", "120m²"],
    badge: "Promo",
    popular: false,
    date: "2025-05-20",
  },
  {
    title: "Rumah Subsidi Asri",
    location: "Bekasi",
    price: 300000000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["2 Kamar", "1 Kamar Mandi", "60m²", "45m²"],
    badge: "",
    popular: false,
    date: "2025-06-02",
  },
  {
    title: "Apartemen Minimalis",
    location: "Jakarta Pusat",
    price: 1000000000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["1 Kamar", "1 Kamar Mandi", "50m²", "45m²"],
    badge: "",
    popular: true,
    date: "2025-06-07",
  },
  {
    title: "Ruko Dua Lantai",
    location: "Bandung",
    price: 1300000000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["2 Lantai", "2 Kamar Mandi", "100m²", "200m²"],
    badge: "",
    popular: false,
    date: "2025-05-30",
  },
  {
    title: "Rumah Cluster Elite",
    location: "Depok",
    price: 1750000000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["4 Kamar", "3 Kamar Mandi", "200m²", "180m²"],
    badge: "Baru",
    popular: true,
    date: "2025-06-09",
  },
  {
    title: "Rumah Cluster Elite",
    location: "Depok",
    price: 1750000000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["4 Kamar", "3 Kamar Mandi", "200m²", "180m²"],
    badge: "Baru",
    popular: true,
    date: "2025-06-09",
  },
];


  const [sortOption, setSortOption] = useState('latest');
  const [viewCount, setViewCount] = useState(12);

  // State form input (belum diterapkan)
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    type: '',
    price: '',
    bedrooms: '',
  });

  // State filter yang diterapkan saat tombol search ditekan
  const [appliedFilters, setAppliedFilters] = useState(searchFilters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedFilters(searchFilters);
  };

  const filteredProperties = allProperties.filter((p) => {
    const locationMatch =
      !appliedFilters.location || p.location.toLowerCase().includes(appliedFilters.location.toLowerCase());
    const typeMatch =
      !appliedFilters.type || p.title.toLowerCase().includes(appliedFilters.type.toLowerCase());
    const priceMatch =
      !appliedFilters.price || p.price <= parseInt(appliedFilters.price) * 1000000;
    const bedroomMatch =
      !appliedFilters.bedrooms ||
      parseInt(
        p.features.find((f) => f.toLowerCase().includes('kamar'))?.split(' ')[0] || '0'
      ) >= parseInt(appliedFilters.bedrooms);

    return locationMatch && typeMatch && priceMatch && bedroomMatch;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'popular':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'latest':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const displayedProperties = sortedProperties.slice(0, viewCount);

  return (
    <>
      <section className="search-section">
        <div className="search-container">
          <h2 className="search-title">Cari Properti Impian Anda</h2>
          <form className="search-form" id="propertySearch" onSubmit={handleSearch}>
            <div className="form-group">
              <label htmlFor="location">Lokasi</label>
              <select id="location" name="location" value={searchFilters.location} onChange={handleFilterChange}>
                <option value="">Semua Lokasi</option>
                <option value="jakarta">Jakarta</option>
                <option value="bandung">Bandung</option>
                <option value="surabaya">Surabaya</option>
                <option value="bali">Bali</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="type">Tipe Properti</label>
              <select id="type" name="type" value={searchFilters.type} onChange={handleFilterChange}>
                <option value="">Semua Tipe</option>
                <option value="rumah">Rumah</option>
                <option value="apartemen">Apartemen</option>
                <option value="tanah">Tanah</option>
                <option value="ruko">Ruko</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Harga Maksimal</label>
              <select id="price" name="price" value={searchFilters.price} onChange={handleFilterChange}>
                <option value="">Semua Harga</option>
                <option value="500">Hingga Rp 500 juta</option>
                <option value="1000">Hingga Rp 1 Miliar</option>
                <option value="2000">Hingga Rp 2 Miliar</option>
                <option value="5000">Hingga Rp 5 Miliar</option>
                <option value="10000">Lebih dari Rp 5 Miliar</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bedrooms">Kamar Tidur</label>
              <select id="bedrooms" name="bedrooms" value={searchFilters.bedrooms} onChange={handleFilterChange}>
                <option value="">Semua</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <button type="submit" className="search-button">Cari Properti</button>
          </form>
        </div>
      </section>

      <section id="produk" className="products py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold text-center mb-6">Properti Unggulan Kami</h2>

        <div className="product-filters flex flex-wrap gap-4 justify-center mb-8">
          <div className="filter-group flex items-center gap-2">
            <label htmlFor="sort" className="font-medium">Urutkan:</label>
            <select
              id="sort"
              name="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value="latest">Terbaru</option>
              <option value="price-asc">Harga Terendah</option>
              <option value="price-desc">Harga Tertinggi</option>
              <option value="popular">Paling Populer</option>
            </select>
          </div>

          <div className="filter-group flex items-center gap-2">
            <label htmlFor="view" className="font-medium">Tampilkan:</label>
            <select
              id="view"
              name="view"
              value={viewCount}
              onChange={(e) => setViewCount(parseInt(e.target.value))}
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value={12}>12 per halaman</option>
              <option value={24}>24 per halaman</option>
              <option value={36}>36 per halaman</option>
            </select>
          </div>
        </div>

        <div className="product-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id="propertyResults">
          {displayedProperties.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>
    </>
  );
}
