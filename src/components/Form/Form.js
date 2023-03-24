import { Form as FormikForm } from 'formik';

import styled from 'styled-components';

export const Form = styled(FormikForm)`
  width: 100%;
  padding: 16px;
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid tomato;
  border-radius: 5px;
`;
