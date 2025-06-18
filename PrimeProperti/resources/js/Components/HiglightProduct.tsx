export default function HighlightProduct() {
  const stats = [
    { label: "Canggu", value: "120+" },
    { label: "Ubud", value: "95+" },
    { label: "Sanur", value: "80+" },
    { label: "Jimbaran", value: "60+" },
  ];

  return (
    <section className="py-10 px-4 bg-white text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">
        EXPLORE THE HOT INVESTMENT AREAS IN BALI
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-8">
        Explore Our Available Villas In Bali's Most Developing Areas
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="w-36 h-24 md:w-40 md:h-24 bg-black text-white rounded-2xl shadow-lg flex flex-col items-center justify-center"
          >
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-sm">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
