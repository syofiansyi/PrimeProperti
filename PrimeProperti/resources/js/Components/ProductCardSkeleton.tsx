import { FaBed, FaBath, FaExpand, FaHome, FaMapMarkerAlt } from "react-icons/fa";

export const ProductCardSkeleton = () => {
  return (
    <div className="w-[300px] animate-pulse">
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full">
        {/* Image Skeleton */}
        <div className="h-52 bg-gray-200 w-full"></div>
        
        {/* Content Skeleton */}
        <div className="p-4 space-y-3">
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-gray-300" />
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
          
          <hr className="border-gray-200" />
          
          <div className="flex flex-wrap justify-between gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="text-gray-300">
                  {i === 1 && <FaBed />}
                  {i === 2 && <FaBath />}
                  {i === 3 && <FaExpand />}
                  {i === 4 && <FaHome />}
                </div>
                <div className="h-3 bg-gray-200 rounded w-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};