import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HighlightSection from "@/Components/HighlightSection";
import ProductHiglight from "@/Components/ProductHiglight";
import ArticlesSection from "@/Components/ArticlesSection";
import RatingsSection from "@/Components/RatingsSection";

export default function Blog() {
  const article = {
    title: "Tips Membeli Rumah Pertama",
    author: "Syofian Properti",
    date: "10 Juni 2025",
    image: "https://images.unsplash.com/photo-1634757439914-23b8acb9d411?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sections: [
      {
        heading: "1. Tentukan Anggaran Sesuai Kemampuan",
        text: "Sebelum mulai melihat rumah, hitung dengan matang kemampuan finansialmu. Jangan hanya melihat harga rumah, tapi juga perhitungkan:",
        list: [
          "Uang muka (DP)",
          "Biaya notaris",
          "Pajak dan asuransi",
          "Cicilan bulanan",
        ],
        tip: "💡 Tips: Usahakan cicilan tidak lebih dari 30% penghasilan tetap.",
      },
      {
        heading: "2. Pilih Lokasi Strategis",
        text: "Lokasi adalah faktor krusial. Pertimbangkan akses ke transportasi, kedekatan dengan fasilitas umum, dan potensi kenaikan nilai tanah.",
        tip: "📍 Contoh: Daerah pinggiran kota dekat tol atau LRT.",
      },
      {
        heading: "3. Periksa Legalitas dan Sertifikat",
        text: "Pastikan rumah yang kamu beli memiliki sertifikat hak milik (SHM), IMB, dan bebas sengketa hukum atau perbankan.",
        tip: "📑 Mintalah fotokopi semua dokumen sebelum transaksi!",
      },
      {
        heading: "4. Gunakan Jasa Agen/Notaris Tepercaya",
        text: "Jika ini rumah pertamamu, agen properti bisa bantu proses dokumen & negosiasi.",
        tip: "🤝 Pilih agen yang profesional dan transparan.",
      },
      {
        heading: "5. Survei Langsung ke Lokasi",
        text: "Jangan hanya andalkan brosur. Cek langsung kondisi bangunan, lingkungan sekitar, dan fasilitas dasar.",
        tip: "🔍 Rumah adalah investasi jangka panjang. Jangan terburu-buru!",
      },
    ],
    conclusion:
      "Membeli rumah pertama memerlukan persiapan yang matang. Dengan mengikuti tips di atas, kamu akan lebih siap menghadapi proses pembelian rumah dengan percaya diri dan aman.",
  };

  return (
    <>
      <Header />
      <HighlightSection />

      {/* Hero Section */}
      <section className="bg-white text-center py-16 px-4 shadow">
        <h1 className="text-4xl font-bold text-gray-800">Blog Properti Rumah</h1>
        <p className="text-lg text-gray-600 mt-2">
          Temukan tips, inspirasi, dan informasi terkini seputar dunia properti.
        </p>
      </section>

      {/* Artikel */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-white mt-6 rounded-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {article.title}
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Ditulis oleh <strong>{article.author}</strong> – {article.date}
        </p>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            Membeli rumah pertama adalah langkah besar dalam hidup. Agar prosesnya berjalan lancar dan tidak membuat stres,
            berikut beberapa tips penting yang wajib kamu perhatikan:
          </p>

          {article.sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-xl mb-2">{section.heading}</h3>
              <p>{section.text}</p>
              {section.list && (
                <ul className="list-disc list-inside ml-4 mt-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.tip && <p className="mt-2 italic">{section.tip}</p>}
            </div>
          ))}

          <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p className="text-gray-800 font-semibold">🎯 Kesimpulan:</p>
            <p>{article.conclusion}</p>
          </div>
        </div>
      </section>

      <ProductHiglight />
      <ArticlesSection />
      <RatingsSection />
      {/* <Footer /> */}
    </>
  );
}
