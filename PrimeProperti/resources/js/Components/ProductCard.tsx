import { Link } from '@inertiajs/react';

interface ProductCardProps {
  title: string;
  location: string;
  price: string;
  image: string;
  features: string[];
  badge?: string;
}

export default function ProductCard({ title, location, price, image, features, badge }: ProductCardProps) {
  return (
    <article className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        {badge && <div className="product-badge">{badge}</div>}
        <h3 className="product-title">{title}</h3>
        <div className="product-location"><i className="fas fa-map-marker-alt" /> {location}</div>
        <div className="product-price">{price}</div>
        <ul className="product-features">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
       <Link href="/detail#detail" className="cta-button">Detail Properti</Link>

      </div>
    </article>
  );
}
