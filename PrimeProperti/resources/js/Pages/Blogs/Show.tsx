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
             [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:h-auto 
             [&_img]:max-w-full

             [&_.ql-align-center]:text-center
             [&_.ql-align-right]:text-right
             [&_.ql-align-justify]:text-justify
             [&_.ql-align-left]:text-left

             [&_.ql-align-center>img]:mx-auto
             [&_.ql-align-center>video]:mx-auto
             [&_.ql-align-center>iframe]:mx-auto"
  dangerouslySetInnerHTML={{ __html: blog.content }}
/>

      </div>
    </AppLayout>
  );
}
