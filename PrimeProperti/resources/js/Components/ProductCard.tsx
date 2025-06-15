import { Link } from "@inertiajs/react";
import { FaBed, FaBath, FaCar, FaHome } from "react-icons/fa";

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
        <article className="property-card">
            {badge && Object.values(badge).length > 0 && (
                <div className="status-badge">
                    {Object.values(badge).map((u, i) => (
                        <span key={i} className="badge-badge-item">
                            {u}
                        </span>
                    ))}
                </div>
            )}{" "}
              <Link
                href="/detail#detail"
                className="mt-3 inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                        
            <div
                className="property-image"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
              </Link>

            <div className="property-details">
                <h2 className="property-title">{title}</h2>
                <div className="property-id-price">
                    <span className="property-id">{location}</span>
                    <span className="property-price">{price}</span>
                </div>
                <div className="property-features">
                    {features.map((f, i) => (
                        <div className="feature">
                            <span className="feature-value">
                                {icons[i % icons.length]}
                            </span>
                            <span className="feature-label">{f}</span>{" "}
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
