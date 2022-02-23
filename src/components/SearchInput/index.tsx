import { useField } from '@unform/core';
import {
  InputHTMLAttributes, useCallback, useEffect, useRef, useState,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Content, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
}

function SearchInput({ name, containerStyle = {}, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Content isFocused={isFocused} isErrored={!!error} style={containerStyle}>

        <input
          id={name}
          defaultValue={defaultValue}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#E83F5B" size={20} />
          </Error>
        )}
      </Content>
    </Container>
  );
}

export { SearchInput };
