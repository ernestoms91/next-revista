import revistaApi from "@/app/lib/api/intranetApi";
import dynamic from "next/dynamic";
import ArticuloForm from "@/app/components/articulos/ArticuloForm";
import { article } from "@/app/lib/interfaces/article";

export default async function VerPage({ params }: { params: { id: string } }) {
  const { data } = await revistaApi.get(`standard_publications/${params.id}`);
  const articleData = data as article;
  const publicUrl = `${process.env.NEXT_PUBLIC_MINIO_URL}/media/${data.header_image_url}`;

  return (
    <div className="grid  place-items-center my-2">
      <h1 className="text-xl font-bold">Editar publicacion</h1>
      <ArticuloForm article={articleData}/>
    </div>
  );
}
