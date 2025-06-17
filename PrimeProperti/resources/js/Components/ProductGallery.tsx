import { useState } from "react";

interface ProductGalleryProps {
    mainImage: string;
    changeImage: (src: string) => void;
}

export default function ProductGallery({
    mainImage,
    changeImage,
}: ProductGalleryProps) {
    const thumbnails = [
        {
            src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Tampak Depan",
        },
        {
            src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Ruang Tamu",
        },
        {
            src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Kamar Tidur",
        },
        {
            src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Dapur",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handlePrev = () => {
        if (activeIndex !== null) {
            setActiveIndex(
                (prev) => (prev! - 1 + thumbnails.length) % thumbnails.length
            );
        }
    };

    const handleNext = () => {
        if (activeIndex !== null) {
            setActiveIndex((prev) => (prev! + 1) % thumbnails.length);
        }
    };

    const closeModal = () => {
        setActiveIndex(null);
    };

    return (
  <div className="product-gallery">
 <img
                src={mainImage}
                alt="Rumah Modern Minimalis"
                className="main-image"
            />
  <div className="thumbnail-row">
     {thumbnails.map((thumb, idx) => (
                    <img
                        key={idx}
                        src={thumb.src}
                        alt={thumb.alt}
                        className="thumbnail"
                        onClick={() => setActiveIndex(idx)}
                    />
                ))}
     {activeIndex !== null && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-image-wrapper">
                            <button
                                onClick={handlePrev}
                                className="modal-btn prev"
                            >
                                ‹
                            </button>
                            <img
                                src={thumbnails[activeIndex].src}
                                alt={thumbnails[activeIndex].alt}
                                className="modal-image"
                            />
                            <button
                                onClick={handleNext}
                                className="modal-btn next"
                            >
                                ›
                            </button>
                        </div>
                        <button onClick={closeModal} className="modal-close">
                            ✕
                        </button>
                    </div>
                </div>
            )}  </div>
</div>

    );
}
