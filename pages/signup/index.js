import React from 'react';
import { Navbar, GoHomeButton } from 'components';
import Link from 'next/link';
import Image from 'next/image';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';
import useForm from 'hooks/useForm';
import { useValidacionesYup } from './yup';
import { useFormik } from 'formik';
import Input from 'components/Input';
import Head from 'next/head';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  country: '',
};

export default function Signup() {
  const [remember, setRemember] = React.useState(false);
  const { validationSchema } = useValidacionesYup();
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: () => onSubmit(form),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialState, formik);

  const onSubmit = () => {
    console.log('Sign Up!');
    console.log('Formik: ', formik);
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <main className="px-[18px] md:px-10 lg:mb-6 lg:min-h-[628px] lg:max-h-screen lg:overflow-auto scrollbar xl:p-0 xl:mb-0 xl:min-h-screen">
        <Navbar className={'full-bleed-primary-blue xl:hidden'} />
        <section className="xl:flex">
          <div className="hidden min-h-screen xl:flex xl:w-[50%] xl:relative bg-primary-blue">
            <Image className="h-screen xl:w-[60%] xl:absolute xl:top-0 xl:left-0" src={loginLinea} />
            <Image
              className="xl:absolute xl:top-[50%] xl:translate-y-[-50%] xl:right-[-5px] xl:w-[82%]"
              src={loginImage1}
            />
          </div>
          <div className="flex flex-col xl:w-[50%] xl:max-h-screen xl:overflow-auto scrollbar">
            <GoHomeButton>Go Home</GoHomeButton>
            <div className="pt-[26px] esm:pt-[39px] sm:pt-[51px] lg:pt-[51px] xl:m-auto xl:max-w-[494px] xl:min-w-[494px] xl:pb-[17px] xl:pt-[73px]">
              <form className="grid-main gap-x-3" onSubmit={formik.handleSubmit}>
                <h2
                  className="text-center typo-heading-1 col-span-full mb-6 esm:mb-8 sm:mb-10"
                  style={{ color: '#202324' }}
                >
                  Sign Up
                </h2>
                <Input type="text" label="Name" name="name" formik={formik} onChange={handleChangeForm} />
                <Input type="text" label="Last Name" name="lastName" formik={formik} onChange={handleChangeForm} />
                <Input type="text" label="Email" name="email" formik={formik} onChange={handleChangeForm} />
                <Input type="password" label="Password" name="password" formik={formik} onChange={handleChangeForm} />
                <label className="mb-2 sm:mb-[10px] label-name typo-body-2 sm:text-sm sm:tracking-wider sm:col-start-2 col-span-full text-text-1 lg:col-start-3 lg:col-span-4 xl:col-span-full">
                  Country
                </label>
                <select
                  id="countries"
                  name="country"
                  onChange={handleChangeForm}
                  className={`bg-background-2 mb-[18px] col-span-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:h-12 sm:col-span-6 sm:col-start-2 sm:mb-[26px] xl:col-span-full lg:col-start-3 lg:col-span-4 ${
                    formik.errors.country && 'input-error mb-[4px] xl:mb-[5px]'
                  }`}
                >
                  <option selected disabled>
                    Choose a country
                  </option>
                  <option value="ES">España</option>
                  <option value="IT">Italia</option>
                  <option value="AL">Alemania</option>
                  <option value="FR">Francia</option>
                </select>
                {formik.errors.country && (
                  <p className="input-error-message col-span-full mb-[14px] sm:col-start-2 typo-body-2 lg:col-start-3 lg:col-span-4 xl:col-span-full">
                    {formik.errors.country}
                  </p>
                )}
                <div className="col-span-full flex items-center justify-between sm:col-start-2 sm:col-end-8 lg:col-start-3 lg:col-span-4 xl:col-span-full">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox cursor-pointer outline-none w-[18px] h-[18px] shadow-inner[box-shadow: 0px 0px 4px 0px #00000040 inset] text-gray-600"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                    />
                    <span className="ml-3 text-text-2 typo-body-1">
                      Accept the <span className="underline">privacy policy</span>?
                    </span>
                  </label>
                </div>
                <button className="col-span-full mt-5 sm:col-start-2 sm:col-span-6 sm:mt-[25px] md:col-start-2 md:col-span-6 xl:mt-6 lg:col-start-3 lg:col-span-4 bg-primary-blue text-white lg:h-[47px] px-[24px] py-[10px] rounded-full xl:col-span-full">
                  <div className="typo-body-1">Sign Up</div>
                </button>
                <p className="text-center col-span-full mt-[18px] pb-28 typo-body-1 sm:mt-[25px] lg:pb-0 xl:pb-[40px]">
                  Do you already have an account with us?{' '}
                  <Link href="/login">
                    <span className="text-primary-blue underline">Login</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
