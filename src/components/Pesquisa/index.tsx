import React, { useCallback, useState } from 'react';
import logo from '../../assets/logo.svg';
import { useMedidas } from '../../hooks/medidas';
import { SearchInput } from '../SearchInput';

import { Container, Content } from './styles';

function Pesquisa() {
  const [protocolo, setProtocolo] = useState('');

  const { buscarMedidas } = useMedidas();

  function handleChangeProtocolo(event: React.ChangeEvent<HTMLInputElement>) {
    setProtocolo(event.target.value);
  }

  const handlePesquisar = useCallback(async () => {
    await buscarMedidas(protocolo);
  }, [buscarMedidas, protocolo]);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Equatorial Energia" />

        <h1>Acompanhamento de Serviços</h1>

        <SearchInput
          name="numeroServico"
          placeholder="Digite o número do protocolo"
          value={protocolo}
          onChange={(event) => handleChangeProtocolo(event)}
          buttonAction={handlePesquisar}
        />
      </Content>
    </Container>
  );
}

export { Pesquisa };
