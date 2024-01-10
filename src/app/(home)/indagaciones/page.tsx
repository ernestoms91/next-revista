import ListIndagaciones from "@/app/components/indagaciones/ListIndagaciones";
import revistaApi from "@/app/lib/api/intranetApi";
import Image from "next/image";

export default async function IndagacionesPage() {
  const { data } = await revistaApi.get(
    `standard_publications?published_at=false&section=INDAGACIONES`
  );
  const indagaciones = data.items;
  return (
    <div className="px-10 md:py-10 bg-gris-claro3 md:bg-white">

      <ListIndagaciones indagaciones={indagaciones} />
    </div>
  );
}
