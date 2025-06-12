import Header from '@/Components/Header';
import HighlightSection from '@/Components/HighlightSection';
import ProductSection from '@/Components/ProductSection';
import ArticlesSection from '@/Components/ArticlesSection';
import RatingsSection from '@/Components/RatingsSection';
import Footer from '@/Components/Footer';

export default function Welcome() {
  return (
    <div>
      <Header />
      <HighlightSection />
      <ProductSection />
      <ArticlesSection />
      <RatingsSection />
      <Footer />
    </div>
  );
}
