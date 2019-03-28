import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
