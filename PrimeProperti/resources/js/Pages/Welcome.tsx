import Header from "@/Components/Header";
import HighlightSection from "@/Components/HighlightSection";
import HighlighProduct from "@/Components/HiglightProduct";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import ProductSection from "@/Components/ProductSection";
import ArticlesSection from "@/Components/ArticlesSection";
import RatingsSection from "@/Components/RatingsSection";
import Footer from "@/Components/Footer";

export default function Welcome() {
    return (
        <div>
            <Header />
            <HighlightSection />
            <ProductSection />
            <HighlighProduct />
            <ArticlesSection />
            <About />
            <Contact />
            <RatingsSection />
            <Footer />
        </div>
    );
}
