import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { FaBed, FaBath, FaExpand, FaHome, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

interface ProductCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  image?: string[] | string | null;
  features: string;
  badge: string;
  popular: boolean;
  date: string;
  tipe: string;
  satuan: string;
}

interface Props {
  PropertiProd: ProductCardProps[];
}

export default function ProductCard({ PropertiProd }: Props) {
  const icons = [<FaBed />, <FaBath />, <FaExpand />, <FaHome />];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {PropertiProd.map((item, index) => (
        <ProductCardItem key={index} item={item} icons={icons} />
      ))}
    </div>
  );
}

function ProductCardItem({ item, icons }: { item: ProductCardProps; icons: JSX.Element[] }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const badges = typeof item.badge === "string" ? JSON.parse(item.badge) : item.badge;
  const features = typeof item.features === "string" ? JSON.parse(item.features) : item.features;

  // Get the image URL
  const imageUrl = Array.isArray(item.image) 
    ? item.image[0] 
    : item.image || "/placeholder.jpg";

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  if (!imageLoaded || imageError) {
    return <ProductCardSkeleton />;
  }

  return (
    <div className="w-[300px]">
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
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

        {/* Image with lazy loading */}
        <Link
          href={route("products.show", item.id)}
          className="block h-52 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={`View ${item.title}`}
        >
          {item.popular && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              <FaStar/>
            </span>
          )}
        </Link>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1" title={item.title}>
            {item.title}
          </h3>

          <div className="flex justify-between text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-blue-500" />
              <span className="line-clamp-1" title={item.location}>{item.location}</span>
            </span>
          <span className="font-semibold text-blue-600 text-sm whitespace-nowrap">
  Rp {item.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{item.satuan}
</span>


          </div>

          <hr className="border-gray-200" />

          <div className="flex flex-wrap justify-between gap-4 text-gray-600 text-sm mt-2">
            {features.map((f: string, i: number) => (
              <div key={i} className="flex items-center gap-1">
                <span className="text-blue-500">{icons[i % icons.length]}</span>
                <span>
        {f}
        {(i === 2 || i === 3) && 'm²'}
      </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}