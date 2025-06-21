import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Contact from "@/Components/Contact";
import HighlightSection from "@/Components/HighlightSection";
import ProductHiglight from "@/Components/ProductHiglight";
import ArticlesSection from "@/Components/ArticlesSection";
import RatingsSection from "@/Components/RatingsSection";
import ProductGallery from "@/Components/ProductGallery";
import ProductInfo from "@/Components/ProductInfo";
import ProductTabs from "@/Components/ProductTabs";
import About from "@/Components/About";

interface DetailProd {
    id: number;
    title: string;
    location: string;
    price: number;
    image?: string[] | string;
    features: string;
    badge: string;
    maps: string;
    properti_detail: string;
    properti_pembayaran: string;
    properti_fasilitas: string;
    popular: boolean;
    date: string;
    deskripsi: string;
    tipe: string;
}

interface SimilarProducts {
    id: number;
    title: string;
    location: string;
    price: number;
    image?: string[] | string;
    features: string;
    badge: string;
    maps: string;
    properti_detail: string;
    properti_pembayaran: string;
    properti_fasilitas: string;
    popular: boolean;
    date: string;
    deskripsi: string;
    tipe: string;
}

interface users {
    id: number;
    nowhatsap: string;
    maps: string;
}

interface Rating {
    id: number;
    nama: string;
    ulasan: string;
    total_rate: number;
}

interface Blog {
    id: number;
    title: string;
    description: string;
    content: string;
    thumbnail?: string;
}

interface Props {
    DetailProd: DetailProd[]; // <- array!
    allprod: SimilarProducts[];
    users: users[];
    Rating: Rating[];
    Blog: Blog[];
}

export default function ProductDetail({
    DetailProd,
    users,
    allprod,
    Rating,
    Blog,
}: Props) {
    console.log(Rating);

    const filterLocation = DetailProd[0].location;
    const filterTipe = DetailProd[0].tipe;

    const filteredProducts = allprod.filter(
        (prod) => prod.location === filterLocation
    );

    const DetailProdProp = DetailProd.map((item) => {
        const imageArray =
            typeof item.image === "string"
                ? JSON.parse(item.image)
                : item.image;

        return {
            id: item.id,
            title: item.title,
            location: item.location,
            deskripsi: item.deskripsi,
            price: item.price,
            popular: item.popular,
            date: item.date,
            tipe: item.tipe,
            image: imageArray?.map((img: string) => `/storage/${img}`) ?? [],
            features:
                typeof item.features === "string"
                    ? JSON.parse(item.features)
                    : item.features,
            badge:
                typeof item.badge === "string"
                    ? JSON.parse(item.badge)
                    : item.badge,
            properti_detail:
                typeof item.properti_detail === "string"
                    ? JSON.parse(item.properti_detail)
                    : item.properti_detail,
            properti_pembayaran:
                typeof item.properti_pembayaran === "string"
                    ? JSON.parse(item.properti_pembayaran)
                    : item.properti_pembayaran,
            properti_fasilitas:
                typeof item.properti_fasilitas === "string"
                    ? JSON.parse(item.properti_fasilitas)
                    : item.properti_fasilitas,
            maps: item.maps,
        };
    });
    const SimilarProd = filteredProducts.map((item) => {
        const imageArray =
            typeof item.image === "string"
                ? JSON.parse(item.image)
                : item.image;

        return {
            id: item.id,
            title: item.title,
            location: item.location,
            deskripsi: item.deskripsi,
            price: item.price,
            popular: item.popular,
            date: item.date,
            tipe: item.tipe,
            image: imageArray?.map((img: string) => `/storage/${img}`) ?? [],
            features:
                typeof item.features === "string"
                    ? JSON.parse(item.features)
                    : item.features,
            badge:
                typeof item.badge === "string"
                    ? JSON.parse(item.badge)
                    : item.badge,
            properti_detail:
                typeof item.properti_detail === "string"
                    ? JSON.parse(item.properti_detail)
                    : item.properti_detail,
            properti_pembayaran:
                typeof item.properti_pembayaran === "string"
                    ? JSON.parse(item.properti_pembayaran)
                    : item.properti_pembayaran,
            properti_fasilitas:
                typeof item.properti_fasilitas === "string"
                    ? JSON.parse(item.properti_fasilitas)
                    : item.properti_fasilitas,
            maps: item.maps,
        };
    });

    const [mainImage, setMainImage] = useState(DetailProdProp[0].image[0]);
    const [activeTab, setActiveTab] = useState("detail");

    const changeImage = (src: string) => {
        setMainImage(src);
    };

    const openTab = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Header />
             <main className="pt-20">
            <HighlightSection />

            <section
                id="produk"
                className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
                        Detail Properti
                    </h2>
                    <div className="mb-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-semibold">
                            Baru
                        </span>
                        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full font-semibold">
                            Eksklusif
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                        Rumah Modern Minimalis
                    </h1>

                    {/* Responsive Layout */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-10">
                        {/* Galeri Gambar */}
                        <div className="w-full lg:w-1/2">
                            <ProductGallery
                                mainImage={mainImage}
                                changeImage={changeImage}
                                DetailProd={DetailProdProp}
                            />
                        </div>

                        {/* Info Properti */}
                        <div className="w-full lg:w-1/2">
                            <ProductInfo users={users} />
                        </div>
                    </div>

                    {/* Tabs */}
                    <ProductTabs
                        activeTab={activeTab}
                        openTab={openTab}
                        DetailProd={DetailProdProp}
                    />
                </div>
            </section>
            <ProductHiglight allprod={SimilarProd} />

            <About />
            {/* Komponen Lain */}

            <ArticlesSection Blog={Blog} />
            <Contact users={users} />
            <RatingsSection Rating={Rating} />
            </main>
            <Footer users={users} />
        </>
    );
}
