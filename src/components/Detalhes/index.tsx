import { useMemo } from 'react';
import { Container, Cabecalho, GrupoHorizontal } from './styles';

import logo from '../../assets/logo.svg';
import { ListaMedidas } from '../ListaMedidas';
import { useMedidas } from '../../hooks/medidas';

function Detalhes() {
  const { medidas, limparMedidas } = useMedidas();

  const informacoesSolicitacao = useMemo(() => {
    const { descricaoTipoNota } = medidas[0];
    const dataCriacao = new Intl.DateTimeFormat('pt-BR').format(new Date(medidas[0].dataCriacao));
    const dataPrevisao = medidas[0].dataConclusaoDesejada ? new Intl.DateTimeFormat('pt-BR').format(new Date(medidas[0].dataConclusaoDesejada)) : '-';
    const { contaContrato } = medidas[0];
    const { numeroServico: protocolo } = medidas[0];
    const { descricaoStatus } = medidas[0];

    return {
      descricaoTipoNota,
      dataCriacao,
      dataPrevisao,
      contaContrato,
      protocolo,
      descricaoStatus,
    };
  }, [medidas]);

  return (
    <Container>
      <Cabecalho>
        <img src={logo} alt="Equatorial Energia" />

        <h1>{informacoesSolicitacao.descricaoTipoNota}</h1>

        <GrupoHorizontal>
          <div>
            <span>Conta contrato</span>
            <h2>{informacoesSolicitacao.contaContrato}</h2>
          </div>
          <div>
            <span>Nº protocolo</span>
            <h2>{informacoesSolicitacao.protocolo}</h2>
          </div>
        </GrupoHorizontal>

        <GrupoHorizontal>
          <div>
            <span>Data da solicitação</span>
            <h2>{informacoesSolicitacao.dataCriacao}</h2>
          </div>
          <div>
            <span>Status / Previsão</span>
            <h2>
              {
                informacoesSolicitacao.descricaoStatus === 'Finalizada'
                  ? 'Finalizada'
                  : informacoesSolicitacao.dataPrevisao
              }
            </h2>
          </div>
        </GrupoHorizontal>
      </Cabecalho>

      <ListaMedidas />

      <button type="button" onClick={limparMedidas}>Voltar</button>
    </Container>
  );
}

export { Detalhes };
