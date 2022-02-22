import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

interface ContentProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 16px;
  }
`;

export const Content = styled.div<ContentProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  margin-top: 16px;

  border: 2px solid var(--gray);

  display: flex;
  align-items: center;
  position: relative;

  ${(props) => props.isFocused
    && css`
      color: var(--blue);
      border-color: var(--blue);
    `}

  ${(props) => props.isErrored
    && css`
      border-color: var(--red);
    `}

  input {
    flex: 1;
    background: transparent;
    font-size: 16px;
    border: 0;
    color: var(--text);

    &::placeholder {
      color: var(--gray);
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    text-align: center;
    background: var(--red);
    color: #fff;

    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
