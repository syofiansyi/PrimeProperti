import { useState } from "react";
import ProductCard from "./ProductCard";

interface PropertiProd {
    id: number;
    title: string;
    location: string;
    price: number;
    image?: string[] | string;
    features: string;
    badge: string;
    popular: boolean;
    date: string;
    tipe: string;
}
type SearchFilters = {
    location: string;
    tipe: string;
    price: string;
    bedrooms: string;
    bath: string;
    large: string;
    minPrice: string;
    maxPrice: string;
};

interface Props {
    PropertiProd: PropertiProd[];
}
export default function ProductSection({ PropertiProd }: Props) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000); // misalnya

    const allProperties = PropertiProd.map((item) => {
        const imageArray =
            typeof item.image === "string"
                ? JSON.parse(item.image)
                : item.image;

        return {
            id: item.id,
            title: item.title,
            location: item.location,
            price: item.price,
            image: imageArray?.[0] ? `/storage/${imageArray[0]}` : null,
            features:
                typeof item.features === "string"
                    ? JSON.parse(item.features)
                    : item.features,
            badge:
                typeof item.badge === "string"
                    ? JSON.parse(item.badge)
                    : item.badge,
            popular: !!item.popular,
            date: item.date,
            tipe: item.tipe,
        };
    });

    const lokasi = [
        ...new Set(allProperties.map((item) => item.location)),
    ].sort((a, b) => a.localeCompare(b));
    const TipeApart = [
        "Rumah",
        "Ruko",
        "Apartemen",
        "Hotel",
        "Villa",
        "Kost",
        "Gudang",
        "Tanah",
    ].sort((a, b) => a.localeCompare(b));

    const KamarTidur = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Luas = [30, 36, 45, 60, 72, 90, 120, 150, 200, 300];
    const KamarMandi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [sortOption, setSortOption] = useState("latest");
    const [viewCount, setViewCount] = useState(12);

    // State form input (belum diterapkan)
    const [searchFilters, setSearchFilters] = useState<SearchFilters>({
        location: "",
        tipe: "",
        price: "",
        bedrooms: "",
        bath: "",
        large: "",
        minPrice: "", // kosong
        maxPrice: "", // kosong
    });

    const pageOptions = [10, 20, 30, 40, 50];

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
    const min =
        appliedFilters.minPrice === "" ? null : Number(appliedFilters.minPrice);
    const max =
        appliedFilters.maxPrice === "" ? null : Number(appliedFilters.maxPrice);
    const filteredProperties = allProperties.filter((p) => {
        const locationMatch =
            !appliedFilters.location ||
            p.location
                .toLowerCase()
                .includes(appliedFilters.location.toLowerCase());

        const typeMatch =
            !appliedFilters.tipe ||
            p.tipe.toLowerCase().includes(appliedFilters.tipe.toLowerCase());

        const priceMatch =
            //  !appliedFilters.price ||
            // p.price >= Number(appliedFilters.minPrice) &&  p.price <= Number(appliedFilters.maxPrice);
            (min === null && max === null) ||
            (min !== null && max === null && p.price >= min) ||
            (min === null && max !== null && p.price <= max) ||
            (min !== null && max !== null && p.price >= min && p.price <= max);
        const bedroomMatch =
            !appliedFilters.bedrooms ||
            Number(p.features[0]) >= Number(appliedFilters.bedrooms);
        const KamarMandiMatch =
            !appliedFilters.bath ||
            Number(p.features[1]) >= Number(appliedFilters.bath);
        const largeMatch =
            !appliedFilters.large ||
            Number(p.features[2]) >= Number(appliedFilters.large);

        return (
            locationMatch &&
            typeMatch &&
            priceMatch &&
            bedroomMatch &&
            largeMatch &&
            KamarMandiMatch
        );
    });
    console.log(appliedFilters);
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
                            <label
                                htmlFor="location"
                                className="text-sm font-medium mb-1"
                            >
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
                            <label
                                htmlFor="type"
                                className="text-sm font-medium mb-1"
                            >
                                Tipe Properti
                            </label>
                            <select
                                id="tipe"
                                name="tipe"
                                value={searchFilters.tipe}
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

                        {/* Rentang Harga */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Rentang Harga (Rp)
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    name="minPrice"
                                    value={searchFilters.minPrice}
                                    onChange={(e) =>
                                        setSearchFilters((prev) => ({
                                            ...prev,
                                            minPrice: e.target.value,
                                        }))
                                    }
                                    placeholder="Minimum"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                                <input
                                    type="number"
                                    name="maxPrice"
                                    value={searchFilters.maxPrice}
                                    onChange={(e) =>
                                        setSearchFilters((prev) => ({
                                            ...prev,
                                            maxPrice: e.target.value,
                                        }))
                                    }
                                    placeholder="Maximum"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                        </div>

                        {/* Jumlah Kamar Tidur */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="bedrooms"
                                className="text-sm font-medium mb-1"
                            >
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
                        <div className="flex flex-col">
                            <label
                                htmlFor="bath"
                                className="text-sm font-medium mb-1"
                            >
                                Kamar Mandi
                            </label>
                            <select
                                id="bath"
                                name="bath"
                                value={searchFilters.bath}
                                onChange={handleFilterChange}
                                className="border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="">Semua</option>
                                {KamarMandi.map((i) => (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Luas */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="large"
                                className="text-sm font-medium mb-1"
                            >
                                Luas Bangunan
                            </label>
                            <select
                                id="large"
                                name="large"
                                value={searchFilters.large}
                                onChange={handleFilterChange}
                                className="border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="">Semua</option>
                                {Luas.map((i) => (
                                    <option key={i} value={i}>
                                        {i} m²
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
                            onChange={(e) =>
                                setViewCount(parseInt(e.target.value))
                            }
                            className="border border-gray-300 rounded px-3 py-2"
                        >
                            {pageOptions.map((count) => (
                                <option key={count} value={count}>
                                    {count} per halaman
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Grid Produk */}
                <div className="max-w-7xl mx-auto">
                    <div
                        id="propertyResults"
                        className="flex justify-center flex-wrap gap-6"
                    >
                        <ProductCard PropertiProd={displayedProperties} />
                    </div>
                </div>
            </section>
        </>
    );
}
