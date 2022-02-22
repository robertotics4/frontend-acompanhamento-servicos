import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import { apiConsultaProtocolo } from '../services/apiConsultaProtocolo';

interface Medida {
  numeroNota: string;
  numeroServico: string;
  descricaoTipoNota: string;
  descricaoCodeNota: string;
  dataCriacao: Date;
  dataConclusaoDesejada: Date;
  contaContrato: string;
  numeroSolicitacaoAtc: string;
  descricaoStatus: string;
  nomeMedida: string;
  descricaoMedida: string;
  numSequenciaMedida: number;
  dataFimPlanejadoMedida: Date;
  dataConclusao: Date;
}

interface MedidasContextData {
  buscarMedidas(protocolo: string): Promise<void>;
  limparMedidas(): void;
  medidas: Medida[];
}

const MedidasContext = createContext<MedidasContextData>({} as MedidasContextData);

const MedidasProvider: React.FC = ({ children }) => {
  const [medidas, setMedidas] = useState<Medida[]>([]);

  const buscarMedidas = useCallback(async (protocolo: string) => {
    const response = await apiConsultaProtocolo.get(`/medidas/${protocolo}`);

    setMedidas(response.data);
  }, []);

  const limparMedidas = useCallback(() => {
    setMedidas([]);
  }, []);

  return (
    <MedidasContext.Provider value={{ buscarMedidas, limparMedidas, medidas }}>
      {children}
    </MedidasContext.Provider>
  );
};

function useMedidas(): MedidasContextData {
  const context = useContext(MedidasContext);

  if (!context) {
    throw new Error(
      'useMedidas must be used within a MedidasProvider',
    );
  }

  return context;
}

export { MedidasProvider, useMedidas };
