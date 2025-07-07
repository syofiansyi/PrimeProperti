import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HighlightSection from "@/Components/HighlightSection";
import ProductHiglight from "@/Components/ProductHiglight";
import ArticlesSection from "@/Components/ArticlesSection";
import RatingsSection from "@/Components/RatingsSection";

interface BlogType {
    id: number;
    thumbnail: string;
    title: string;
    content: any;
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
    kategori: string;
};

interface Props {
    blog: BlogType;
    users: users[];
    Medsos: Medsos[];
}

export default function Blog({ blog, users, Medsos }: Props) {
    const allMedsos = Medsos.map((item) => {
        const imageArray =
            typeof item.icon === "string" ? JSON.parse(item.icon) : item.icon;

        return {
            id: item.id,
            username: item.username,
            medsos: item.medsos,
            icon: imageArray,
            image: imageArray?.[0] ? `/storage/${imageArray[0]}` : null,
            kategori: item.kategori, // tambahkan ini
        };
    });

    return (
        <>
            <Header />
            <main className="pt-20">
                <HighlightSection />

                {/* Blog Section */}
                <section className="mx-auto px-4 py-12 bg-white mt-6 rounded-2xl shadow-md">
                    <div className="mb-8">
                        <div
                            className="
    space-y-6 text-gray-700 leading-relaxed
    [&_h1]:text-3xl
    [&_h2]:text-2xl
    [&_h3]:text-xl
    [&_h4]:text-lg
    [&_p]:mb-4
    [&_ol]:list-decimal [&_ol]:pl-6
    [&_ul]:list-disc [&_ul]:pl-6
    [&_.ql-align-center]:text-center
    [&_.ql-align-right]:text-right
    [&_.ql-align-justify]:text-justify
    [&_.ql-direction-rtl]:rtl
    [&_.ql-size-small]:text-sm
    [&_.ql-size-large]:text-xl
    [&_.ql-size-huge]:text-3xl
    [&_.ql-font-monospace]:font-mono
    [&_.ql-font-serif]:font-serif
    [&_.ql-font-sansserif]:font-sans
    [&_.ql-indent-1]:ml-4
    [&_.ql-indent-2]:ml-8
    [&_.ql-indent-3]:ml-12
    [&_.ql-indent-4]:ml-16
    [&_.ql-indent-5]:ml-20
    [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500
    [&_pre]:bg-gray-100 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto
    [&_code]:bg-gray-200 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded
    [&_a]:text-blue-600 [&_a]:underline
    "
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                </section>

                <br></br>
            </main>
            <Footer users={users} Medsos={allMedsos} />
        </>
    );
}
