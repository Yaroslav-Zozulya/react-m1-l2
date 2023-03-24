import { Formik } from 'formik';
import { paymentSchema } from 'components/validations';
import { Form } from 'components/Form/Form';
import FormField from 'components/FormField/FormField';

const initialValues = {
  cardHolder: '',
  cardNumber: '',
  CVV: '',
};

export default function VisaPaymentForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log('Visa Method');
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={paymentSchema}
      onSubmit={handleSubmit}
    >
      {/* Render prop */}
      {({ isSubmitting }) => {
        return (
          <Form>
            <FormField label="Card Holder" name="cardHolder" />
            <FormField label="Card Number" name="cardNumber" />
            <FormField label="CVV" name="CVV" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Trying to pay' : 'Pay'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
