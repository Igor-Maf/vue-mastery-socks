import axios from 'axios'
// import nprogress from 'nprogress'

export const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

/* apiClient.interceptors.request.use(config => {
   nprogress.start();

   return config;
});

apiClient.interceptors.response.use(response => {
    nprogress.done();

    return response;
}); */
