interface ProductGalleryProps {
  mainImage: string;
  changeImage: (src: string) => void;
}

export default function ProductGallery({ mainImage, changeImage }: ProductGalleryProps) {
  const thumbnails = [
    {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Tampak Depan"
    },
    {
      src: "https://images.unsplash.com/photo-1600566752225-ff453580d8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Ruang Tamu"
    },
    {
      src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Kamar Tidur"
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Dapur"
    }
  ];

  return (
    <div className="product-gallery">
      <img src={mainImage} alt="Rumah Modern Minimalis" className="main-image" />
      {thumbnails.map((thumb, idx) => (
        <img
          key={idx}
          src={thumb.src}
          alt={thumb.alt}
          className="thumbnail"
          onClick={() => changeImage(thumb.src)}
        />
      ))}
    </div>
  );
}
