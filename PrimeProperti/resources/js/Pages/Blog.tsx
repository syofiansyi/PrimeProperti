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
interface Props {
    blog: BlogType;
     users: users[];
}

export default function Blog({ blog,users }: Props) {
    return (
        <>
            <Header />
            <main className="pt-20">
                <HighlightSection />

                {/* Blog Section */}
                <section className="max-w-4xl mx-auto px-4 py-12 bg-white mt-6 rounded-2xl shadow-md">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            {blog.title}
                        </h2>
                        <div
                            className="space-y-6 text-gray-700 leading-relaxed text-justify"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                </section><br></br>
            </main>
              <Footer users={users} />
        </>
    );
}
