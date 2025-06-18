import { Link } from "@inertiajs/react";
import {
  FaBed,
  FaBath,
  FaCar,
  FaHome,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface ProductCardProps {
  title: string;
  location: string;
  price: string | number;
  image: string;
  features: string[];
  badge?: string | string[];
}

export default function ProductCard({
  title,
  location,
  price,
  image,
  features,
  badge,
}: ProductCardProps) {
  const icons = [<FaBed />, <FaBath />, <FaCar />, <FaHome />];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm w-full">
      {/* Badge */}
      {badge && Object.values(badge).length > 0 && (
        <div className="absolute z-10 p-3 flex gap-2">
          {Object.values(badge).map((b, i) => (
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
      <Link href="/detail#produk" className="block">
        <div
          className="h-52 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>

        <div className="flex justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt />
            {location}
          </span>
          <span className="font-semibold text-blue-600 text-sm">
            Rp {typeof price === "number" ? price.toLocaleString() : price}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-1">
              <span>{icons[i % icons.length]}</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
