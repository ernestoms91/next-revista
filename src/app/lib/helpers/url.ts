let awsURL: URL | null = null;
let backendURL: URL | null = null;

export function getBackendURL(): string {
    if (backendURL !== null)
        return backendURL.href

    backendURL = new URL("", "http://localhost:1111") //False URL just for instantiating and modifying the new object
    if (!process.env.BACKEND_HOST || !process.env.BACKEND_PORT) throw new Error("Could not connect to data server") 
    backendURL.host = process.env.BACKEND_HOST
    backendURL.port = process.env.BACKEND_PORT
    backendURL.protocol = process.env.BACKEND_HTTP_SCHEMA || "HTTP"
    
    return backendURL.href
}

export async function getAWSURL(): Promise<string> {
    if (awsURL !== null)
        return awsURL.href
    const tempURL = new URL("/aws/get-url", getBackendURL()).href 
    awsURL = new URL("", await (await fetch(tempURL)).json())
    return awsURL.href
}

