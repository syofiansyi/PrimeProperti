interface DetailProd {
    id: number;
    title: string;
    location: string;
    price: number;
    image: any;
    features: string;
    badge: string;
    popular: boolean;
    date: string;
    tipe: string;

    maps?: any;
    properti_detail?: any;
    properti_pembayaran?: any;
    properti_fasilitas?: any;
    deskripsi?: string;
}

interface ProductTabsProps {
    activeTab: string;
    openTab: (tab: string) => void;
    DetailProd: DetailProd[];
}

export default function ProductTabs({
    activeTab,
    openTab,
    DetailProd,
}: ProductTabsProps) {
    const PropertiDetail = JSON.parse(DetailProd[0].properti_detail);
    const PropertiFasilitas = JSON.parse(DetailProd[0].properti_fasilitas);
    const PropertiPembayaran = JSON.parse(DetailProd[0].properti_pembayaran);
    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
            {/* Tabs Header */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button
                    onClick={() => openTab("detail")}
                    className={`px-4 py-2 rounded-full font-medium transition ${
                        activeTab === "detail"
                            ? "bg-[#8B5E4D] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    Property Details
                </button>
                <button
                    onClick={() => openTab("fasilitas")}
                    className={`px-4 py-2 rounded-full font-medium transition ${
                        activeTab === "fasilitas"
                            ? "bg-[#8B5E4D] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    Surrounding Facilities
                </button>
                <button
                    onClick={() => openTab("pembayaran")}
                    className={`px-4 py-2 rounded-full font-medium transition ${
                        activeTab === "pembayaran"
                            ? "bg-[#8B5E4D] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  Payment method
                </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-4 text-gray-800">
                {activeTab === "detail" && (
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                           Complete Description
                        </h3>
                        <p className="mb-3">{DetailProd[0].deskripsi}</p>

                        {PropertiDetail.map((item: string, index: number) => (
                            <ul
                                key={index}
                                className="list-disc pl-5 space-y-1"
                            >
                                <li key={index}>{item}</li>
                            </ul>
                        ))}
                    </div>
                )}

                {activeTab === "fasilitas" && (
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Surrounding Facilities
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[PropertiFasilitas].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-100 text-gray-700 rounded-lg p-3 text-center shadow-sm"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "pembayaran" && (
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Payment Method
                        </h3>

                        {PropertiPembayaran.map(
                            (item: string, index: number) => (
                                <ul
                                    key={index}
                                    className="list-disc pl-5 space-y-1"
                                >
                                    <li key={index}>{item}</li>
                                </ul>
                            )
                        )}

                        <p className="text-sm text-gray-600">
                            <br></br>
                           Contact us via WhatsApp for more info.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
