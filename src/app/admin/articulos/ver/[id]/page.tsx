import revistaApi from "@/app/lib/api/intranetApi"
import Image from "next/image";
import parse from 'html-react-parser';

export default async function VerPage({ params }: { params: { id: string } }) {
    const {data} = await revistaApi.get(`publications/${params.id}`)
    let culo = data;
    console.log(params.id) 
    console.log(culo)
    return (
    <div className="grid justify-normal">
        <div className="p-10">
        <h1>{data.title}</h1>
        {/* <Image src={data.image} alt={data.title} width={200} height={200} /> */}
      {  parse(data.content_html)}
      </div>
    </div>
    )
  }