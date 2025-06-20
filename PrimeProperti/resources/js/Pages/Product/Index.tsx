import { useForm, router } from "@inertiajs/react";
import React, { FormEvent, useState } from "react";

interface Product {
  id: number;
  title: string;
  location: string[] | string;
  description: string;
  image?: string[] | string;
}

interface PageProps {
  products: Product[];
}

export default function Index({ products }: PageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  const { data, setData, post, reset } = useForm({
    id: null,
    title: "",
    location: [""],
    description: "",
    images: [] as File[],
  });

  const openModal = (product?: Product) => {
    if (product) {
      setEditing(true);
      setData({
        id: product.id,
        title: product.title,
        location: Array.isArray(product.location)
          ? product.location
          : [product.location],
        description: product.description,
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
      location: [""],
      description: "",
      images: [],
    });
    setEditing(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    data.location.forEach((loc, i) => {
      formData.append(`location[${i}]`, loc);
    });
    data.images.forEach((file, i) => {
      formData.append(`images[${i}]`, file);
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

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

      <button
        onClick={() => openModal()}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        + Add Product
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-4">
              {editing ? "Edit Product" : "Add Product"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                className="w-full border px-4 py-2"
              />

              {data.location.map((loc, index) => (
                <input
                  key={index}
                  type="text"
                  value={loc}
                  onChange={(e) => {
                    const newLocs = [...data.location];
                    newLocs[index] = e.target.value;
                    setData("location", newLocs);
                  }}
                  className="w-full border px-2 py-1 mb-2"
                  placeholder={`Location ${index + 1}`}
                />
              ))}

              <button
                type="button"
                onClick={() => setData("location", [...data.location, ""])}
                className="text-blue-600 text-sm"
              >
                + Add Location
              </button>

              <textarea
                placeholder="Description"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                className="w-full border px-4 py-2"
              ></textarea>

              <input
                type="file"
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    setData("images", Array.from(e.target.files));
                  }
                }}
              />

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

      {/* DataTable */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Images</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{product.title}</td>
                <td className="border px-4 py-2">
                  <ul className="list-disc list-inside">
                    {(Array.isArray(product.location)
                      ? product.location
                      : [product.location]
                    ).map((loc, i) => (
                      <li key={i}>{loc}</li>
                    ))}
                  </ul>
                </td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2">
                  <div className="flex gap-1 flex-wrap">
                    {Array.isArray(product.image) ? (
                      product.image.map((img, idx) => (
                        <img
                          key={idx}
                          src={`/storage/${img}`}
                          alt={`img-${idx}`}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ))
                    ) : product.image ? (
                      <img
                        src={`/storage/${product.image}`}
                        alt="img"
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      "-"
                    )}
                  </div>
                </td>
                <td className="border px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal(product)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
