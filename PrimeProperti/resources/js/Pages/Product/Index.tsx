import { useForm, router } from "@inertiajs/react";
import React, { FormEvent, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

interface Product {
    id: number | null;
    title: string;
    location: string;
    maps: string;
    deskripsi: string;
    popular: any;
    features: string[] | string;
    badge: string[] | string;
    price: number;
    image?: string[] | string;
    properti_detail: string[] | string;
    properti_pembayaran: string[] | string;
    properti_fasilitas: string[] | string;
    tipe: string;
    satuan: string;
    currency: string;
}

interface PageProps {
    products: Product[];
}

export default function Index({ products }: PageProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] =
        useState<Product[]>(products);
    const TipeProperti = [
        "Apartment",
        "Warehouse",
        "Hotel",
        "Boarding House",
        "House",
        "Shophouse",
        "Land",
        "Villa",
    ];

    const { data, setData, post, reset } = useForm({
        id: null as number | null, // ✅ tambahkan ini
        title: "",
        location: "",
        maps: "",
        deskripsi: "",
        popular: false as boolean,
        features: [""],
        badge: [""],
        properti_detail: [""],
        properti_pembayaran: [""],
        properti_fasilitas: [""],
        tipe: "",
        price: "",
        satuan: "",
        currency: "",
        images: [] as File[],
    });

    useEffect(() => {
        const keyword = search.toLowerCase();
        const filtered = products.filter(
            (product) =>
                product.title.toLowerCase().includes(keyword) ||
                product.location.toLowerCase().includes(keyword) ||
                String(product.price).includes(keyword)
        );
        setFilteredProducts(filtered);
    }, [search, products]);

    const openModal = (product?: Product) => {
        if (product) {
            setEditing(true);
            setData({
                id: product.id,
                title: product.title,
                location: product.location,
                maps: product.maps,
                deskripsi: product.deskripsi,
                popular: product.popular === "1",
                features: Array.isArray(product.features)
                    ? product.features
                    : [product.features],
                badge: Array.isArray(product.badge)
                    ? product.badge
                    : [product.badge],
                properti_detail: Array.isArray(product.properti_detail)
                    ? product.properti_detail
                    : [product.properti_detail],
                properti_pembayaran: Array.isArray(product.properti_pembayaran)
                    ? product.properti_pembayaran
                    : [product.properti_pembayaran],
                properti_fasilitas: Array.isArray(product.properti_fasilitas)
                    ? product.properti_fasilitas
                    : [product.properti_fasilitas],
                tipe: product.tipe,
                satuan: product.satuan,
                currency: product.currency,
                price: String(product.price), // ✅ ubah jadi string
                images: [],
            });
        } else {
            setEditing(false);
            resetForm();
        }
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setData({
            id: null,
            title: "",
            location: "",
            maps: "",
            deskripsi: "",
            popular: false, // ✅ diperbaiki
            features: [""],
            badge: [""],
            properti_detail: [""],
            properti_pembayaran: [""],
            properti_fasilitas: [""],
            tipe: "",
            satuan: "",
            currency: "",
            price: "",
            images: [],
        });
        setEditing(false);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("location", data.location);
        formData.append("maps", data.maps);
        formData.append("deskripsi", data.deskripsi);
        formData.append("popular", data.popular ? "1" : "0");

        formData.append("price", data.price);
        formData.append("tipe", data.tipe);
        formData.append("satuan", data.satuan);
        formData.append("currency", data.currency);

        data.features.forEach((fet, i) => {
            formData.append(`features[${i}]`, fet);
        });
        data.badge.forEach((bad, i) => {
            formData.append(`badge[${i}]`, bad);
        });
        data.images.forEach((file, i) => {
            formData.append(`images[${i}]`, file);
        });
        data.properti_detail.forEach((prodet, i) => {
            formData.append(`properti_detail[${i}]`, prodet);
        });
        data.properti_pembayaran.forEach((propem, i) => {
            formData.append(`properti_pembayaran[${i}]`, propem);
        });
        data.properti_fasilitas.forEach((profas, i) => {
            formData.append(`properti_fasilitas[${i}]`, profas);
        });

        const url = editing ? `/products/${data.id}` : "/products";
        if (editing) formData.append("_method", "PUT");

        router.post(url, formData, {
            onSuccess: () => {
                closeModal();
            },
        });
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this product?")) {
            router.delete(`/products/${id}`);
        }
    };

    const columns = [
        {
            name: "Nomor",
            cell: (_: Product, index: number) => <span>{index + 1}</span>,
            width: "8%",
        },
        {
            name: "Title",
            selector: (row: Product) => row.title,
            sortable: true,
        },
        {
            name: "Location",
            selector: (row: Product) => row.location,
            sortable: true,
        },
        {
            name: "Deskripsi",
            selector: (row: Product) => row.deskripsi,
            sortable: true,
        },
        {
            name: "Features",
            cell: (row: Product) => (
                <ul className="list-disc pl-4">
                    {(Array.isArray(row.features)
                        ? row.features
                        : [row.features]
                    ).map((fet, i) => (
                        <li key={i}>{fet}</li>
                    ))}
                </ul>
            ),
        },
        {
            name: "Badge",
            cell: (row: Product) => (
                <ul className="list-disc pl-4">
                    {(Array.isArray(row.badge) ? row.badge : [row.badge]).map(
                        (bad, i) => (
                            <li key={i}>{bad}</li>
                        )
                    )}
                </ul>
            ),
        },
        {
            name: "Properti Detail",
            cell: (row: Product) => (
                <ul className="list-disc pl-4">
                    {(Array.isArray(row.properti_detail)
                        ? row.properti_detail
                        : [row.properti_detail]
                    ).map((prodet, i) => (
                        <li key={i}>{prodet}</li>
                    ))}
                </ul>
            ),
        },
        {
            name: "Properti Pembayaran",
            cell: (row: Product) => (
                <ul className="list-disc pl-4">
                    {(Array.isArray(row.properti_pembayaran)
                        ? row.properti_pembayaran
                        : [row.properti_pembayaran]
                    ).map((propem, i) => (
                        <li key={i}>{propem}</li>
                    ))}
                </ul>
            ),
        },
        {
            name: "Properti Fasilitas",
            cell: (row: Product) => (
                <ul className="list-disc pl-4">
                    {(Array.isArray(row.properti_fasilitas)
                        ? row.properti_fasilitas
                        : [row.properti_fasilitas]
                    ).map((profas, i) => (
                        <li key={i}>{profas}</li>
                    ))}
                </ul>
            ),
        },
        {
            name: "Tipe",
            selector: (row: Product) => row.tipe,
            sortable: true,
        },
        {
            name: "Price",
            selector: (row: Product) => row.price,
            sortable: true,
        },
        {
            name: "Images",
            cell: (row: Product) => (
                <div className="flex gap-1 flex-wrap">
                    {Array.isArray(row.image) ? (
                        row.image.map((img, i) => (
                            <img
                                key={i}
                                src={`/storage/${img}`}
                                alt={`img-${i}`}
                                className="w-10 h-10 object-cover rounded"
                            />
                        ))
                    ) : row.image ? (
                        <img
                            src={`/storage/${row.image}`}
                            alt="img"
                            className="w-10 h-10 object-cover rounded"
                        />
                    ) : (
                        "-"
                    )}
                </div>
            ),
        },
        {
            name: "Actions",
            cell: (row: Product) => (
                <div className="flex gap-2">
                    <button
                        onClick={() => openModal(row)}
                        className="text-blue-600 hover:underline"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => row.id !== null && handleDelete(row.id)}
                        className="text-red-600 hover:underline"
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <AppLayout>
                <div className="">
                    <div>
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold">Product</h1>

                            <button
                                onClick={() => openModal()}
                                className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
                            >
                                + Product
                            </button>
                        </div>
                        {/* Modal */}
                        {modalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white w-full max-w-lg max-h-[80vh] overflow-y-auto rounded shadow p-6">
                                    <h2 className="text-lg font-semibold mb-4">
                                        {editing
                                            ? "Edit Product"
                                            : "Add Product"}
                                    </h2>

                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <label className="font-semibold block mb-2">
                                                Title
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            className="w-full border px-4 py-2"
                                        />
                                        <div>
                                            <label className="font-semibold block mb-2">
                                                Lokasi
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Location"
                                            value={data.location}
                                            onChange={(e) =>
                                                setData(
                                                    "location",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border px-4 py-2"
                                        />
                                        <div>
                                            <label className="font-semibold block mb-2">
                                                Maps
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Maps"
                                            value={data.maps}
                                            onChange={(e) =>
                                                setData("maps", e.target.value)
                                            }
                                            className="w-full border px-4 py-2"
                                        />
                                        <div>
                                            <label className="font-semibold block mb-2">
                                                Deskripsi
                                            </label>
                                        </div>
                                        <textarea
                                            placeholder="Deskripsi"
                                            value={data.deskripsi}
                                            onChange={(e) =>
                                                setData(
                                                    "deskripsi",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border px-4 py-2"
                                        />

                                        {/* Features */}
                                        <div className="mb-4">
                                            <label className="font-semibold block mb-2">
                                                Features
                                            </label>
                                            {data.features.map((fet, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 mb-2"
                                                >
                                                    <input
                                                        type="text"
                                                        value={fet}
                                                        onChange={(e) => {
                                                            const newFets = [
                                                                ...data.features,
                                                            ];
                                                            newFets[index] =
                                                                e.target.value;
                                                            setData(
                                                                "features",
                                                                newFets
                                                            );
                                                        }}
                                                        className="w-full border px-2 py-1"
                                                        placeholder={`Feature ${
                                                            index + 1
                                                        }`}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setData(
                                                                "features",
                                                                data.features.filter(
                                                                    (_, i) =>
                                                                        i !==
                                                                        index
                                                                )
                                                            )
                                                        }
                                                        className="text-red-500 text-sm px-2"
                                                        title="Hapus fitur"
                                                    >
                                                        🗑
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setData("features", [
                                                        ...data.features,
                                                        "",
                                                    ])
                                                }
                                                className="text-blue-600 text-sm"
                                            >
                                                + Add Feature
                                            </button>
                                        </div>

                                        {/* Badge */}
                                        <div className="mb-4">
                                            <label className="font-semibold block mb-2">
                                                Badge
                                            </label>
                                            {data.badge.map((bad, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 mb-2"
                                                >
                                                    <input
                                                        type="text"
                                                        value={bad}
                                                        onChange={(e) => {
                                                            const newBads = [
                                                                ...data.badge,
                                                            ];
                                                            newBads[index] =
                                                                e.target.value;
                                                            setData(
                                                                "badge",
                                                                newBads
                                                            );
                                                        }}
                                                        className="w-full border px-2 py-1"
                                                        placeholder={`Badge ${
                                                            index + 1
                                                        }`}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setData(
                                                                "badge",
                                                                data.badge.filter(
                                                                    (_, i) =>
                                                                        i !==
                                                                        index
                                                                )
                                                            )
                                                        }
                                                        className="text-red-500 text-sm px-2"
                                                        title="Hapus badge"
                                                    >
                                                        🗑
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setData("badge", [
                                                        ...data.badge,
                                                        "",
                                                    ])
                                                }
                                                className="text-blue-600 text-sm"
                                            >
                                                + Add Badge
                                            </button>
                                        </div>

                                        {/* Properti Detail */}
                                        <div className="mb-4">
                                            <label className="font-semibold block mb-2">
                                                Detail Properti
                                            </label>
                                            {data.properti_detail.map(
                                                (prodet, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-2 mb-2"
                                                    >
                                                        <input
                                                            type="text"
                                                            value={prodet}
                                                            onChange={(e) => {
                                                                const newProdet =
                                                                    [
                                                                        ...data.properti_detail,
                                                                    ];
                                                                newProdet[
                                                                    index
                                                                ] =
                                                                    e.target.value;
                                                                setData(
                                                                    "properti_detail",
                                                                    newProdet
                                                                );
                                                            }}
                                                            className="w-full border px-2 py-1"
                                                            placeholder={`Properti Detail ${
                                                                index + 1
                                                            }`}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setData(
                                                                    "properti_detail",
                                                                    data.properti_detail.filter(
                                                                        (
                                                                            _,
                                                                            i
                                                                        ) =>
                                                                            i !==
                                                                            index
                                                                    )
                                                                )
                                                            }
                                                            className="text-red-500 text-sm px-2"
                                                            title="Hapus properti detail"
                                                        >
                                                            🗑
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setData("properti_detail", [
                                                        ...data.properti_detail,
                                                        "",
                                                    ])
                                                }
                                                className="text-blue-600 text-sm"
                                            >
                                                + Add Properti Detail
                                            </button>
                                        </div>

                                        {/* Properti Pembayaran */}
                                        <div className="mb-4">
                                            <label className="font-semibold block mb-2">
                                                Pembayaran
                                            </label>
                                            {data.properti_pembayaran.map(
                                                (propem, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-2 mb-2"
                                                    >
                                                        <input
                                                            type="text"
                                                            value={propem}
                                                            onChange={(e) => {
                                                                const newPropem =
                                                                    [
                                                                        ...data.properti_pembayaran,
                                                                    ];
                                                                newPropem[
                                                                    index
                                                                ] =
                                                                    e.target.value;
                                                                setData(
                                                                    "properti_pembayaran",
                                                                    newPropem
                                                                );
                                                            }}
                                                            className="w-full border px-2 py-1"
                                                            placeholder={`Properti Pembayaran ${
                                                                index + 1
                                                            }`}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setData(
                                                                    "properti_pembayaran",
                                                                    data.properti_pembayaran.filter(
                                                                        (
                                                                            _,
                                                                            i
                                                                        ) =>
                                                                            i !==
                                                                            index
                                                                    )
                                                                )
                                                            }
                                                            className="text-red-500 text-sm px-2"
                                                            title="Hapus properti pembayaran"
                                                        >
                                                            🗑
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setData(
                                                        "properti_pembayaran",
                                                        [
                                                            ...data.properti_pembayaran,
                                                            "",
                                                        ]
                                                    )
                                                }
                                                className="text-blue-600 text-sm"
                                            >
                                                + Add Properti Pembayaran
                                            </button>
                                        </div>

                                        {/* Properti Fasilitas */}
                                        <div className="mb-4">
                                            <label className="font-semibold block mb-2">
                                                Fasilitas
                                            </label>
                                            {data.properti_fasilitas.map(
                                                (profas, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-2 mb-2"
                                                    >
                                                        <input
                                                            type="text"
                                                            value={profas}
                                                            onChange={(e) => {
                                                                const newProfas =
                                                                    [
                                                                        ...data.properti_fasilitas,
                                                                    ];
                                                                newProfas[
                                                                    index
                                                                ] =
                                                                    e.target.value;
                                                                setData(
                                                                    "properti_fasilitas",
                                                                    newProfas
                                                                );
                                                            }}
                                                            className="w-full border px-2 py-1"
                                                            placeholder={`Properti Fasilitas ${
                                                                index + 1
                                                            }`}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setData(
                                                                    "properti_fasilitas",
                                                                    data.properti_fasilitas.filter(
                                                                        (
                                                                            _,
                                                                            i
                                                                        ) =>
                                                                            i !==
                                                                            index
                                                                    )
                                                                )
                                                            }
                                                            className="text-red-500 text-sm px-2"
                                                            title="Hapus properti fasilitas"
                                                        >
                                                            🗑
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setData(
                                                        "properti_fasilitas",
                                                        [
                                                            ...data.properti_fasilitas,
                                                            "",
                                                        ]
                                                    )
                                                }
                                                className="text-blue-600 text-sm"
                                            >
                                                + Add Properti Fasilitas
                                            </button>
                                        </div>

                                        {/* Harga */}
                                        <div className="mb-4">
                                            <label className="font-semibold block mb-2">
                                                Harga
                                            </label>
                                            <input
                                                type="number"
                                                value={data.price}
                                                onChange={(e) =>
                                                    setData(
                                                        "price",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border px-4 py-2"
                                                placeholder="Masukkan harga"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-semibold block mb-2">
                                                Satuan
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Satuan"
                                            value={data.satuan}
                                            onChange={(e) =>
                                                setData(
                                                    "satuan",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border px-4 py-2"
                                        />
                                       <div>
                                            <label className="font-semibold block mb-2">
                                                Currency
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Currency"
                                            value={data.currency}
                                            onChange={(e) =>
                                                setData(
                                                    "currency",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border px-4 py-2"
                                        />
                                        <div>
                                            <label className="font-semibold block mb-2">
                                                Tipe Properti
                                            </label>
                                        </div>
                                        <select
                                            value={data.tipe}
                                            onChange={(e) =>
                                                setData("tipe", e.target.value)
                                            }
                                            className="w-full border px-4 py-2"
                                        >
                                            <option value="">Pilih Tipe</option>
                                            {TipeProperti.map((item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                        <div>
                                            <label className="font-semibold block mb-2">
                                                Gambar
                                            </label>
                                        </div>
                                        <input
                                            type="file"
                                            multiple
                                            onChange={(e) => {
                                                if (e.target.files) {
                                                    setData(
                                                        "images",
                                                        Array.from(
                                                            e.target.files
                                                        )
                                                    );
                                                }
                                            }}
                                        />
                                        <div>
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    checked={data.popular}
                                                    onChange={(e) =>
                                                        setData(
                                                            "popular",
                                                            e.target.checked
                                                        )
                                                    }
                                                    className="w-4 h-4"
                                                />
                                                <span className="font-semibold block mb-2">
                                                    Popular
                                                </span>
                                            </label>
                                        </div>

                                        <div className="flex gap-2 justify-end mt-4">
                                            <button
                                                type="button"
                                                onClick={closeModal}
                                                className="text-gray-600 px-4 py-2 border rounded"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="bg-blue-600 text-white px-4 py-2 rounded"
                                            >
                                                {editing ? "Update" : "Create"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* Search & Table */}
                        <div className="mt-4 overflow-x-auto">
                            <input
                                type="text"
                                placeholder="Search by title, location, or price..."
                                className="mb-4 border px-4 py-2 w-full max-w-md rounded"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <div className="">
                                <DataTable
                                    columns={columns}
                                    data={filteredProducts}
                                    pagination
                                    highlightOnHover
                                    responsive
                                    dense
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
