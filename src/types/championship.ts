export interface championshipProps {
  campeonato_id: number;
  nome: string;
  slug: string;
  nome_popular: string;
  edicao_atual: {
    edicao_id: number;
    temporada: number;
    nome: string;
    nome_popular: string;
    slug: string;
  };
  fase_atual: {
    fase_id: number;
    nome: string;
    _link: string;
  };
  rodada_atual: string;
  status: string;
  logo: string;
  _link: string;
}

export interface championshipIdProps extends championshipProps {
  tipo: string;
  regiao: string;
  fases: [
    {
      fase_id: number;
      edicao: {
        edicao_id: number;
        temporada: number;
        nome: string;
        nome_popular: string;
        slug: string;
      };
      nome: string;
      slug: string;
      status: string;
      decisivo: string;
      eliminatorio: string;
      ida_e_volta: string;
      tipo: string;
      grupos: [];
      chaves: [];
      rodadas: [];
      proxima_fase: string;
      fase_anterior: string;
      _link: string;
    }
  ];
}

export interface strikersProps {
  atleta: {
    atleta_id: number;
    nome_popular: string;
    posicao: string[];
  };
  time: {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
  };
  gols: number;
}

export interface roundProps {
  nome: string;
  partidas: [
    {
      partida_id: number;
      campeonato: {
        campeonato_id: number;
      };
      time_mandante: {
        time_id: number;
        nome_popular: string;
        sigla: string;
        escudo: string;
      };
      time_visitante: {
        time_id: number;
        nome_popular: string;
        sigla: string;
        escudo: string;
      };
      placar_mandante: number;
      placar_visitante: number;
      data_realizacao: string;
      hora_realizacao: string;
      estadio: {
        nome_popular: string;
      };
    }
  ];
}
