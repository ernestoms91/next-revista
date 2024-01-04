import revistaApi from "@/app/lib/api/intranetApi";
import dynamic from "next/dynamic";
import { interview } from "@/app/lib/interfaces/interview";
import InterviewForm from "@/app/components/entrevistas/InterviewForm";

export default async function VerPage({ params }: { params: { id: string } }) {
  const { data } = await revistaApi.get(`interviews/${params.id}`);
  const interviewData = data as interview;
  const publicUrl = `${process.env.NEXT_PUBLIC_MINIO_URL}/media/${data.header_image_url}`;

  return (
    <div className="grid  place-items-center  w-full my-2">
      <h1 className="text-3xl font-bold">Editar artículo</h1>
      <InterviewForm interview={interviewData}/>
    </div>
  );
}
