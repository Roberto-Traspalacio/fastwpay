import * as yup from 'yup';
import { regexPassword } from 'utils/regexPassword';
import { useIntl } from 'react-intl';
import ValidateInvalidPassword from '../components/validateInvalidPassword';

export const useValidacionesYup = () => {
  const { messages } = useIntl();

  const validationSchema = yup.object().shape({
    firstName: yup.string().required(String(messages['validation.name'])),
    lastName: yup.string().required(String(messages['validation.lastName'])),
    email: yup.string().email(String(messages['validation.validEmail'])).required(String(messages['validation.email'])),
    password: yup
      .string()
      .matches(regexPassword, ValidateInvalidPassword)
      .required(String(messages['validation.password'])),
    country: yup.string().required(String(messages['validation.country'])),
    privacyPolicy: yup.bool().oneOf([true]).required(),
  });

  return { validationSchema };
};
