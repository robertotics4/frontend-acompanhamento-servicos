import { useMemo } from 'react';
import { Container, Cabecalho, GrupoHorizontal } from './styles';

import logo from '../../assets/logo.svg';
import { ListaMedidas } from '../ListaMedidas';
import { useMedidas } from '../../hooks/medidas';

function Detalhes() {
  const { medidas, limparMedidas } = useMedidas();

  const informacoesSolicitacao = useMemo(() => {
    const dataCriacao = new Intl.DateTimeFormat('pt-BR').format(new Date(medidas[0].dataCriacao));
    const dataPrevisao = medidas[0].dataConclusaoDesejada ? new Intl.DateTimeFormat('pt-BR').format(new Date(medidas[0].dataConclusaoDesejada)) : '-';
    const { contaContrato } = medidas[0];
    const { numeroServico: protocolo } = medidas[0];

    return {
      dataCriacao,
      dataPrevisao,
      contaContrato,
      protocolo,
    };
  }, [medidas]);

  return (
    <Container>
      <Cabecalho>
        <img src={logo} alt="Equatorial Energia" />

        <h1>Acesso à migrogeração distribuida</h1>

        <GrupoHorizontal>
          <div>
            <span>Data da solicitação</span>
            <h2>{informacoesSolicitacao.dataCriacao}</h2>
          </div>

          <div>
            <span>Conta contrato</span>
            <h2>{informacoesSolicitacao.contaContrato}</h2>
          </div>
        </GrupoHorizontal>

        <GrupoHorizontal>
          <div>
            <span>Previsão</span>
            <h2>{informacoesSolicitacao.dataPrevisao}</h2>
          </div>

          <div>
            <span>Nº protocolo</span>
            <h2>{informacoesSolicitacao.protocolo}</h2>
          </div>
        </GrupoHorizontal>
      </Cabecalho>

      <ListaMedidas />

      <button type="button" onClick={limparMedidas}>Voltar</button>
    </Container>
  );
}

export { Detalhes };
