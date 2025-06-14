interface ProductInfoProps {
    whatsappLink: string;
}

export default function ProductInfo({ whatsappLink }: ProductInfoProps) {
    const features = [
        "Carport untuk 1 mobil",
        "Taman minimalis depan rumah",
        "Kamar mandi dalam",
        "2 Kamar Tidur",
        "Ruang keluarga luas",
        "Dapur dengan kitchen set",
        "Listrik 1300 watt",
    ];
    return (
        <div className="product-info">
            <div className="status-badge">
                <div className="badge-badge-item">Baru</div>
                <div className="badge-badge-item">Ekslusif</div>
            </div>
            <h1 className="product-title">Rumah Modern Minimalis</h1>
            <div className="product-location">
                Jl. Melati No. 15, Jakarta Selatan
            </div>
            <div className="product-price">Rp 1,2 Miliar</div>

            <div className="product-meta">
                <div className="meta-item">
                    <div>
                        <div>Luas Tanah</div>
                        <strong>120 m²</strong>
                    </div>
                </div>
                <div className="meta-item">
                    <div>
                        <div>Luas Bangunan</div>
                        <strong>90 m²</strong>
                    </div>
                </div>
                <div className="meta-item">
                    <div>
                        <div>Kamar Tidur</div>
                        <strong>3</strong>
                    </div>
                </div>
                <div className="meta-item">
                    <div>
                        <div>Kamar Mandi</div>
                        <strong>2</strong>
                    </div>
                </div>
            </div>

            <div className="product-description">
                <p>
                    Rumah modern minimalis dengan desain elegan di lokasi
                    strategis Jakarta Selatan...
                </p>
            </div>

            <div className="features mt-4">
                <h3 className="text-lg font-semibold mb-2">
                    Fasilitas Properti:
                </h3>
                <ul className="pl-4 list-disc text-sm text-gray-700 space-y-1">
                    {features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>

            <a
                href={whatsappLink}
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Hubungi via WhatsApp
            </a>
        </div>
    );
}
