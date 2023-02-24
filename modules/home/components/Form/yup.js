import * as yup from 'yup';

export const useYupValidations = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required(String('Please enter your name')),
    email: yup.string().email().required(String('Please enter your email')),
    message: yup.string().required(String('Please enter a message')),
  });

  return { validationSchema };
};
