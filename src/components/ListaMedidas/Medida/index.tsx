import { useMemo } from 'react';
import { FiCheck, FiClock } from 'react-icons/fi';

import { Container, InfoContainer, InfoContent } from './styles';

interface MedidaProps {
  dataConclusao: Date;
  nomeMedida: string;
  descricaoMedida: string;
}

function Medida({ dataConclusao, nomeMedida, descricaoMedida }: MedidaProps) {
  const dataConclusaoFormatada = useMemo(() => new Intl.DateTimeFormat('pt-BR').format(new Date(dataConclusao)), [dataConclusao]);

  return (
    <Container>
      <span>
        {
          dataConclusao
            ? (
              <>
                <span>Concluído em</span>
                <strong>{dataConclusaoFormatada}</strong>
              </>
            )
            : 'Em andamento'
        }

      </span>

      <InfoContainer>
        {
          dataConclusao
            ? <FiCheck size={32} color="#4CD62B" />
            : <FiClock size={32} color="#5965E0" />
        }

        <InfoContent>
          <strong>{nomeMedida}</strong>
          <span>{descricaoMedida}</span>
        </InfoContent>
      </InfoContainer>

    </Container>
  );
}

export { Medida };
