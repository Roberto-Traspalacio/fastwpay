import * as yup from 'yup';
import { useIntl } from 'react-intl';

export const useValidacionesYup = () => {
  const { messages } = useIntl();
  const validationSchema = yup.object().shape({
    email: yup.string().email(messages['validation.validEmail']).required(String(messages['validation.email'])),
  });

  return { validationSchema };
};
