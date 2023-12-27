import {
  S3Client,
  _Object,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const uploadImage = async (imageFile: File) => {

  const nombre = imageFile.name
  try {
    // const { data } = await revistaApi.get(`aws/media/access-key`);
    // const { aws_access_key_id, aws_secret_access_key } = data;


    const s3Client = new S3Client({
      region: "us-east",
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_MINIO_USER as string,
        secretAccessKey: process.env.NEXT_PUBLIC_MINIO_PASS as string,
      },
      endpoint: process.env.NEXT_PUBLIC_MINIO_URL,
      forcePathStyle: true, // Habilitar este flag para trabajar con MinIO
    });

    
    const bucketName = "media"; // Reemplaza con el nombre de tu bucket
    const objectKey = `${nombre}`; // Reemplaza con el nombre que desees para tu imagen
    const filePath = imageFile; // Reemplaza con la ruta de tu imagen local

    const uploadParams = {
      Bucket: bucketName,
      Key: objectKey,
      Body: imageFile, 
      ContentType: "image/jpeg", // Cambia el tipo de contenido según tu imagen
    };

    const uploadCommand = new PutObjectCommand(uploadParams);
    const datos = await s3Client.send(uploadCommand);
    // const presignedUrl = await getSignedUrl(s3Client, new GetObjectCommand({
    //   Bucket: bucketName,
    //   Key: objectKey,
    // }));

     // Construye la URL pública directamente
     const publicUrl = `${process.env.NEXT_PUBLIC_MINIO_URL}/${bucketName}/${nombre}`;
    
    console.log("Imagen subida exitosamente:", publicUrl);
    return publicUrl
  } catch (error) {
    console.log(error);
  }
};

