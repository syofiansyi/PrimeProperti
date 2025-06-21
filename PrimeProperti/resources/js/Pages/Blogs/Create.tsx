import { useForm, router } from '@inertiajs/react';
import QuillEditor from '@/Components/QuillEditor';
import { useState } from 'react';
import AppLayout from "@/Layouts/AppLayout";

export default function Create() {
  const { data, setData, post, processing, errors } = useForm<{
  title: string;
  description: string;
  content: string;
  thumbnail: File | null;
}>({
  title: '',
  description: '',
  content: '',
  thumbnail: null,
});

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('content', data.content);

    if (data.thumbnail) {
      formData.append('thumbnail', data.thumbnail);
    }

    router.post(route('blogs.store'), formData, {
      forceFormData: true,
    });
  };

  return (
      <AppLayout>
    <form onSubmit={submit} className="max-w-3xl mx-auto p-4 space-y-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold">Buat Blog Baru</h1>

      {/* Title */}
      <div>
        <label className="block font-semibold">Judul</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData('title', e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
        {errors.title && <div className="text-red-500">{errors.title}</div>}
      </div>

      {/* Description */}
      <div>
        <label className="block font-semibold">Deskripsi</label>
        <input
          type="text"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
        {errors.description && <div className="text-red-500">{errors.description}</div>}
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block font-semibold">Thumbnail</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setData('thumbnail', file);
              setPreviewUrl(URL.createObjectURL(file));
            }
          }}
          className="border w-full px-3 py-2 rounded"
        />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            className="mt-2 w-32 h-32 object-cover border rounded"
          />
        )}
        {errors.thumbnail && <div className="text-red-500">{errors.thumbnail}</div>}
      </div>

      {/* Content */}
      <div>
        <label className="block font-semibold">Konten</label>
        <QuillEditor
          value={data.content}
          onChange={(val) => setData('content', val)}
        />
        {errors.content && <div className="text-red-500">{errors.content}</div>}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={processing}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Simpan
        </button>
      </div>
    </form>
    </AppLayout>
  );
}
