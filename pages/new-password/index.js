import React, { useState } from 'react';
import { Navbar } from 'components';
import Image from 'next/image';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';
import useForm from 'hooks/useForm';
import Head from 'next/head';
import Input from 'components/Input';
import { useValidacionesYup } from '../../modules/auth/new-password/yup';
import { useFormik } from 'formik';
import SuccessPswChange from '../../modules/auth/components/SuccessPswChange';
import InputWithIcon from 'modules/auth/components/InputWithIcon';

const initialState = {
  newPassword: '',
  repeatNewPassword: '',
};

export default function NewPassword() {
  const [success, setSuccess] = useState(false);
  const { validationSchema } = useValidacionesYup();
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: () => onSubmit(form),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialState, formik);

  const onSubmit = () => {
    console.log('New password!');
    console.log('Formik: ', formik);
    setSuccess(true);
  };

  return success ? (
    <SuccessPswChange />
  ) : (
    <>
      <Head>
        <title>New Password</title>
      </Head>
      <main className="px-[18px] md:px-10 overflow-clip lg:mb-6 lg:min-h-[628px] xl:p-0 xl:mb-0 min-h-screen">
        <Navbar className={'full-bleed-primary-blue xl:hidden'} />
        <section className="xl:flex max-h-screen">
          <div className="hidden min-h-screen xl:flex xl:w-[50%] xl:relative bg-primary-blue">
            <Image className="h-screen xl:w-[60%] xl:absolute xl:top-0 xl:left-0" src={loginLinea} />
            <Image
              className="xl:absolute xl:top-[50%] xl:translate-y-[-50%] xl:right-[-5px] xl:w-[82%]"
              src={loginImage1}
            />
          </div>
          <div className="flex flex-col xl:w-[50%] xl:relative overflow-auto scrollbar">
            <div className="min-w-[89%] pt-12 esm:min-w-[90.5%] sm:min-w-[94.2%] sm:pt-14 md:pt-16 md:min-w-[89.6%] absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] xl:min-w-[494px] xl:pt-0">
              <form className="grid-main gap-x-3" onSubmit={formik.handleSubmit}>
                <h2
                  className="text-center typo-heading-1 col-span-full mb-6 esm:mb-8 sm:mb-10"
                  style={{ color: '#202324' }}
                >
                  Enter new password
                </h2>
                <Input
                  type="password"
                  name="newPassword"
                  label="New password"
                  formik={formik}
                  onChange={handleChangeForm}
                />
                <InputWithIcon
                  type="password"
                  name="repeatNewPassword"
                  label="Repeat new password"
                  formik={formik}
                  onChange={handleChangeForm}
                />
                <button className="col-span-full sm:col-start-2 sm:col-span-6 sm:mt-[25px] md:col-start-2 md:col-span-6 xl:mt-6 lg:col-start-3 lg:col-span-4 bg-primary-blue text-white lg:h-[47px] px-[24px] py-[10px] rounded-full xl:col-span-full">
                  <div className="typo-body-1">Update password</div>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
