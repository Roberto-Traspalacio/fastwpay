import * as yup from 'yup';

export const useYupValidations = () => {
  const validationSchema = yup.object().shape({
    reference: yup.string().required(String('Please enter a reference')),
  });

  return { validationSchema };
};
