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

interface Blog {
  id: number;
  title: string;
  description:string;
  content:string;
  thumbnail?: string;

}
interface users {
    id: number;
    nowhatsap:string;
    maps:string;
}

interface Rating {
    id: number;
    nama:string;
    ulasan:string;
    total_rate:number;
}


interface Props {
  PropertiProd: PropertiProd[];
  users: users[];
  Blog: Blog[];
  Rating:Rating[];
}

export default function Welcome({ PropertiProd, users, Blog, Rating }: Props) {
       
  return (
    <div>
      <Header />
      <main className="pt-20">
        <HighlightSection />
        <ProductSection PropertiProd={PropertiProd} />
        <HighlighProduct />
        <ArticlesSection Blog={Blog}/>
        <About />
        <Contact users={users} />
        <RatingsSection Rating={Rating}/>
      </main>
      <Footer users={users} />
    </div>
  );
}
