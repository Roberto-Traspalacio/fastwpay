import * as yup from 'yup';
import { useIntl } from 'react-intl';

// User information
export const useYupValidations = () => {
  const { messages } = useIntl();

  const validationSchema = yup.object().shape({
    firstName: yup.string().required(String('Please enter a name')),
    lastName: yup.string().required(String('Please enter a last name')),
    email: yup.string().email('Please enter a valid email').required(String('Please enter your email')),
    country: yup.string().required(String(messages['validation.country'])),
  });

  return { validationSchema };
};

// Bank information
export const useYupValidationsBank = () => {
  const { messages } = useIntl();

  const validationSchema = yup.object().shape({
    country: yup.string().required(String(messages['validation.country'])),
    bankName: yup.string().required(String(messages['validation.bank'])),
    accountNumber: yup
      .number()
      .typeError(String(messages['validation.fieldOnlyNumbers']))
      .required(String(messages['validation.pleaseCompleteThisField'])),
    beneficiary: yup.string().required(String(messages['validation.beneficiary'])),
  });

  return { validationSchema };
};
