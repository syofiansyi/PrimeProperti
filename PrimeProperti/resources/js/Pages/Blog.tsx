import { useState, useEffect } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HighlightSection from "@/Components/HighlightSection";
import ProductHiglight from "@/Components/ProductHiglight";
import ArticlesSection from "@/Components/ArticlesSection";
import RatingsSection from "@/Components/RatingsSection";

export default function ProductDetail() {
  return (
    <>
      <Header />
      <HighlightSection />

      {/* Section Judul Produk */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug text-gray-900">
          Ready Now — 4 Bedroom Villa for Sale Leasehold in Umalas (BE-1928)
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          Properti eksklusif di lokasi strategis. Cocok untuk tempat tinggal maupun investasi jangka panjang.
        </p>
      </section>

      <ProductHiglight />
      <ArticlesSection />
      <RatingsSection />
      <Footer />
    </>
  );
}
