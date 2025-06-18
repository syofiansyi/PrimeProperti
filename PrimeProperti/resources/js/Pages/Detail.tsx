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

export default function ProductDetail() {
    const [mainImage, setMainImage] = useState(
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    );
    const [activeTab, setActiveTab] = useState("detail");

    const changeImage = (src: string) => {
        setMainImage(src);
    };

    const openTab = (tab: string) => {
        setActiveTab(tab);
    };

    const whatsappLink = "https://wa.me/6281234567890";

    return (
        <>
            <Header />
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
                            />
                        </div>

                        {/* Info Properti */}
                        <div className="w-full lg:w-1/2">
                            <ProductInfo whatsappLink={whatsappLink} />
                        </div>
                    </div>

                    {/* Tabs */}
                    <ProductTabs activeTab={activeTab} openTab={openTab} />
                </div>
            </section>

            {/* Komponen Lain */}
            <ProductHiglight />
            <ArticlesSection />
            <RatingsSection />
            <Footer />
        </>
    );
}
