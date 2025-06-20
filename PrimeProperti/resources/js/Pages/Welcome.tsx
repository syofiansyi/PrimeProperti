import Header from "@/Components/Header";
import HighlightSection from "@/Components/HighlightSection";
import HighlighProduct from "@/Components/HiglightProduct";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import ProductSection from "@/Components/ProductSection";
import ArticlesSection from "@/Components/ArticlesSection";
import RatingsSection from "@/Components/RatingsSection";
import Footer from "@/Components/Footer";

interface PropertiProd {
  id: number;
  title: string;
  location: string;
  price: number;
  image?: string[] | string;
  features: string;
  badge: string;
  popular:boolean;
  date:string;
  tipe:string;
}
interface users {
    id: number;
    nowhatsap:string;
    maps:string;
}


interface Props {
  PropertiProd: PropertiProd[];
  users: users[];
}

export default function Welcome({ PropertiProd, users }: Props) {
     const DetailUsers = users.map((item) => {

        return {
            id: item.id,
            nowhatsap: item.nowhatsap,
            maps: item.maps,
        };
    });
       

  return (
    <div>
      <Header />
      <main className="pt-20">
        <HighlightSection />
        <ProductSection PropertiProd={PropertiProd} />
        <HighlighProduct />
        <ArticlesSection />
        <About />
        <Contact DetailUsers={DetailUsers} />
        <RatingsSection />
      </main>
      <Footer DetailUsers={DetailUsers} />
    </div>
  );
}
