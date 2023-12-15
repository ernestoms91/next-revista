import { S3Client, _Object, GetObjectCommand, S3ClientConfig, S3, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { getAWSURL, getBackendURL } from "./url";

const accessKeyCredentials:any = new Object();

async function fetchAccessKey(bucketName: string): Promise<{ aws_access_key_id: string, aws_secret_access_key: string }> {
    //Uses ENVIRONMENT hostname + backend HARDCODED PATH defined in here TO GRAB THE ACCESS KEY
    const url = new URL(`/aws/${bucketName.toLowerCase()}/access-key`, getBackendURL())
    const res = await fetch(url.href) //FETCHING access key from backend sever
    const accessKey: { aws_access_key_id: string, aws_secret_access_key: string }  = await res.json() //parsing backend response from json
    return accessKey
    
}  

async function setAccessKey(bucketName: string) {
    const credentials: any = await fetchAccessKey(bucketName) //fetching access key
    accessKeyCredentials[bucketName] = {  //and then simply cache it in memory inside the access keys dict
        accessKeyID: credentials.aws_access_key_id,
        secretAccessKey: credentials.aws_secret_access_key,
    }
}

async function getAccessKey (bucketName: string): Promise<{ accessKeyID: string, secretAccessKey: string}> {
    if (accessKeyCredentials[bucketName]) //If there is access key already in memory, use it then 
        return accessKeyCredentials[bucketName]

    await setAccessKey(bucketName) //if not then set it somehow
    return accessKeyCredentials[bucketName] //right now it should have got the key, then return it

}



async function makeS3Session(bucketName: string, forcePathStyle=false): Promise<S3Client> {

    const accessKey = await getAccessKey(bucketName) //get key somehow
    return new S3 ({ //Make S3 session 
        credentials: {
            accessKeyId: accessKey.accessKeyID,
            secretAccessKey: accessKey.secretAccessKey,
        },
        endpoint: await getAWSURL(), //get the aws server endpoint
        region: "us-east",
        forcePathStyle: process.env.NODE_ENV === "production"? false : true, //if in dev mode we should be using MINIO instead of AWS services, depending on that we force path style or not.
    });
}


export async function getBucketPresignedURL(bucketName: string, objectPath: string): Promise<string | null> {
    const client = await makeS3Session(bucketName);
    const command = new GetObjectCommand({Bucket: bucketName, Key: objectPath})
    const url = await getSignedUrl(client, command, { expiresIn: 15 * 60})
    return url || null
}

export async function putBucketPresignedURL(bucketName: string, objectPath: string, fileType: string): Promise<string | null> {
    const client = await makeS3Session(bucketName);
    const command = new PutObjectCommand({Bucket: bucketName, Key: objectPath, ContentType: fileType})
    const url = await getSignedUrl(client, command, { expiresIn: 15 * 60})
    return url || null
}



