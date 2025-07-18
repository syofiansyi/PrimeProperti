import AppLayout from "@/Layouts/AppLayout";

export default function Show({ blog }: any) {
  return (
    <AppLayout>
      <div className="p-4 max-w-4xl mx-auto">
        {/* Judul dan deskripsi */}
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-500 mb-4">{blog.description}</p>

        {/* Konten dari Quill, termasuk video, gambar, dll */}
        <div
          className="prose prose-img:rounded-md prose-img:shadow max-w-full border rounded-md p-4 
                     [&_video]:w-full [&_video]:h-auto 
                     [&_iframe]:w-full [&_iframe]:aspect-video 
                     [&_iframe]:h-auto [&_img]:max-w-full"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </AppLayout>
  );
}
