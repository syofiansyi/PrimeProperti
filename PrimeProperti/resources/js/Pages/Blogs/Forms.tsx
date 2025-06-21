import React, { useRef } from 'react';
import { useForm } from '@inertiajs/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogProps {
  blog?: {
    id: number;
    title: string;
    description: string;
    content: string;
  };
}

export default function Form({ blog }: BlogProps) {
  const quillRef = useRef<ReactQuill | null>(null);

  const { data, setData, post, put, processing, errors } = useForm<{
    title: string;
    description: string;
    content: string;
  }>({
    title: blog?.title || '',
    description: blog?.description || '',
    content: blog?.content || '',
  });

  // 👇 Custom Image Upload Handler
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/upload-image', {
          method: 'POST',
          body: formData,
        });

        const json = await res.json();

        const editor = quillRef.current?.getEditor();
        const range = editor?.getSelection();

        if (range) {
          editor?.insertEmbed(range.index, 'image', json.location);
        }
      } catch (error) {
        console.error('Image upload failed', error);
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    blog ? put(`/blogs/${blog.id}`) : post('/blogs');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{blog ? 'Edit' : 'Create'} Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.title && <div className="text-red-500">{errors.title}</div>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.description && <div className="text-red-500">{errors.description}</div>}
        </div>

        {/* Content */}
        <div>
          <label className="block font-medium mb-1">Content</label>
          <ReactQuill
            ref={quillRef}
            value={data.content}
            onChange={(val) => setData('content', val)}
            theme="snow"
            modules={modules}
            className="bg-white"
          />
          {errors.content && <div className="text-red-500">{errors.content}</div>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={processing}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {processing ? 'Saving...' : blog ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}
