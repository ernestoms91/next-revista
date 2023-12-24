import axios from "axios";


const revistaApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

// // Todo: configurar interceptores
// revistaApi.interceptors.request.use( (config : any)=> {

//     config.headers = {
//         ...config.headers,
//         'access-control-allow-credentials': 'true'
//     }

//     return config;
// })


export default revistaApi;