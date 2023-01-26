import * as yup from 'yup';

// User information
export const useYupValidations = () => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required(String('Please enter a name')),
    lastName: yup.string().required(String('Please enter a last name')),
    email: yup.string().email('Please enter a valid email').required(String('Please enter your email')),
    country: yup.string().required(String('Please select a country')),
  });

  return { validationSchema };
};

// Bank information
export const useYupValidationsBank = () => {
  const validationSchema = yup.object().shape({
    bankName: yup.string().required(String('Please select a bank')),
    accountNumber: yup.string().required(String('Please enter a account number')),
    beneficiary: yup.string().required(String('Please enter a beneficiary')),
  });

  return { validationSchema };
};
