import {
  S3Client,
  _Object,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

import revistaApi from "../api/intranetApi";

export const uploadImage = async (imageUrl: File) => {
  try {
    const { data } = await revistaApi.get(`aws/media/access-key`);
    const { aws_access_key_id, aws_secret_access_key } = data;
    console.log(aws_access_key_id)

    const s3Client = new S3Client({
      region: "us-east",
      credentials: {
        accessKeyId: aws_access_key_id,
        secretAccessKey: aws_secret_access_key,
      },
      endpoint: process.env.NEXT_PUBLIC_MINIO_URL,
      forcePathStyle: true, // Habilitar este flag para trabajar con MinIO
    });

    const bucketName = "media"; // Reemplaza con el nombre de tu bucket
    const objectKey = "probando.jpg"; // Reemplaza con el nombre que desees para tu imagen
    const filePath = imageUrl; // Reemplaza con la ruta de tu imagen local

    const uploadParams = {
      Bucket: bucketName,
      Key: objectKey,
      Body: imageUrl,
      
      // Body: require("fs").createReadStream(filePath),
      ContentType: "image/jpeg", // Cambia el tipo de contenido según tu imagen
    };

    const uploadCommand = new PutObjectCommand(uploadParams);

    // s3Client
    //   .send(uploadCommand)
    //   .then((data) => {
    //     return console.log("Imagen subida exitosamente:", data);
    //   })
    //   .catch((error) => {
    //     return console.error("Error al subir la imagen:", error);
    //   });
    const datos = await s3Client.send(uploadCommand);
    console.log("Imagen subida exitosamente:", datos);
  } catch (error) {
    console.log(error);
  }
};
