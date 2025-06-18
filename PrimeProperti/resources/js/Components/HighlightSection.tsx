export default function HighlightSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-4 sm:px-6 lg:px-8 text-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      {/* Overlay gradasi gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0"></div>

      {/* Konten */}
      <div className="relative max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Temukan Rumah Impian Anda
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Kami menyediakan properti berkualitas dengan harga terbaik di lokasi strategis.
          Mulai perjalanan properti Anda bersama kami.
        </p>
        <a
          href="#produk"
          className="inline-block bg-white text-[#8B5E4D] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300"
        >
          Lihat Properti
        </a>
      </div>
    </section>
  );
}
