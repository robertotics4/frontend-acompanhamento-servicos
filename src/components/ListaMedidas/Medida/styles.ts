import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  padding: 32px;

  > span {
    font-size: 16px;
  }

  & + div {
    border-top: 1px solid var(--text-blue);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 36px;
  position: relative;

  svg {
    position: absolute;
    left: -16px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;

  strong {
    font-size: 16px;
  }

  span {
    font-size: 16px;
  }
`;
