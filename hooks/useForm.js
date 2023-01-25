import React from 'react';
import { setValueFormik } from 'utils/setValueFormik';

const useForm = (initialForm, formik) => {
  const [form, setForm] = React.useState(initialForm);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setValueFormik(formik, name, value);
  };

  return { form, setForm, handleChangeForm };
};

export default useForm;
