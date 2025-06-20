interface users {
    id: number;
    nowhatsap:string;
    maps:string;
}

interface ProductInfoProps {
   users: users[];
}

export default function Contact({ users }: ProductInfoProps) {
  return (
    <section className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Konten */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Enjoy Your Day</h2>
        <p className="text-base md:text-lg mb-6">
          Hubungi kami untuk layanan properti terbaik di Bali
        </p>
        <a
          href={`https://wa.me/${users[0].nowhatsap}?text=Halo, saya tertarik dengan layanan Anda`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium transition duration-300"
        >
          📞 Hubungi Kami via WhatsApp
        </a>
      </div>
    </section>
  );
}
