import { useForm, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ ratings }: { ratings: any[] }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [search, setSearch] = useState('');

  const { data, setData, reset, post, put } = useForm({
    id: null,
    nama: '',
    ulasan: '',
    total_rate: 1,
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    reset();
    setEditing(false);
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editing
      ? put(`/ratings/${data.id}`, { onSuccess: closeModal })
      : post('/ratings', { onSuccess: closeModal });
  };

  const editData = (rating: any) => {
    setData(rating);
    setEditing(true);
    setShowModal(true);
  };

  const deleteData = (id: number) => {
    if (confirm('Yakin ingin menghapus rating ini?')) {
      router.delete(`/ratings/${id}`);
    }
  };

  const filteredRatings = ratings.filter((rating) =>
    rating.nama.toLowerCase().includes(search.toLowerCase()) ||
    rating.ulasan.toLowerCase().includes(search.toLowerCase()) ||
    String(rating.total_rate).includes(search)
  );

  const columns = [
    { name: 'Nama', selector: (row: any) => row.nama, sortable: true },
    { name: 'Ulasan', selector: (row: any) => row.ulasan },
    { name: 'Rating', selector: (row: any) => row.total_rate },
    {
      name: 'Aksi',
      cell: (row: any) => (
        <div className="space-x-2">
          <button onClick={() => editData(row)} className="text-blue-600 hover:underline">
            Edit
          </button>
          <button onClick={() => deleteData(row.id)} className="text-red-600 hover:underline">
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
          <h1 className="text-2xl font-bold">Daftar Rating</h1>
          <button
            onClick={openModal}
                        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            + Rating
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Cari berdasarkan nama, ulasan, atau rating..."
            className="w-full max-w-md border rounded px-4 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={filteredRatings}
          pagination
          highlightOnHover
        />

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-md p-6 rounded shadow relative">
              <h2 className="text-lg font-bold mb-4">
                {editing ? 'Edit Rating' : 'Tambah Rating'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium">Nama</label>
                  <input
                    type="text"
                    value={data.nama}
                    onChange={(e) => setData('nama', e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium">Ulasan</label>
                  <textarea
                    value={data.ulasan}
                    onChange={(e) => setData('ulasan', e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium">Total Rate (1 - 5)</label>
                  <input
                    type="number"
                    value={data.total_rate}
                    min={1}
                    max={5}
                    onChange={(e) =>
                      setData('total_rate', parseInt(e.target.value) || 1)
                    }
                    className="w-full border p-2 rounded"
                    required
                  />
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
