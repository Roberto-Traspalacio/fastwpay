import IntlMessages from 'utils/IntlMessages';
import Button from 'components/Button';
import { useFormik } from 'formik';
import { useYupValidations } from './yup';
import useForm from 'hooks/useForm';
import { useState } from 'react';
import { Loader } from 'components';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export default function Form({ children, setMessageSended }) {
  const [loading, setLoading] = useState(false);
  const { validationSchema } = useYupValidations();
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: () => onSubmit(),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialState, formik);

  async function onSubmit() {
    setLoading(true);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form).toString(),
    })
      .then(() => {
        setMessageSended(true);
        setTimeout(() => {
          setMessageSended(false);
        }, 2500);
      })
      .catch((error) => alert(error));
    setLoading(false);
    e.preventDefault();
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="grid-main bg-background-2 pt-14 gap-x-3 full-bleed-section lg:pb-20 xl:items-start"
      onSubmit={formik.handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="mb-6 font-bold text-center typo-heading-1 col-span-full text-text-1 md:mb-16">
        <IntlMessages id="landing.contact.title" />
      </div>
      <div className="flex flex-col col-span-full sm:col-span-6 sm:col-start-2 xl:col-start-7 xl:col-span-5 lg:col-start-3 lg:col-span-4">
        <label htmlFor="name" className="mb-2 typo-body-2 col-span-full text-text-1">
          <IntlMessages id="common.name" />
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className={`col-span-full rounded-md py-4 px-5 typo-body-1 ${
            formik?.errors['name'] && 'input-error mb-[4px] sm:mb-[4px] xl:mb-[5px]'
          }`}
          onChange={handleChangeForm}
          value={formik?.values.name}
        />
        {formik?.errors['name'] && (
          <p className="input-error-message col-span-full typo-body-2">{formik?.errors['name']}</p>
        )}
      </div>
      <div className="flex flex-col col-span-full sm:col-span-6 sm:col-start-2 xl:col-start-7 xl:col-span-5 lg:col-start-3 lg:col-span-4">
        <label htmlFor="email" className="mb-2 mt-[18px] typo-body-2 text-text-1">
          <IntlMessages id="common.email" />
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`col-span-full rounded-md py-4 px-5 typo-body-1 ${
            formik?.errors['email'] && 'input-error mb-[4px] sm:mb-[4px] xl:mb-[5px]'
          }`}
          value={formik?.values.email}
          onChange={handleChangeForm}
        />
        {formik?.errors['email'] && (
          <p className="input-error-message col-span-full typo-body-2">{formik?.errors['email']}</p>
        )}
      </div>
      <div className="flex flex-col col-span-full sm:col-span-6 sm:col-start-2 xl:col-start-7 xl:col-span-5 lg:col-start-3 lg:col-span-4">
        <label htmlFor="message" className="mb-2 mt-[18px] typo-body-2 text-text-1">
          <IntlMessages id="common.message" />
        </label>
        <textarea
          id="message"
          name="message"
          type="text"
          className={`px-5 py-4 rounded-md col-span-full typo-body-1 h-[100px] sm:h-[170px] ${
            formik?.errors['message'] && 'input-error mb-[4px] sm:mb-[4px] xl:mb-[5px]'
          }`}
          value={formik?.values.message}
          onChange={handleChangeForm}
        />
        {formik?.errors['message'] && (
          <p className="input-error-message col-span-full typo-body-2">{formik?.errors['message']}</p>
        )}
      </div>
      <Button
        disabled={loading}
        className="col-span-full flex items-center justify-center h-[30px] mt-5 sm:mt-6 sm:h-[38px] sm:col-start-2 sm:col-span-6 md:col-start-2 md:col-span-6 xl:col-start-10 xl:col-span-2 xl:mt-6 lg:col-start-3 lg:col-span-4"
        type="submit"
      >
        {loading ? <Loader /> : <IntlMessages id="common.submit" />}
      </Button>
      {children}
    </form>
  );
}