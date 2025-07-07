import { useForm, router } from "@inertiajs/react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import AppLayout from "@/Layouts/AppLayout";

interface Content {
    id: number;
    kategori: string;
    content: string[]; // array of link
}

export default function Index({ contents }: { contents: Content[] }) {
    const [showModal, setShowModal] = useState(false);
    const [editing, setEditing] = useState(false);
    const [search, setSearch] = useState("");

    const { data, setData, reset } = useForm({
        id: null as number | null,
        kategori: "",
        content: [] as string[],
    });

    const openModal = () => setShowModal(true);

    const closeModal = () => {
        reset();
        setEditing(false);
        setShowModal(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        data.content.forEach((c) => formData.append("content[]", c));
        formData.append("kategori", data.kategori);

        const url = editing ? `/content/${data.id}` : "/content";
        if (editing) formData.append("_method", "PUT");

        router.post(url, formData, {
            forceFormData: true,
            onSuccess: () => closeModal(),
        });
    };

    const editData = (content: Content) => {
        setData({
            id: content.id,
            kategori: content.kategori,
            content: content.content,
        });
        setEditing(true);
        setShowModal(true);
    };

    const deleteData = (id: number) => {
        if (confirm("Yakin ingin menghapus data ini?")) {
            router.delete(`/content/${id}`);
        }
    };

    const filteredContents = contents.filter(
        (c) =>
            c.kategori.toLowerCase().includes(search.toLowerCase()) ||
            c.content.some((link) =>
                link.toLowerCase().includes(search.toLowerCase())
            )
    );

    const columns = [
        {
            name: "Kategori",
            selector: (row: Content) => row.kategori,
            sortable: true,
        },
        {
            name: "Content",
            cell: (row: Content) => (
                <ul className="list-disc ml-4">
                    {row.content.map((link, i) => (
                        <li key={i}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            name: "Aksi",
            cell: (row: Content) => (
                <div className="space-x-2">
                    <button
                        onClick={() => editData(row)}
                        className="text-blue-600 hover:underline"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => deleteData(row.id)}
                        className="text-red-600 hover:underline"
                    >
                        Hapus
                    </button>
                </div>
            ),
        },
    ];

    return (
        <AppLayout>
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Daftar Content</h1>
                    <button
                        onClick={openModal}
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        + Tambah
                    </button>
                </div>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Cari kategori / link..."
                    className="w-full max-w-md border rounded px-4 py-2 mb-4"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Table */}
                <DataTable
                    columns={columns}
                    data={filteredContents}
                    pagination
                    highlightOnHover
                    keyField="id"
                />

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                        <div className="bg-white p-6 w-full max-w-md rounded shadow relative">
                            <h2 className="text-lg font-bold mb-4">
                                {editing ? "Edit Content" : "Tambah Content"}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block font-medium">
                                        Kategori
                                    </label>
                                    <select
                                        value={data.kategori}
                                        onChange={(e) =>
                                            setData("kategori", e.target.value)
                                        }
                                        className="w-full border p-2 rounded"
                                        required
                                    >
                                        <option value="">
                                            -- Pilih kategori --
                                        </option>
                                        <option value="header">Header</option>
                                        <option value="HighlightSection">
                                            HighlightSection
                                        </option>
                                        <option value="ProductHiglight">
                                            ProductHiglight
                                        </option>
                                        <option value="ArticlesSection">
                                            ArticlesSection
                                        </option>
                                        <option value="RatingsSection">
                                            RatingsSection
                                        </option>
                                        <option value="ProductGallery">
                                            ProductGallery
                                        </option>
                                        <option value="ProductInfo">
                                            ProductInfo
                                        </option>
                                        <option value="ProductTabs">
                                            ProductTabs
                                        </option>
                                        <option value="ProductTabs">
                                            ProductTabs
                                        </option>
                                        <option value="About">About</option>
                                        <option value="HighlighProduct">
                                            HighlighProduct
                                        </option>
                                        <option value="ProductSection">
                                            ProductSection
                                        </option>
                                        <option value="footer">Footer</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-medium">
                                        Content (link)
                                    </label>
                                    <div className="space-y-2">
                                        {data.content.map((link, index) => (
                                            <div
                                                key={index}
                                                className="flex gap-2"
                                            >
                                                <input
                                                    type="text"
                                                    value={link}
                                                    onChange={(e) => {
                                                        const newContent = [
                                                            ...data.content,
                                                        ];
                                                        newContent[index] =
                                                            e.target.value;
                                                        setData(
                                                            "content",
                                                            newContent
                                                        );
                                                    }}
                                                    className="w-full border p-2 rounded"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const newContent =
                                                            data.content.filter(
                                                                (_, i) =>
                                                                    i !== index
                                                            );
                                                        setData(
                                                            "content",
                                                            newContent
                                                        );
                                                    }}
                                                    className="bg-red-500 text-white px-2 rounded"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setData("content", [
                                                    ...data.content,
                                                    "",
                                                ])
                                            }
                                            className="bg-green-600 text-white px-2 py-1 rounded"
                                        >
                                            + Tambah Baris
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="px-4 py-2 bg-gray-300 rounded"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded"
                                    >
                                        {editing ? "Update" : "Simpan"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
