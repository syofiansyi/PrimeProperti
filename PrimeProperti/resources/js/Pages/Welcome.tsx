import Header from "@/Components/Header";
import HighlightSection from "@/Components/HighlightSection";
import HighlighProduct from "@/Components/HiglightProduct";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import ProductSection from "@/Components/ProductSection";
import ArticlesSection from "@/Components/ArticlesSection";
import RatingsSection from "@/Components/RatingsSection";
import Footer from "@/Components/Footer";
import { FaWhatsapp } from "react-icons/fa";

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

interface Blog {
    id: number;
    title: string;
    description: string;
    content: string;
    thumbnail?: string;
}
interface users {
    id: number;
    nowhatsap: string;
    maps: string;
}
type Medsos = {
  icon: string; // atau mungkin JSON string
  medsos: string; // link
  username: string;
   id: number;
};


interface Rating {
    id: number;
    nama: string;
    ulasan: string;
    total_rate: number;
}

interface Props {
    PropertiProd: PropertiProd[];
    users: users[];
    Blog: Blog[];
    Rating: Rating[];
     Medsos: Medsos[];
}

export default function Welcome({ PropertiProd, users, Blog, Rating, Medsos }: Props) {
    return (
        <div>
            <Header />
            <main className="pt-20">
                <a
                    href={`https://wa.me/${users[0].nowhatsap}`} // Ganti dengan nomor WA kamu
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-[50%] right-5 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
                >
                    <FaWhatsapp size={24} />
                </a>
                <HighlightSection />
                <ProductSection PropertiProd={PropertiProd} />
                <HighlighProduct />
                <ArticlesSection Blog={Blog} />
                <About />
                <Contact users={users} />
                <RatingsSection Rating={Rating} />
            </main>
            <Footer users={users} Medsos={Medsos} />
        </div>
    );
}
