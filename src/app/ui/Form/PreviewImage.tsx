import Image from "next/image";
import { useState } from "react";

// interface IPreviewImage{
//     file:  MyFormValues
// }

const PreviewImage = ({ file }:any) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div className="rounded-lg w-full">
  {   preview ? <Image src={preview} alt="preview" width={348} height={348} /> : "Loading..."}
    </div>
  );
};

export default PreviewImage;
