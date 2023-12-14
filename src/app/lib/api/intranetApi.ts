import axios from "axios";


const revistaApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

// // Todo: configurar interceptores
// intranetApi.interceptors.request.use( config => {

//     config.headers = {
//         ...config.headers,
//         'x-token': localStorage.getItem('token') || ''
//     }

//     return config;
// })


export default revistaApi;