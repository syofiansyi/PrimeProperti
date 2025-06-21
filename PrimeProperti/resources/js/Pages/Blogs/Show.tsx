import AppLayout from "@/Layouts/AppLayout";

export default function Show({ blog }: any) {

  return (
      <AppLayout>
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-4">{blog.description}</p>

      <div className="prose max-w-full border rounded-md p-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
    </AppLayout>
  );
}
