import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { FaBed, FaBath, FaExpand, FaHome, FaMapMarkerAlt } from "react-icons/fa";

interface ProductCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  image?: string[] | string | null; // ✅ tambahkan null
  features: string;
  badge: string;
  popular: boolean;
  date: string;
  tipe: string;
}

interface Props {
  PropertiProd: ProductCardProps[];
}

export default function ProductCard({ PropertiProd }: Props) {
  const icons = [<FaBed />, <FaBath />, <FaExpand />, <FaHome />];

  return (
    
<div className="flex flex-wrap justify-center gap-6">
  {PropertiProd.map((item, index) => {
    const badges =
      typeof item.badge === "string" ? JSON.parse(item.badge) : item.badge;
    const features =
      typeof item.features === "string"
        ? JSON.parse(item.features)
        : item.features;

    return (
      <div key={index} className="w-[300px]">
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full">
          {/* Badge */}
          {badges && badges.length > 0 && (
            <div className="absolute z-10 p-3 flex gap-2">
              {badges.map((b: string, i: number) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          {/* Image */}
          <Link
            href={route("products.show", item.id)}
            className="block h-52 bg-cover bg-center w-full"
            style={{
              backgroundImage: `url(${
                Array.isArray(item.image) ? item.image[0] : item.image || "/placeholder.jpg"
              })`,
            }}
          ></Link>

          {/* Content */}
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>

            <div className="flex justify-between text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt />
                {item.location}
              </span>
              <span className="font-semibold text-blue-600 text-sm">
                Rp{" "}
                {typeof item.price === "number"
                  ? item.price.toLocaleString()
                  : item.price}
              </span>
            </div>
<hr className="h-1"></hr>
            <div className="flex flex-wrap justify-between gap-4 text-gray-600 text-sm mt-2">
              {features.map((f: string, i: number) => (
                <div key={i} className="flex items-center gap-1">
                  <span>{icons[i % icons.length]}</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>


  );
}
