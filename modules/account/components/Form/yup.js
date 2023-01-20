import * as yup from 'yup';

export const useYupValidations = () => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required(String('Please enter a name')),
    lastName: yup.string().required(String('Please enter a last name')),
    email: yup.string().email('Please enter a valid email').required(String('Please enter your email')),
    country: yup.string().required(String('Please select a country')),
  });

  return { validationSchema };
};
