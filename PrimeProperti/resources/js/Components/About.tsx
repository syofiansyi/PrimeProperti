import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

interface Content {
    id: number;
    kategori: string;
    content: string[]; // array of link
}

type Medsos = {
    icon: string;
    medsos: string;
    username: string;
    id: number;
    kategori: string;
};

interface Props {
    Content: Content[];
    Medsos: Medsos[];
}

export default function AgencyExpertiseSection({ Content, Medsos }: Props) {
    const allCont = Content.filter((item) => item.kategori === "About");
    const ImgAbout = Medsos.filter((item) => item.kategori === "About");
    console.log(ImgAbout);
    return (
        <section className="bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {allCont[0].content[0]}
                    </h2>
                    <p className="text-gray-600">{allCont[0].content[1]}</p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={`/storage/${ImgAbout[0].icon[0]}`}
                            alt="Agency Room"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {[
                            {
                                title: `🏦 ${allCont[0].content[2]}`,
                                text: `${allCont[0].content[3]}`,
                            },
                            {
                                title: `📊 ${allCont[0].content[4]}`,
                                text: `${allCont[0].content[5]}`,
                            },
                            {
                                title: `📈 ${allCont[0].content[6]}`,
                                text: `${allCont[0].content[7]}`,
                            },
                            {
                                title: `🛋️ ${allCont[0].content[8]}`,
                                text: `${allCont[0].content[9]}`,
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
                        {allCont[0].content[10]}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: `🏘️ ${allCont[0].content[12]}`,
                                text: `${allCont[0].content[11]}`,
                            },
                            {
                                title: `🤝 ${allCont[0].content[14]}`,
                                text: `${allCont[0].content[13]}`,
                            },
                            {
                                title: `🔧 ${allCont[0].content[16]}`,
                                text: `${allCont[0].content[15]}`,
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
                        {
                            value: ` ${allCont[0].content[17]}+`,
                            label: `${allCont[0].content[18]}`,
                        },
                        {
                            value: ` ${allCont[0].content[19]}+`,
                            label: `${allCont[0].content[20]}`,
                        },
                        {
                            value: ` ${allCont[0].content[21]}+`,
                            label: `${allCont[0].content[22]}`,
                        },
                        {
                            value: ` ${allCont[0].content[23]}+`,
                            label: `${allCont[0].content[24]}`,
                        },
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
