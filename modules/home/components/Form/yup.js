import * as yup from 'yup';
import { useIntl } from 'react-intl';

export const useYupValidations = () => {
  const { messages } = useIntl();

  const validationSchema = yup.object().shape({
    name: yup.string().required(String(messages['validation.name'])),
    email: yup.string().email().required(String(messages['validation.email'])),
    message: yup.string().required(String(messages['validation.message'])),
  });

  return { validationSchema };
};
