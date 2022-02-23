import { FormHandles } from '@unform/core';
import { useCallback, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { useLoading } from 'react-use-loading';
import Swal from 'sweetalert2';
import { TailSpin } from 'react-loader-spinner';

import { FiSearch } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { useMedidas } from '../../hooks/medidas';
import { SearchInput } from '../SearchInput';
import { getValidationErrors } from '../../utils/getValidationErrors';

import {
  Container, Content, FormPesquisar, PesquisarButton,
} from './styles';

interface PesquisarFormData {
  protocolo: string;
}

function Pesquisa() {
  const { buscarMedidas } = useMedidas();
  const formRef = useRef<FormHandles>(null);
  const [{ isLoading }, { start: startLoading, stop: stopLoading }] = useLoading();

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleSubmit = useCallback(async (data: PesquisarFormData) => {
    try {
      startLoading('Buscando informações');

      await sleep(3000);

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        protocolo: Yup.string().required('O protocolo é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      await buscarMedidas(data.protocolo);

      formRef.current?.reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      if (err instanceof Error) {
        Swal.fire('Ops!', err.message, 'warning');
      }
    } finally {
      stopLoading();
    }
  }, [buscarMedidas, startLoading, stopLoading]);

  useEffect(() => () => {
    stopLoading();
  }, [stopLoading]);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Equatorial Energia" />

        <FormPesquisar
          onSubmit={handleSubmit}
          autoComplete="off"
          ref={formRef}
        >
          <h1>Acompanhamento de Serviços</h1>

          <SearchInput
            name="protocolo"
            placeholder="Digite o número do protocolo"
            autoComplete="off"
          />

          <PesquisarButton type="submit" isLoading>
            {
              isLoading
                ? <TailSpin ariaLabel="loading-indicator" width={30} height={30} color="#fFF" />
                : (
                  <>
                    Pesquisar protocolo
                    <FiSearch size={20} color="#fff" />
                  </>
                )
            }
          </PesquisarButton>
        </FormPesquisar>
      </Content>
    </Container>
  );
}

export { Pesquisa };
