import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {
        Authorization: 'Bearer' + ' test_bc6004dabffa88907d58f254113e4c'
    }
})