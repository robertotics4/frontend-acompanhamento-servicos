import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e7e5e5;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));

  padding: 16px;
  width: 100%;
  margin-top: 24px;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    border: 0;
    background: transparent;
    font-size: 16px;

    &::placeholder {
      color: #bfbfbf;
    }
  }

  button {
    border: none;
    background: transparent;

    svg {
      margin-left: 8px;
    }
  }
`;
