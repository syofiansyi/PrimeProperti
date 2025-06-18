import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductSection() {
    const allProperties = [
        {
            title: "Modern Minimalis",
            location: "Jakarta Selatan",
            price: 1200000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["3 ", "2", "120m²", "90m²"],
            badge: ["Baru", "Premium"],
            popular: true,
            date: "2025-06-10",
        },
        {
            title: "Apartemen City View",
            location: "Bandung",
            price: 850000000,
            image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["2 ", "1", "80m²", "70m²"],
            badge: ["Baru", "Premium"],
            popular: false,
            date: "2025-06-01",
        },
        {
            title: "Ruko Strategis Pusat",
            location: "Surabaya",
            price: 1500000000,
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["2 Lantai", "1 KM", "100m²", "150m²"],
            badge: ["Baru"],
            popular: true,
            date: "2025-05-28",
        },
        {
            title: "Villa Pantai Eksklusif",
            location: "Bali",
            price: 4500000000,
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["4 ", "3 KM", "250m²", "500m²"],
            badge: ["Baru"],
            popular: true,
            date: "2025-06-05",
        },
        {
            title: "Tanah Kavling Murah",
            location: "Bogor",
            price: 400000000,
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["-", "-", "-", "120m²"],
            badge: ["Baru"],
            popular: false,
            date: "2025-05-20",
        },
        {
            title: "Rumah Subsidi Asri",
            location: "Bekasi",
            price: 300000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["2 ", "1 KM", "60m²", "45m²"],
            badge: ["Baru", "Premium"],
            popular: false,
            date: "2025-06-02",
        },
        {
            title: "Apartemen Minimalis",
            location: "Jakarta Pusat",
            price: 1000000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["1 ", "1 KM", "50m²", "45m²"],
            badge: [],
            popular: true,
            date: "2025-06-07",
        },
        {
            title: "Ruko Dua Lantai",
            location: "Bandung",
            price: 1300000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["2 Lantai", "2 KM", "100m²", "200m²"],
            badge: ["Baru", "Premium"],
            popular: false,
            date: "2025-05-30",
        },
        {
            title: "Rumah Cluster Elite",
            location: "Depok",
            price: 1750000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["4 ", "3 KM", "200m²", "180m²"],
            badge: ["Baru"],
            popular: true,
            date: "2025-06-09",
        },
        {
            title: "Rumah Cluster Elite",
            location: "Depok",
            price: 1750000000,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            features: ["4 ", "3 KM", "200m²", "180m²"],
            badge: ["Baru"],
            popular: true,
            date: "2025-06-09",
        },
    ];

    const lokasi = ["Jakarta", "Bandung", "Surabaya", "Bali"];
    const TipeApart = ["rumah", "apartemen", "tanah", "ruko"];
    const Harga = [500,1000, 2000,5000,10000];
    const KamarTidur = [1,2,3,4];



    const [sortOption, setSortOption] = useState("latest");
    const [viewCount, setViewCount] = useState(12);

    // State form input (belum diterapkan)
    const [searchFilters, setSearchFilters] = useState({
        location: "",
        type: "",
        price: "",
        bedrooms: "",
    });

    // State filter yang diterapkan saat tombol search ditekan
    const [appliedFilters, setAppliedFilters] = useState(searchFilters);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSearchFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setAppliedFilters(searchFilters);
    };

    const filteredProperties = allProperties.filter((p) => {
        const locationMatch =
            !appliedFilters.location ||
            p.location
                .toLowerCase()
                .includes(appliedFilters.location.toLowerCase());
        const typeMatch =
            !appliedFilters.type ||
            p.title.toLowerCase().includes(appliedFilters.type.toLowerCase());
        const priceMatch =
            !appliedFilters.price ||
            p.price <= parseInt(appliedFilters.price) * 1000000;
        const bedroomMatch =
            !appliedFilters.bedrooms ||
            parseInt(
                p.features
                    .find((f) => f.toLowerCase().includes("kamar"))
                    ?.split(" ")[0] || "0"
            ) >= parseInt(appliedFilters.bedrooms);

        return locationMatch && typeMatch && priceMatch && bedroomMatch;
    });

    const sortedProperties = [...filteredProperties].sort((a, b) => {
        switch (sortOption) {
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            case "popular":
                return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
            case "latest":
            default:
                return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
    });

    const displayedProperties = sortedProperties.slice(0, viewCount);

    return (
        <>
        <section className="bg-gray-50 py-10 px-4">
  <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Cari Properti Impian Anda
    </h2>

    <form
      id="propertySearch"
      onSubmit={handleSearch}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {/* Lokasi */}
      <div className="flex flex-col">
        <label htmlFor="location" className="text-sm font-medium mb-1">
          Lokasi
        </label>
        <select
          id="location"
          name="location"
          value={searchFilters.location}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Semua Lokasi</option>
          {lokasi.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {/* Tipe Properti */}
      <div className="flex flex-col">
        <label htmlFor="type" className="text-sm font-medium mb-1">
          Tipe Properti
        </label>
        <select
          id="type"
          name="type"
          value={searchFilters.type}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Semua Tipe</option>
          {TipeApart.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {/* Harga Maksimal */}
      <div className="flex flex-col">
        <label htmlFor="price" className="text-sm font-medium mb-1">
          Harga Maksimal
        </label>
        <select
          id="price"
          name="price"
          value={searchFilters.price}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Semua Harga</option>
          {Harga.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {/* Jumlah Kamar Tidur */}
      <div className="flex flex-col">
        <label htmlFor="bedrooms" className="text-sm font-medium mb-1">
          Kamar Tidur
        </label>
        <select
          id="bedrooms"
          name="bedrooms"
          value={searchFilters.bedrooms}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Semua</option>
          {KamarTidur.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {/* Tombol Cari */}
      <div className="md:col-span-2 lg:col-span-3">
        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
        >
          Cari Properti
        </button>
      </div>
    </form>
  </div>
</section>


         <section id="produk" className="py-12 px-4 md:px-8">
  <h2 className="text-2xl font-bold text-center mb-6">
    Properti Unggulan Kami
  </h2>

  {/* Filter */}
  <div className="flex flex-wrap gap-4 justify-center mb-8">
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="font-medium">
        Urutkan:
      </label>
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

    <div className="flex items-center gap-2">
      <label htmlFor="view" className="font-medium">
        Tampilkan:
      </label>
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

  {/* Grid Produk */}
  <div className="max-w-7xl mx-auto">
    <div
      id="propertyResults"
      className="flex justify-center flex-wrap gap-6"
    >
      {displayedProperties.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  </div>
</section>

        </>
    );
}
