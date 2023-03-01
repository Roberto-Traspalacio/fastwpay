import { useIntl } from 'react-intl';
import * as yup from 'yup';

export const useYupValidations = () => {
  const { messages } = useIntl();

  const validationSchema = yup.object().shape({
    reference: yup
      .string()
      .max(50, String(messages['validation.referenceLength']))
      .required(String(messages['validation.reference'])),
  });

  return { validationSchema };
};
