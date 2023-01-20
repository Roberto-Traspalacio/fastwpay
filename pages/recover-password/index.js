import { useState } from 'react';
import { Navbar, GoHomeButton } from 'components';
import Image from 'next/image';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';
import Input from 'components/Input';
import useForm from 'hooks/useForm';
import { useFormik } from 'formik';
import { useValidacionesYup } from '../../modules/auth/recover-password/yup';
import Head from 'next/head';
import { Auth } from 'services/Auth.service';
import Loader from 'components/Loader';

const initialState = { email: '' };
export default function RecoverPassword() {
  const [loading, setLoading] = useState(false);
  const { validationSchema } = useValidacionesYup();
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: () => onSubmit(form),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialState, formik);
  const auth = new Auth();

  const onSubmit = async () => {
    setLoading(true);
    await auth.sendEmailRecoverPassword(form);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <main className="px-[18px] md:px-10 min-h-screen max-h-screen xl:min-h-0 lg:p-0 xl:mb-0">
        <Navbar className={'full-bleed-primary-blue xl:hidden'} />
        <section className="xl:flex lg:overflow-auto scrollbar lg:pb-6 xl:p-0 relative content-main">
          <div className="hidden min-h-screen xl:flex xl:w-[50%] xl:relative bg-primary-blue">
            <Image alt="Line" className="h-screen xl:w-[60%] xl:absolute xl:top-0 xl:left-0" src={loginLinea} />
            <Image
              alt="Login image"
              className="xl:absolute xl:top-[50%] xl:translate-y-[-50%] xl:right-[-5px] xl:w-[82%]"
              src={loginImage1}
            />
          </div>
          <div className="flex flex-col xl:w-[50%] xl:relative overflow-auto scrollbar">
            <GoHomeButton>Go Home</GoHomeButton>
            <div className="min-w-[89%] esm:min-w-[90.5%] sm:min-w-[94.2%] md:min-w-[89.6%] absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] md:pb-6 lg:pb-0 xl:min-w-[494px] xl:pt-0">
              <form className="grid-main gap-x-3" onSubmit={formik.handleSubmit}>
                <h2
                  className="text-center typo-heading-1 col-span-full mb-6 esm:mb-8 sm:mb-10"
                  style={{ color: '#202324' }}
                >
                  Reset password
                </h2>
                <Input
                  type="text"
                  label="Email"
                  name="email"
                  formik={formik}
                  onChange={handleChangeForm}
                  className="mb-5 sm:mb-[25px]"
                />
                <button className="col-span-full flex items-center justify-center h-[38px] sm:h-[44px] lg:h-[47px] sm:col-start-2 sm:col-span-6 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4 bg-primary-blue text-white px-[24px] py-[10px] rounded-full xl:col-span-full">
                  {loading ? <Loader /> : <div className="typo-body-1">Reset password</div>}
                </button>
                <p className="text-center w-[30ch] m-auto col-span-full mt-[20px] typo-body-1 sm:mt-[25px] lg:pb-0">
                  Enter your email address and we will send you a password reset link
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .content-main {
          min-height: calc(100vh - 50px);
          height: calc(100vh - 50px);
        }
        @media (min-width: 601px) {
          .content-main {
            min-height: calc(625px - 56px);
            height: calc(100vh - 56px);
          }
        }
        @media (min-width: 768px) {
          .content-main {
            min-height: calc(625px - 64px);
            height: calc(100vh - 64px);
          }
        }
        @media (min-width: 1280px) {
          .content-main {
            min-height: 100vh;
            height: 100vh;
          }
        }
      `}</style>
    </>
  );
}
