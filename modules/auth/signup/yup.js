import * as yup from 'yup';
import { regexPassword } from 'utils/regexPassword';
import ValidateInvalidPassword from '../components/validateInvalidPassword';

export const useValidacionesYup = () => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required(String('Please enter your name')),
    lastName: yup.string().required(String('Please enter your last name')),
    email: yup.string().email('Please enter a valid email').required(String('Please enter your email')),
    password: yup
      .string()
      .matches(regexPassword, ValidateInvalidPassword)
      .required(String('Please enter your password')),
    country: yup.string().required(String('Please select a country')),
    privacyPolicy: yup.bool().oneOf([true]).required(),
  });

  return { validationSchema };
};
