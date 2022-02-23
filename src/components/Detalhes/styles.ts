import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: fit-content;
    margin: 16px 0 32px 0;
    padding: 16px;
    border-radius: 8px;
    border: 0;
    background: var(--text);
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;
  margin-top: 16px;

  img {
    width: 220px;
  }

  h1 {
    margin-top: 32px;
    font-size: 24px;
  }
`;

export const GrupoHorizontal = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 32px;

  div {
    & + div {
      margin-left: 32px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 16px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;
