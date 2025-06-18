interface ProductTabsProps {
  activeTab: string;
  openTab: (tab: string) => void;
}

export default function ProductTabs({ activeTab, openTab }: ProductTabsProps) {
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
            <h3 className="text-xl font-semibold mb-2">Deskripsi Lengkap</h3>
            <p className="mb-3">Rumah modern minimalis ini dibangun pada tahun 2020...</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>1 lantai dengan 3 kamar tidur</li>
              <li>2 kamar mandi</li>
              <li>Ruang tamu luas</li>
              <li>Ruang keluarga + dapur</li>
              <li>Area servis</li>
              <li>Carport</li>
              <li>Taman depan</li>
            </ul>
          </div>
        )}

        {activeTab === "fasilitas" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Fasilitas Sekitar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Sekolah Internasional (1 km)",
                "Rumah Sakit (2 km)",
                "Mall (1.5 km)",
                "Stasiun MRT (800 m)",
                "Restoran & Café (500 m)",
                "Tempat Parkir Umum (300 m)",
              ].map((item, idx) => (
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
            <h3 className="text-xl font-semibold mb-2">Opsi Pembayaran</h3>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                <strong>Tunai:</strong> Diskon 2%
              </li>
              <li>
                <strong>KPR Bank:</strong> Bunga kompetitif
              </li>
              <li>
                <strong>Cicilan Developer:</strong> DP 30%, cicilan 24 bulan
              </li>
              <li>
                <strong>Take Over KPR:</strong> Ambil alih KPR lama
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Hubungi kami via WhatsApp untuk info lebih lanjut.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
