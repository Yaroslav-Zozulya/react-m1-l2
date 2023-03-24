import { Wrapper, ErrorMessage, Field } from './FormField.styled';

const FormField = ({ label, name }) => {
  return (
    <Wrapper>
      {label && <span>{label}</span>}
      <Field name={name} />
      <ErrorMessage name={name} component="span" />
    </Wrapper>
  );
};

export default FormField;
