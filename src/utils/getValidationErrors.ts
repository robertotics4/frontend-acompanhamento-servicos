import { ValidationError } from 'yup';

export interface Errors {
  [key: string]: string;
}

function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error: ValidationError) => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}

export { getValidationErrors };
