import { useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import AppLayout from '@/Layouts/AppLayout';

interface Sosmed {
  id: number;
  username: string;
  medsos: string;
  kategori: string;
  icon: string[];
}

export default function Index({ sosmeds }: { sosmeds: Sosmed[] }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [search, setSearch] = useState('');
  const [previewIcon, setPreviewIcon] = useState<string[]>([]);

  const { data, setData, reset } = useForm({
    id: null as number | null,
    username: '',
    medsos: '',
    kategori: '',
    icon: [] as File[],
  });

  const openModal = () => setShowModal(true);

  const closeModal = () => {
    reset();
    setEditing(false);
    setShowModal(false);
    setPreviewIcon([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('medsos', data.medsos);
    formData.append('kategori', data.kategori);
    data.icon.forEach((file, i) => {
      formData.append(`icon[${i}]`, file);
    });

    const url = editing ? `/sosmeds/${data.id}` : '/sosmeds';
    if (editing) formData.append('_method', 'PUT');

    router.post(url, formData, {
      forceFormData: true,
      onSuccess: () => {
        closeModal();
      },
    });
  };

  const editData = (sosmed: Sosmed) => {
    setData({
      id: sosmed.id,
      username: sosmed.username,
      medsos: sosmed.medsos,
      kategori: sosmed.kategori,
      icon: [],
    });
    setPreviewIcon(sosmed.icon ?? []);
    setEditing(true);
    setShowModal(true);
  };

  const deleteData = (id: number) => {
    if (confirm('Yakin ingin menghapus icons ini?')) {
      router.delete(`/sosmeds/${id}`);
    }
  };

  const filteredSosmeds = sosmeds.filter((sosmed) =>
    sosmed.username.toLowerCase().includes(search.toLowerCase()) ||
    sosmed.medsos.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: 'Name',
      selector: (row: Sosmed) => row.username,
      sortable: true,
    },
    {
      name: 'Link',
      selector: (row: Sosmed) => row.medsos,
    },
    
    {
      name: 'Icon',
      cell: (row: Sosmed) => (
        <div className="flex gap-2">
          {row.icon?.map((iconPath, i) => (
            <img
              key={i}
              src={`/storage/${iconPath}`}
              className="w-8 h-8 object-cover rounded"
              alt="icon"
            />
          ))}
        </div>
      ),
    },
     {
      name: 'Kategori',
      selector: (row: Sosmed) => row.kategori,
    },
    {
      name: 'Aksi',
      cell: (row: Sosmed) => (
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
          <h1 className="text-2xl font-bold">Daftar Icons</h1>
          <button
            onClick={openModal}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            + Icons
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Cari name/ icons..."
          className="w-full max-w-md border rounded px-4 py-2 mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Table */}
        <DataTable
          columns={columns}
          data={filteredSosmeds}
          pagination
          highlightOnHover
          keyField="id"
        />

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 w-full max-w-md rounded shadow relative">
              <h2 className="text-lg font-bold mb-4">
                {editing ? 'Edit Sosmed' : 'Tambah Sosmed'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium">Nama</label>
                  <input
                    type="text"
                    value={data.username}
                    onChange={(e) => setData('username', e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium">Link</label>
                  <input
                    type="text"
                    value={data.medsos}
                    onChange={(e) => setData('medsos', e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                 <div>
                
                </div>
                <div>
                  <label className="block font-medium">Icon</label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => {
                      if (e.target.files) {
                        setData('icon', Array.from(e.target.files));
                      }
                    }}
                  />
                  {editing && previewIcon.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {previewIcon.map((icon, i) => (
                        <img
                          key={i}
                          src={`/storage/${icon}`}
                          className="w-10 h-10 object-cover rounded"
                          alt={`preview-${i}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
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
                                             <option value="Contact">Contact</option>
                                            <option value="Header">Header</option>
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
                                            <option value="Footer">Footer</option>
                                        </select>
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
                    {editing ? 'Update' : 'Simpan'}
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
