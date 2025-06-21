import { useForm, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ sosmeds }: { sosmeds: any[] }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [search, setSearch] = useState('');

  const { data, setData, reset, post, put } = useForm({
    id: null,
    username: '',
    medsos: '',
    icon: '',
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
      ? put(`/sosmeds/${data.id}`, { onSuccess: closeModal })
      : post('/sosmeds', { onSuccess: closeModal });
  };

  const editData = (sosmed: any) => {
    setData(sosmed);
    setEditing(true);
    setShowModal(true);
  };

  const deleteData = (id: number) => {
    if (confirm('Yakin ingin menghapus sosmed ini?')) {
      router.delete(`/sosmeds/${id}`);
    }
  };

  const filteredsosmeds = sosmeds.filter((sosmed) =>
    sosmed.username.toLowerCase().includes(search.toLowerCase()) ||
    sosmed.medsos.toLowerCase().includes(search.toLowerCase()) ||
    String(sosmed.icon).includes(search)
  );

  const columns = [
    { name: 'username', selector: (row: any) => row.username, sortable: true },
    { name: 'medsos', selector: (row: any) => row.medsos },
    { name: 'sosmed', selector: (row: any) => row.icon },
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
          <h1 className="text-2xl font-bold">Daftar sosmed</h1>
          <button
            onClick={openModal}
                        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            + sosmed
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Cari berdasarkan username, medsos, atau sosmed..."
            className="w-full max-w-md border rounded px-4 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={filteredsosmeds}
          pagination
          highlightOnHover
        />

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-md p-6 rounded shadow relative">
              <h2 className="text-lg font-bold mb-4">
                {editing ? 'Edit sosmed' : 'Tambah sosmed'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium">username</label>
                  <input
                    type="text"
                    value={data.username}
                    onChange={(e) => setData('username', e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium">medsos</label>
                  <textarea
                    value={data.medsos}
                    onChange={(e) => setData('medsos', e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium">Icon</label>
                  <input
                  
                    type="text"
                    value={data.icon}
                    onChange={(e) => setData('icon', e.target.value)}
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
