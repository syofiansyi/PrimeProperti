interface ProductTabsProps {
    activeTab: string;
    PropertiDetail: string;
    PropertiPembayaran: string;
    PropertiFasilitas: string;
    DeskripsiProd: string
    openTab: (tab: string) => void;
}

export default function ProductTabs({
    activeTab,
    openTab,
    PropertiDetail,
    PropertiPembayaran,
    PropertiFasilitas,
    DeskripsiProd,
}: ProductTabsProps) {
    console.log(PropertiFasilitas);
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
                    Detail Properti
                </button>
                <button
                    onClick={() => openTab("fasilitas")}
                    className={`px-4 py-2 rounded-full font-medium transition ${
                        activeTab === "fasilitas"
                            ? "bg-[#8B5E4D] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    Fasilitas Sekitar
                </button>
                <button
                    onClick={() => openTab("pembayaran")}
                    className={`px-4 py-2 rounded-full font-medium transition ${
                        activeTab === "pembayaran"
                            ? "bg-[#8B5E4D] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    Cara Pembayaran
                </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-4 text-gray-800">
                {activeTab === "detail" && (
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Deskripsi Lengkap
                        </h3>
                        <p className="mb-3">
                          {DeskripsiProd}
                        </p>

                        {PropertiDetail.map((i, index) => (
                            <ul className="list-disc pl-5 space-y-1">
                                <li key={index} value={i}>
                                    {i}
                                </li>
                            </ul>
                        ))}
                    </div>
                )}

                {activeTab === "fasilitas" && (
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Fasilitas Sekitar
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {PropertiFasilitas.map((item, idx) => (
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
                            Opsi Pembayaran
                        </h3>

                        {PropertiPembayaran.map((i, index) => (
                            <ul className="list-disc pl-5 space-y-1">
                                <li key={index} value={i}>
                                    {i}
                                </li>
                            </ul>
                        ))}
                        <br></br>
                        <p className="text-sm text-gray-600">
                            Hubungi kami via WhatsApp untuk info lebih lanjut.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
