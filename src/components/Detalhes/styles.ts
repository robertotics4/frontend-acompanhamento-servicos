import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;

  img {
    width: 220px;
  }

  h1 {
    margin-top: 16px;
    font-size: 24px;
  }
`;

export const GrupoHorizontal = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 16px;

  div {
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
