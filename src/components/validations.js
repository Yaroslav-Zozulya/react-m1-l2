import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The field should have digits only');
});

export const paymentSchema = Yup.object({
  cardHolder: Yup.string().required(),
  cardNumber: Yup.string().numeric().length(1).required(),
  CVV: Yup.string().numeric().length(1).required(),
});
