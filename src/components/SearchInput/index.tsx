import { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function SearchInput({ name, ...rest }: InputProps) {
  return (
    <Container>
      <input {...rest} />

      <FiSearch color="#363f5f" size={20} />
    </Container>
  );
}

export { SearchInput };
