import { useState } from 'react';
import { Navbar, GoHomeButton } from 'components';
import Link from 'next/link';
import Image from 'next/image';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';
import { useFormik } from 'formik';
import useForm from 'hooks/useForm';
import { useValidacionesYup } from '../../modules/auth/login/yup';
import Input from 'components/Input';
import Head from 'next/head';

const initialState = {
  email: '',
  password: '',
};

export default function Login() {
  const [remember, setRemember] = useState(false);
  const { validationSchema } = useValidacionesYup();
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: () => onSubmit(form),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialState, formik);

  const onSubmit = () => {
    console.log('Login!');
    console.log('Formik: ', formik);
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="px-[18px] md:px-10 overflow-clip lg:mb-6 lg:min-h-[628px] xl:p-0 xl:mb-0 min-h-screen">
        <Navbar className={'full-bleed-primary-blue xl:hidden'} />
        <section className="xl:flex max-h-screen">
          <div className="hidden min-h-screen xl:flex xl:w-[50%] xl:relative bg-primary-blue">
            <Image
              alt="Dashboard Fastwpay"
              className="h-screen xl:w-[60%] xl:absolute xl:top-0 xl:left-0"
              src={loginLinea}
            />
            <Image
              alt="Linea"
              className="xl:absolute xl:top-[50%] xl:translate-y-[-50%] xl:right-[-5px] xl:w-[82%]"
              src={loginImage1}
            />
          </div>
          <div className="flex flex-col xl:w-[50%] xl:relative overflow-auto scrollbar">
            <GoHomeButton arrow>Go Home</GoHomeButton>
            <div className="min-w-[89%] pt-12 esm:min-w-[90.5%] sm:min-w-[94.2%] sm:pt-14 md:pt-16 md:min-w-[89.6%] absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] xl:min-w-[494px] xl:pt-0">
              <form className="grid-main gap-x-3" onSubmit={formik.handleSubmit}>
                <h2
                  className="text-center typo-heading-1 col-span-full mb-6 esm:mb-8 sm:mb-10"
                  style={{ color: '#202324' }}
                >
                  Login
                </h2>
                <Input type="text" label="Email" name="email" formik={formik} onChange={handleChangeForm} />
                <Input type="password" label="Password" name="password" formik={formik} onChange={handleChangeForm} />
                {/* Remember me and recover password */}
                <div className="col-span-full flex items-center justify-between sm:col-start-2 sm:col-end-8 lg:col-start-3 lg:col-span-4 xl:col-span-full">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox cursor-pointer outline-none w-[18px] h-[18px] shadow-inner[box-shadow: 0px 0px 4px 0px #00000040 inset] text-gray-600"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                    />
                    <span className="ml-2 text-text-2 typo-body-1">Remember me</span>
                  </label>
                  <Link className="text-text-2 typo-body-1 underline" href="/recover-password">
                    Forgot your password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="col-span-full mt-5 sm:col-start-2 sm:col-span-6 sm:mt-[25px] md:col-start-2 md:col-span-6 xl:mt-6 lg:col-start-3 lg:col-span-4 bg-primary-blue text-white lg:h-[47px] px-[24px] py-[10px] rounded-full xl:col-span-full"
                >
                  <div className="typo-body-1">Login</div>
                </button>
                <p className="text-center col-span-full mt-[18px] typo-body-1 sm:mt-[25px] lg:pb-0">
                  New to this Plataform?{' '}
                  <Link href="/signup">
                    <span className="text-primary-blue underline">Sign Up</span>
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
