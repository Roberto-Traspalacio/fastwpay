import * as yup from 'yup';
import { regexPassword } from 'utils/regexPassword';
import ValidateInvalidPassword from './validateInvalidPassword';

export const useValidacionesYup = () => {
  const validationSchema = yup.object({
    newPassword: yup
      .string()
      .matches(regexPassword, ValidateInvalidPassword)
      .required(String('Please enter your new password')),
    repeatNewPassword: yup
      .string()
      .required(String('Please repeat your new password'))
      .oneOf([yup.ref('newPassword')], 'Passwords do not match'),
  });

  return { validationSchema };
};
