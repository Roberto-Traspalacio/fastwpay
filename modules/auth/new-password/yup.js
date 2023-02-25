import * as yup from 'yup';
import { regexPassword } from 'utils/regexPassword';
import ValidateInvalidPassword from '../components/validateInvalidPassword';
import { useIntl } from 'react-intl';

export const useValidacionesYup = () => {
  const { messages } = useIntl();

  const validationSchema = yup.object({
    newPassword: yup
      .string()
      .matches(regexPassword, ValidateInvalidPassword)
      .required(String(messages['validation.newPassword'])),
    repeatNewPassword: yup
      .string()
      .required(String(messages['validation.repeatPassword']))
      .oneOf([yup.ref('newPassword')], String(messages['validation.passwordsNotMatch'])),
  });

  return { validationSchema };
};
