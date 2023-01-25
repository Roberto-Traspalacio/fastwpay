import * as yup from 'yup';

export const useValidacionesYup = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required(String('Please enter your email')),
  });

  return { validationSchema };
};
