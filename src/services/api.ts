import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {
        Authorization: 'Bearer ' + import.meta.env.VITE_API_URL_KEY
    }
})