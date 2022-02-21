import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { useMedidas } from '../../hooks/medidas';
import { apiConsultaProtocolo } from '../../services/apiConsultaProtocolo';
import { SearchInput } from '../SearchInput';

import { Container, Content } from './styles';

function Pesquisa() {
  const { buscarMedidas, medidas } = useMedidas();

  console.log(medidas);

  useEffect(() => {
    async function carregarMedidas() {
      await buscarMedidas('8024709119');
    }

    carregarMedidas();
  }, [buscarMedidas]);

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
