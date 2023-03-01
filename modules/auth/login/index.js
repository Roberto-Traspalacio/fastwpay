import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, GoHomeButton } from 'components';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';
import { useFormik } from 'formik';
import useForm from 'hooks/useForm';
import { useValidacionesYup } from 'modules/auth/login/yup';
import Input from 'modules/auth/components/Input';
import Head from 'next/head';
import { Auth } from 'services/Auth.service';
import Loader from 'components/Loader';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import ErrorToast from 'components/ErrorToast';
import IntlMessages from 'utils/IntlMessages';
import { ScreenLoaderContext } from 'context/screenLoader/context';
import ModalUnverificated from 'modules/auth/components/ModalUnverificated';
import MessageModal from 'modules/auth/components/MessageModal';
import { NOT_FOUND, UNATHORIZED_ERROR_CODE } from 'utils/statusCodes';
import { setValueFormik } from 'utils/setValueFormik';

const initialState = {
  email: '',
  password: '',
};

export default function Login() {
  const [error, setError] = useState({
    show: false,
    text: '',
  });
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModalVerificate, setShowModalVerificate] = useState(false);
  const [showModalMessage, setShowModalMessage] = useState(false);
  const router = useRouter();
  const { validationSchema } = useValidacionesYup();
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: () => onSubmit(form),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialState, formik);
  const { setShowScreenLoader } = useContext(ScreenLoaderContext);
  const auth = new Auth();
  const ACCOUNT_INACTIVE_MESSAGE = 'Account inactive';

  const onSubmit = async () => {
    setLoading(true);
    const data = await auth.login(form);
    if (
      (data?.response.status === UNATHORIZED_ERROR_CODE || data?.response.status === NOT_FOUND) &&
      data?.data?.message !== ACCOUNT_INACTIVE_MESSAGE
    ) {
      setError({ show: true, text: <IntlMessages id="validation.invalidUsernameOrPassoword" /> });
      setTimeout(() => setError({ ...error, show: false }), 4500);
    }

    if (data?.data?.message === ACCOUNT_INACTIVE_MESSAGE) {
      setShowModalVerificate(true);
    }
    if (data.data?.token) {
      Cookies.set('auth', JSON.stringify(data.data));
      setValueFormik(formik, 'email', '');
      setValueFormik(formik, 'password', '');
      router.push(data?.data?.rol === 'ROLE_CUSTOMER' ? '/dashboard' : '/admin/dashboard');
    }
    setLoading(false);
    setShowScreenLoader(true);
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-[18px] md:px-10 min-h-screen max-h-screen xl:min-h-0 lg:p-0 xl:mb-0">
        <Navbar auth className={'full-bleed-primary-blue px-0 md:px-0 lg:px-10 xl:hidden'} />
        <section className="xl:flex lg:overflow-auto scrollbar lg:pb-6 xl:p-0 relative content-main">
          {error.show && <ErrorToast text={error.text} className="xl:hidden" />}
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
            {showModalVerificate ? (
              <ModalUnverificated
                email={{ email: formik.values?.email }}
                setShowModalVerificate={setShowModalVerificate}
                setShowModalMessage={setShowModalMessage}
              />
            ) : showModalMessage ? (
              <MessageModal
                email={formik.values?.email}
                text="We have sent you an email so that you can verify your email and you can finish the registration!!"
              />
            ) : (
              <>
                {error.show && <ErrorToast text={error.text} className="hidden xl:block" />}
                <GoHomeButton arrow>
                  <IntlMessages id="common.goHome" />
                </GoHomeButton>
                <div className="min-w-[100%] absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] md:pb-6 lg:pb-0 xl:min-w-[494px] xl:pt-0">
                  <form className="grid-main gap-x-3" onSubmit={formik.handleSubmit}>
                    <h2
                      className="text-center typo-heading-1 col-span-full mb-6 esm:mb-8 sm:mb-10"
                      style={{ color: '#202324' }}
                    >
                      <IntlMessages id="auth.login" />
                    </h2>
                    <Input
                      type="text"
                      label={<IntlMessages id="common.email" />}
                      name="email"
                      formik={formik}
                      onChange={handleChangeForm}
                      className="min-w-[89%] esm:min-w-[90.5%] sm:min-w-[94.2%] md:min-w-[89.6%] lg:min-w-[466px] xl:min-w-[494px]"
                    />
                    <Input
                      type="password"
                      label={<IntlMessages id="common.password" />}
                      name="password"
                      formik={formik}
                      onChange={handleChangeForm}
                    />
                    {/* Remember me and recover password */}
                    <div className="col-span-full flex items-center justify-between sm:col-start-2 sm:col-end-8 lg:col-start-3 lg:col-span-4 xl:col-span-full">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox cursor-pointer outline-none w-[18px] h-[18px] shadow-inner[box-shadow: 0px 0px 4px 0px #00000040 inset] text-gray-600"
                          checked={remember}
                          onChange={() => setRemember(!remember)}
                        />
                        <span className="ml-2 text-text-2 typo-body-1">
                          <IntlMessages id="auth.login.rememberMe" />
                        </span>
                      </label>
                      <Link className="text-text-2 typo-body-1 underline" href="/recover-password">
                        <IntlMessages id="auth.login.forgotYourPassword" />
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="col-span-full h-[38px] sm:h-[44px] lg:h-[47px] flex items-center justify-center mt-5 sm:col-start-2 sm:col-span-6 sm:mt-[25px] md:col-start-2 md:col-span-6 xl:mt-6 lg:col-start-3 lg:col-span-4 bg-primary-blue text-white px-[24px] py-[10px] rounded-full xl:col-span-full"
                    >
                      {loading ? (
                        <Loader />
                      ) : (
                        <div className="typo-body-1">
                          <IntlMessages id="auth.login" />
                        </div>
                      )}
                    </button>
                    <p className="text-center col-span-full mt-[18px] typo-body-1 sm:mt-[25px] lg:pb-0">
                      <IntlMessages id="auth.login.newToThisPlatform" />{' '}
                      <Link href="/signup">
                        <span className="text-primary-blue underline">
                          <IntlMessages id="auth.signup" />
                        </span>
                      </Link>
                    </p>
                  </form>
                </div>
              </>
            )}
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
