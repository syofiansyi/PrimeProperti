import { Link, router } from '@inertiajs/react';
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import AppLayout from "@/Layouts/AppLayout";

export default function Index({ blogs }: any) {
  const [filterText, setFilterText] = useState('');

  // Filter berdasarkan judul
  const filteredBlogs = blogs.filter((blog: any) =>
    blog.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: 'Judul',
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: 'Aksi',
      cell: (row: any) => (
        <div className="flex gap-2">
          <Link href={route('blogs.show', row.id)} className="text-blue-600">
            Lihat
          </Link>
          <Link href={route('blogs.edit', row.id)} className="text-green-600">
            Edit
          </Link>
          <button
            onClick={() => router.delete(route('blogs.destroy', row.id))}
            className="text-red-600"
          >
            Hapus
          </button>
        </div>
      ),
    },
  ];

  return (
     <AppLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Blog</h1>
        <Link
          href={route('blogs.create')}
                        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          + Blog
        </Link>
      </div>

      <input
        type="text"
        placeholder="Cari judul..."
        className="border p-2 mb-4 w-full md:w-1/3 rounded"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <DataTable
        columns={columns}
        data={filteredBlogs}
        pagination
        highlightOnHover
        responsive
        striped
      />
    
    </AppLayout>
  );
}
