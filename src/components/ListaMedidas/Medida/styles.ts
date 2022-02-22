import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  padding: 32px;

  > span {
    text-align: right;
    font-size: 16px;
    min-width: 150px;
  }

  & + div {
    border-top: 1px solid var(--gray-line);
  }
`;

export const InfoConclusao = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 48px;
  position: relative;

  svg {
    position: absolute;
    left: -16px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 56px;

  strong {
    font-size: 16px;
  }

  span {
    font-size: 16px;
  }
`;
