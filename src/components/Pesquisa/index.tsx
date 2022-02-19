import logo from '../../assets/logo.svg';
import { SearchInput } from '../SearchInput';

import { Container, Content } from './styles';

function Pesquisa() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Equatorial Energia" />

        <h1>Acompanhamento de Serviços</h1>

        <SearchInput
          name="numeroServico"
          placeholder="Digite o número do protocolo"
          buttonAction={() => alert('Você clicou no botão pesquisar')}
        />
      </Content>
    </Container>
  );
}

export { Pesquisa };
