import styled from 'styled-components';
import {
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,
} from 'formik';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  color: ${p => p.theme.colors.error};
`;

export const Field = styled(FormikField)`
  padding: 4px;
`;
