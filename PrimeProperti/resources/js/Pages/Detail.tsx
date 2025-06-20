import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HighlightSection from "@/Components/HighlightSection";
import ProductHiglight from "@/Components/ProductHiglight";
import ArticlesSection from "@/Components/ArticlesSection";
import RatingsSection from "@/Components/RatingsSection";
import ProductGallery from "@/Components/ProductGallery";
import ProductInfo from "@/Components/ProductInfo";
import ProductTabs from "@/Components/ProductTabs";
import Contact from "@/Components/Contact";

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
    popular:boolean;
    date:string;
    deskripsi:string;
    tipe:string;
}
interface users {
    id: number;
    nowhatsap: string;
    maps: string;
}

interface Props {
    DetailProd: DetailProd[];
    users: users[];
}

export default function ProductDetail({ DetailProd, users }: Props) {
    const DetailUsers = users.map((item) => {
        return {
            id: item.id,
            nowhatsap: item.nowhatsap,
            maps: item.maps,
        };
    });
    const DetailProperties = DetailProd.map((item) => {
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
            date:item.date,
            tipe:item.tipe,
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
                typeof item.properti_detail=== "string"
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
    // Ini untuk semuanya
    const title = DetailProperties.map((item) => item.title);
    const location = DetailProperties.map((item) => item.location);
    const price = DetailProperties.map((item) => item.price);
    const features = DetailProperties.flatMap((item) => item.features);
    const DeskripsiProd = DetailProperties.map((item) => item.deskripsi);

    const badge = DetailProperties.flatMap((item) => item.badge);
    const PropertiDetail = DetailProperties.flatMap((item) => item.properti_detail);
    const PropertiPembayaran = DetailProperties.flatMap((item) => item.properti_pembayaran);
    const PropertiFasilitas = DetailProperties.flatMap((item) => item.properti_fasilitas);

    const tipe = DetailProperties.map((item) => item.tipe);
    const maps = DetailProperties.map((item) => item.maps);
    const nowhatsap = DetailUsers.map((item) => item.nowhatsap);
    const secondImage = DetailProperties.map((item) => item.image);
    const primeImage = DetailProperties.map((item) => item.image[0]);
    const [mainImage, setMainImage] = useState(primeImage);
    const [activeTab, setActiveTab] = useState("detail");
    const changeImage = (src: string) => {
        setMainImage(src);
    };

    const openTab = (tab: string) => {
        setActiveTab(tab);
    };

    const whatsappLink = `https://wa.me/${nowhatsap}`;

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
                        {badge.map((label, index) => (
                            <div key={index} className="flex">
                                <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-semibold">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                        {title}
                    </h1>

                    {/* Responsive Layout */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-10">
                        {/* Galeri Gambar */}
                        <div className="w-full lg:w-1/2">
                            <ProductGallery
                                mainImage={mainImage}
                                changeImage={changeImage}
                                secondImage={secondImage}
                            />
                        </div>

                        {/* Info Properti */}
                        <div className="w-full lg:w-1/2">
                            <ProductInfo
                                whatsappLink={whatsappLink}
                                maps={maps}
                            />
                        </div>
                    </div>

                    {/* Tabs */}
                    <ProductTabs activeTab={activeTab} openTab={openTab} PropertiDetail={PropertiDetail} PropertiPembayaran={PropertiPembayaran} PropertiFasilitas={PropertiFasilitas} DeskripsiProd={DeskripsiProd} />
                </div>
            </section>

            {/* Komponen Lain */}
            <ProductHiglight />
            <ArticlesSection />
            <Contact DetailUsers={DetailUsers} />
            <RatingsSection />
             </main>
            <Footer DetailUsers={DetailUsers} />
        </>
    );
}
