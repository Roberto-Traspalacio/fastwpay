export const setValueFormik = (formik, name, value) => {
  formik.values[name] = value;
  if (formik.errors[name]) {
    formik.errors[name] = null;
  }
};
