import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

interface ButtonProps {
  isLoading?: boolean;
}

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 600px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormPesquisar = styled(Form)`
  margin-top: 32px;

  h1 {
      font-size: 24px;
      margin-bottom: 32px;
  }
`;

export const PesquisarButton = styled.button<ButtonProps>`
  height: 56px;
  width: 100%;
  border-radius: 10px;
  margin-top: 16px;
  background: var(--text);
  border: none;
  padding: 0 16px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.isLoading
    && css`
      margin: none;
    `}

  svg {
    margin-right: 16px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
