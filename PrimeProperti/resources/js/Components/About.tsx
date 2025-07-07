export default function AgencyExpertiseSection() {
    return (
        <section className="bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our Property Agency Expertise
                    </h2>
                    <p className="text-gray-600">
                        We offer expert advice, dedicated service and unique
                        insights into the Bali real estate market.{" "}
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://media.istockphoto.com/id/1019219898/photo/real-estate-or-property-investment-home-mortgage-loan-rate-saving-money-for-retirement.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZaOpdD6_mEBEqI4pU2py_7sSeLItzMi2Rz2XEFlSLbQ="
                            alt="Agency Room"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {[
                            {
                                title: "🏦 Investment Strategy",
                                text: "Get a customized investment plan with ROI projections and location insights.",
                            },
                            {
                                title: "📊 Market Analysis",
                                text: "We provide up-to-date research on Bali's ever-growing property market.",
                            },
                            {
                                title: "📈 ROI Analysis",
                                text: "Measure your profits based on historical data and demand trends.",
                            },
                            {
                                title: "🛋️ Advice for Architects & Designers",
                                text: "Make sure your villa is attractive to investors and guests with successful design tips.",
                            },
                        ].map((item, i) => (
                            <div key={i}>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center text-gray-800">
                        Our Agency Services
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "🏘️ Sales of villas and land",
                                text: "We help you find and buy property with full legal support.",
                            },
                            {
                                title: "🤝 Service support to clients",
                                text: "Ongoing consultation and assistance through the purchasing process.",
                            },
                            {
                                title: "🔧Villa Management",
                                text: "Property maintenance and guest-ready services after purchase.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
                            >
                                <h4 className="text-md font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { value: "450+", label: "Property Sold" },
                        { value: "1200+", label: "Client" },
                        { value: "16%", label: "Average ROI" },
                        { value: "91%", label: "Client Satisfaction" },
                    ].map((item, i) => (
                        <div key={i}>
                            <p className="text-3xl font-bold text-blue-600">
                                {item.value}
                            </p>
                            <p className="text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
