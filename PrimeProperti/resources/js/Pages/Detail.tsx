import { useState, useEffect } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HighlightSection from "@/Components/HighlightSection";
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
           <div className="products py-12 px-4 md:px-8"  id="detail">
        <h2 className="text-2xl font-bold text-center mb-6">DeDtail Properti</h2>


            <main id="detail" className="product-detail">
                <div className="product-container">
                    <ProductGallery
                        mainImage={mainImage}
                        changeImage={changeImage}
                    />
                    <ProductInfo whatsappLink={whatsappLink} />
                </div>
                <ProductTabs activeTab={activeTab} openTab={openTab} />
            </main>
            </div>
            <ArticlesSection />
            <RatingsSection />
            <Footer />
        </>
    );
}
