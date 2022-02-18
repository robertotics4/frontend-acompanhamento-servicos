import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e7e5e5;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #444444;

    &::placeholder {
      color: #bfbfbf;
    }
  }
`;
