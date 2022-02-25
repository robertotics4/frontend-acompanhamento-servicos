import { useMemo } from 'react';
import { FiCheck } from 'react-icons/fi';
import { BsClockHistory } from 'react-icons/bs';

import {
  Container, InfoConclusao, InfoContainer, InfoContent,
} from './styles';
import { Medida as IMedida } from '../../../hooks/medidas';

interface MedidaProps {
  medida: IMedida;
}

function Medida({ medida }: MedidaProps) {
  const dataConclusaoFormatada = useMemo(() => new Intl.DateTimeFormat('pt-BR').format(new Date(medida.dataConclusao)), [medida.dataConclusao]);
  const dataPrevisaoFormatada = useMemo(() => new Intl.DateTimeFormat('pt-BR').format(new Date(medida.dataFimPlanejadoMedida)), [medida.dataFimPlanejadoMedida]);

  return (
    <Container>
      {
          medida.dataConclusao
            ? (
              <InfoConclusao>
                <span>Concluído em</span>
                <strong>{dataConclusaoFormatada}</strong>
              </InfoConclusao>
            )
            : (
              <InfoConclusao>
                <span>Previsão</span>
                <strong>{dataPrevisaoFormatada}</strong>
              </InfoConclusao>
            )
        }

      <InfoContainer>
        {
          medida.dataConclusao
            ? <FiCheck size={32} color="#4CD62B" />
            : <BsClockHistory size={32} color="#2E384D" />
        }

        <InfoContent>
          <strong>{medida.nomeMedida}</strong>
          <span>{medida.descricaoMedida}</span>
        </InfoContent>
      </InfoContainer>
    </Container>
  );
}

export { Medida };
