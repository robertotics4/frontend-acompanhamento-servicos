import { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  buttonAction: () => void;
}

function SearchInput({ name, buttonAction, ...rest }: InputProps) {
  return (
    <Container>
      <input {...rest} />

      <button type="button">
        <FiSearch color="#363f5f" size={20} onClick={buttonAction} />
      </button>
    </Container>
  );
}

export { SearchInput };
