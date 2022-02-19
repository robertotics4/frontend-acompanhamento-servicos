import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

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

  h1 {
    margin-top: 24px;
    font-size: 24px;
  }
`;
