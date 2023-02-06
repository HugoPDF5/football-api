import { championshipIdProps, championshipProps, roundProps, strikersProps } from "../types/championship";
import { api } from "./api";

export function useChampionships() {
  const baseUrl = 'campeonatos'
  const getAllChampionships = async (): Promise<championshipProps[] | []> => {
    const { data } = await api.get(baseUrl);
    return data.map((item: championshipProps) => {
      return {
        campeonato_id: item.campeonato_id,
        nome: item.nome,
        slug: item.slug,
        nome_popular: item.nome_popular,
        edicao_atual: item.edicao_atual,
        fase_atual: item.fase_atual,
        rodada_atual: item.rodada_atual,
        status: item.status,
        logo: item.logo,
        _link: item._link,
      };
    });
  };

  const getChampionshipById = async (id: string): Promise<championshipIdProps> => {
    const { data } = await api.get(`${baseUrl}/${id}`);
    return data.map((champ: championshipIdProps) => {
      return {
        tipo: champ.tipo,
        regiao: champ.regiao,
        fases: champ.fases,
        campeonato_id: champ.campeonato_id,
        nome: champ.nome,
        slug: champ.slug,
        nome_popular: champ.nome_popular,
        edicao_atual: champ.edicao_atual,
        fase_atual: champ.fase_atual,
        rodada_atual: champ.rodada_atual,
        status: champ.status,
        logo: champ.logo,
        _link: champ._link,
      };
    });
  };

  const getTableByChampionshipId = async (id: string) => {
    const response = await api.get(`${baseUrl}/${id}/tabela`);
    return response;
  };

  const getStrikersByChampionshipId = async (id: string): Promise<strikersProps> => {
    const { data } = await api.get(`${baseUrl}/${id}/artilharia`);
    return data.map((player: strikersProps) => {
      return {
        atleta: player.atleta,
        time: player.time,
        gols: player.gols,
      };
    });
  };

  const getRoundById = async (champId: number, roundId: number): Promise<roundProps> => {
    const { data } = await api.get(`${baseUrl}/${champId}/rodadas/${roundId}`)
      return {
        partidas: data.partidas,
        nome: data.nome
      }
  }

  return {
    getAllChampionships,
    getChampionshipById,
    getTableByChampionshipId,
    getStrikersByChampionshipId,
    getRoundById
  };
}
