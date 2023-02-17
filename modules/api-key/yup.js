import * as yup from 'yup';

export const useYupValidations = () => {
  const validationSchema = yup.object().shape({
    reference: yup
      .string()
      .max(50, String('The reference must have a maximum of 50 characters'))
      .required(String('Please enter a reference')),
  });

  return { validationSchema };
};
