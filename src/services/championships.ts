import { api } from './api'

export function useChampionships() {
    const getAllChampionships = async () => {
        const response = await api.get('campeonatos')
        return response
    }

    const getChampionshipById = async (id: string) => {
        const response = await api.get(`campeonatos/${id}`)
        return response
    }

    const getTableByChampionshipId = async (id: string) => {
        const response = await api.get(`campeonatos/${id}/tabela`)
        return response
    }


    return {
        getAllChampionships,
        getChampionshipById,
        getTableByChampionshipId
    }
} 