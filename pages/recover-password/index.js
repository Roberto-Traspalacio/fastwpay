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

const initialState = { email: '' };

export default function RecoverPassword() {
  const { validationSchema } = useValidacionesYup();
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: () => onSubmit(form),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialState, formik);
  const auth = new Auth();

  const onSubmit = () => {
    auth.sendEmailRecoverPassword(form);
  };

  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <main className="px-[18px] md:px-10 overflow-clip lg:min-h-[628px] xl:p-0 xl:mb-0 min-h-screen">
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
            <GoHomeButton>Go Home</GoHomeButton>
            <div className="min-w-[89%] esm:min-w-[90.5%] sm:min-w-[94.2%] md:min-w-[89.6%] lg:w-[494px] absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] xl:min-w-[494px] pt-0">
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
                <button class="col-span-full sm:col-start-2 sm:col-span-6 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4 bg-primary-blue text-white lg:h-[47px] px-[24px] py-[10px] rounded-full xl:col-span-full">
                  <div class="typo-body-1">Reset password</div>
                </button>
                <p className="text-center w-[30ch] m-auto col-span-full mt-[20px] typo-body-1 sm:mt-[25px] lg:pb-0">
                  Enter your email address and we will send you a password reset link
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
