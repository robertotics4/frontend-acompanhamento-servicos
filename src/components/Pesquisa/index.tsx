import { FormHandles } from '@unform/core';
import { useCallback, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { useLoading } from 'react-use-loading';
import Swal from 'sweetalert2';
import { TailSpin } from 'react-loader-spinner';

import { FiSearch } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { useMedidas } from '../../hooks/medidas';
import { getValidationErrors } from '../../utils/getValidationErrors';

import {
  Container, Content, FormPesquisar, PesquisarButton,
} from './styles';
import { CustomInput } from '../CustomInput';
import { CustomSelect } from '../CustomSelect';

interface PesquisarFormData {
  empresaOperadora: number;
  contaContrato: string;
  protocolo: string;
}

function Pesquisa() {
  const { buscarMedidas } = useMedidas();
  const formRef = useRef<FormHandles>(null);
  const [{ isLoading }, { start: startLoading, stop: stopLoading }] = useLoading();

  const handleSubmit = useCallback(async (data: PesquisarFormData) => {
    try {
      startLoading('Buscando informações');

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        empresaOperadora: Yup.number()
          .typeError('A empresa é obrigatória')
          .required('A empresa é obrigatória'),
        contaContrato: Yup.string().required('A conta contrato é obrigatória')
          .matches(/^[0-9.]+$/, 'Digite de 1 a 12 números')
          .max(12, 'Limite de tamanho é 12'),
        protocolo: Yup.number()
          .test('É válido?', 'O número de protocolo é inválido', (value) => {
            if (value && value > 0) {
              return true;
            }

            return false;
          })
          .required('O protocolo é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      await buscarMedidas({
        empresaOperadora: data.empresaOperadora,
        contaContrato: data.contaContrato,
        protocolo: data.protocolo,
      });

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

          <CustomSelect
            name="empresaOperadora"
            autoComplete="off"
            options={[
              { description: 'Maranhão', value: 98 },
              { description: 'Pará', value: 95 },
            ]}
          />

          <CustomInput
            name="contaContrato"
            placeholder="Digite o número da conta contrato"
            type="text"
            autoComplete="off"
          />

          <CustomInput
            name="protocolo"
            placeholder="Digite o número do protocolo"
            type="number"
            autoComplete="off"
          />

          <PesquisarButton type="submit" isLoading>
            {
              isLoading
                ? <TailSpin ariaLabel="loading-indicator" width={30} height={30} color="#fFF" />
                : (
                  <>
                    <FiSearch size={20} color="#fff" />
                    Pesquisar protocolo
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
