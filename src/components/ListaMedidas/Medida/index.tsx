import { FiCheckCircle, FiClock } from 'react-icons/fi';

import { Container, InfoContainer, InfoContent } from './styles';

function Medida() {
  return (
    <Container>
      <span>Em andamento</span>

      <InfoContainer>
        <FiCheckCircle size={32} color="#363F5F" />

        <InfoContent>
          <strong>Cliente retornou com pedido de vistoria</strong>
          <span>Confirmado recebimento do parecer aprov</span>
        </InfoContent>
      </InfoContainer>

    </Container>
  );
}

export { Medida };
