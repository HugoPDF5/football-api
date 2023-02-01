import { api } from './api'

export function reqs() {
    const getChampionship = async () => {
        const response = await api.get('campeonatos')
        return response
    }

    const getChampionshipById = async (id: string) => {
        const response = await api.get(`campeonatos/${id}`)
        return response
    }


    return {
        getChampionship,
        getChampionshipById
    }
} 