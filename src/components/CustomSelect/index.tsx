import { useField } from '@unform/core';
import {
  SelectHTMLAttributes,
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Content, Error } from './styles';

interface Option {
  value: string | number;
  description: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: Option[];
  containerStyle?: object;
}

function CustomSelect({
  name, options, containerStyle = {}, ...rest
}: SelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
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
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Content
        isFocused={isFocused}
        isErrored={!!error}
        style={containerStyle}
      >
        <select
          id={name}
          defaultValue={defaultValue}
          ref={selectRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        >
          <option value="" selected disabled>Selecione</option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.description}
            </option>
          ))}
        </select>

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#E83F5B" size={20} />
          </Error>
        )}
      </Content>
    </Container>
  );
}

export { CustomSelect };
