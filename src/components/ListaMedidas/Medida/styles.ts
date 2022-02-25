import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  & + div {
    opacity: 70%;
  }

  padding: 16px;

  > span {
    text-align: right;
    font-size: 16px;
    min-width: 150px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  & + div {
    border-top: 1px solid var(--gray);
  }
`;

export const InfoConclusao = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 48px;
  position: relative;

  @media (max-width: 768px) {
    margin-left: 16px;
  }

  svg {
    position: absolute;
    left: -16px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 56px;

  @media (max-width: 768px) {
    margin-left: 32px;
  }

  strong {
    font-size: 16px;
  }

  span {
    font-size: 16px;
  }
`;
