interface ProductInfoProps {
    whatsappLink: string;
}

export default function ProductInfo({ whatsappLink }: ProductInfoProps) {
  
    return (
        <div className="product-info">
            <div className="status-badge">
                <div className="badge-badge-item">Baru</div>
                <div className="badge-badge-item">Ekslusif</div>
            </div>
            <h1 className="product-title">Rumah Modern Minimalis</h1>
            <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-md">
                <div className="rounded-xl overflow-hidden shadow-inner h-80">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-0"
                    ></iframe>
                </div>
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
