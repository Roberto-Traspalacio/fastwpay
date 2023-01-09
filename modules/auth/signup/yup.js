import * as yup from 'yup';

export const useValidacionesYup = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required(String('Please enter your name')),
    lastName: yup.string().required(String('Please enter your last name')),
    email: yup.string().email('Please enter a valid email').required(String('Please enter your email')),
    password: yup.string().required(String('Please enter your password')),
    country: yup.string().required(String('Please select a country')),
  });

  return { validationSchema };
};
