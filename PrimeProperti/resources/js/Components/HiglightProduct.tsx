import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

interface Content {
    id: number;
    kategori: string;
    content: string[]; // array of link
}

interface Props {
    Content: Content[];
}
export default function HighlightProduct({ Content }: Props) {
   const allCont = Content.filter(
        (item) => item.kategori === "HighlighProduct"
    );
  const stats = [
    { label:  `${allCont[0].content[0]}`, value: `${allCont[0].content[1]}` },
    { label:  `${allCont[0].content[2]}`, value: `${allCont[0].content[3]}` },
    { label:  `${allCont[0].content[4]}`, value: `${allCont[0].content[5]}` },
    { label:  `${allCont[0].content[6]}`, value: `${allCont[0].content[7]}` },
  ];

  return (
    <section className="py-10 px-4 bg-white text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">
        {allCont[0].content[8]}
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-8">
         {allCont[0].content[9]}
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
