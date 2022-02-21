import { Container, Cabecalho, GrupoHorizontal } from './styles';

import logo from '../../assets/logo.svg';
import { ListaMedidas } from '../ListaMedidas';

function Detalhes() {
  return (
    <Container>
      <Cabecalho>
        <img src={logo} alt="Equatorial Energia" />

        <h1>Acesso à migrogeração distribuida</h1>

        <GrupoHorizontal>
          <div>
            <span>Data da solicitação</span>
            <h2>23/02/2022</h2>
          </div>

          <div>
            <span>Conta contrato</span>
            <h2>000000002828</h2>
          </div>
        </GrupoHorizontal>

        <GrupoHorizontal>
          <div>
            <span>Data prevista</span>
            <h2>23/02/2022</h2>
          </div>

          <div>
            <span>Nº protocolo</span>
            <h2>8024709119</h2>
          </div>
        </GrupoHorizontal>
      </Cabecalho>

      <ListaMedidas />
    </Container>
  );
}

export { Detalhes };
