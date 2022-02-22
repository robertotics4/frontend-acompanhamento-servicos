import React, { useCallback, useState } from 'react';
import Spinner from 'react-spinkit';
import { useLoading } from 'react-use-loading';
import Swal from 'sweetalert2';

import logo from '../../assets/logo.svg';
import { useMedidas } from '../../hooks/medidas';
import { SearchInput } from '../SearchInput';

import { Container, Content } from './styles';

function Pesquisa() {
  const [protocolo, setProtocolo] = useState('');

  const { buscarMedidas } = useMedidas();
  const [{ isLoading }, { start: startLoading, stop: stopLoading }] = useLoading();

  function handleChangeProtocolo(event: React.ChangeEvent<HTMLInputElement>) {
    setProtocolo(event.target.value);
  }

  const handlePesquisar = useCallback(async () => {
    try {
      startLoading('Buscando informações');

      await buscarMedidas(protocolo);
    } catch (err) {
      if (err instanceof Error) {
        Swal.fire('Ops!', err.message, 'warning');
      }
    } finally {
      stopLoading();
    }
  }, [buscarMedidas, protocolo, startLoading, stopLoading]);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Equatorial Energia" />

        {
          isLoading
            ? <Spinner name="ball-beat" color="#2E384D" style={{ marginTop: '32px' }} />
            : (
              <>
                <h1>Acompanhamento de Serviços</h1>

                <SearchInput
                  name="numeroServico"
                  placeholder="Digite o número do protocolo"
                  value={protocolo}
                  onChange={(event) => handleChangeProtocolo(event)}
                  buttonAction={handlePesquisar}
                />
              </>

            )
        }

      </Content>

    </Container>
  );
}

export { Pesquisa };
