import { useState } from 'react';
import { Navbar, GoHomeButton } from 'components';
import Link from 'next/link';
import Image from 'next/image';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';
import useForm from 'hooks/useForm';
import { useValidacionesYup } from '../../modules/auth/signup/yup';
import { useFormik } from 'formik';
import Input from 'components/Input';
import Head from 'next/head';
import { Auth } from 'services/Auth.service';
import Loader from 'components/Loader';
import MessageModal from 'modules/auth/components/MessageModal';
import { setValueFormik } from 'utils/setValueFormik';
import IntlMessages from 'utils/IntlMessages';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  country: '',
  privacyPolicy: null,
};

export default function Signup() {
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { validationSchema } = useValidacionesYup();
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: () => onSubmit(),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialState, formik);
  const auth = new Auth();
  const SUCCESS_REQUEST_CODE = 201;

  const acceptPrivacyPolicy = () => {
    setPrivacyPolicy(!privacyPolicy);
    setValueFormik(formik, 'privacyPolicy', !privacyPolicy);
  };

  const onSubmit = async () => {
    setLoading(true);
    const data = await auth.register(form);
    if (data?.data?.message === 'Email Registrado') {
      formik.setFieldError('email', 'This email is already taken. use another');
    }
    setLoading(false);
    if (data.response?.status === SUCCESS_REQUEST_CODE) {
      setShowModal(true);
    }
  };

  return (
    <>
      <Head>
        <title>SIgn Up</title>
      </Head>
      <main className="flex flex-col px-[18px] md:px-10 lg:p-0 h-screen xl:h-auto">
        <Navbar auth className={'full-bleed-primary-blue px-0 md:px-0 lg:px-10 xl:hidden'} />
        <section className="xl:flex lg:pb-6 xl:p-0 relative">
          <div className="hidden min-h-screen xl:flex xl:w-[50%] xl:relative bg-primary-blue max-h-screen">
            <Image alt="" className="h-screen xl:w-[60%] xl:absolute xl:top-0 xl:left-0" src={loginLinea} />
            <Image
              alt=""
              className="xl:absolute xl:top-[50%] xl:translate-y-[-50%] xl:right-[-5px] xl:w-[82%]"
              src={loginImage1}
            />
          </div>
          <div className="flex flex-col xl:w-[50%] xl:max-h-screen xl:overflow-auto scrollbar relative">
            {!showModal ? (
              <>
                <GoHomeButton>
                  <IntlMessages id="common.goHome" />
                </GoHomeButton>
                <div className="min-w-[100%] md:pb-6 lg:pb-0 xl:pt-0 content-main items-center flex justify-center">
                  <form
                    // className="grid-main gap-x-3 absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%]"
                    className="grid-main gap-x-3 min-w-[100%] lg:min-w-[494px]"
                    onSubmit={formik.handleSubmit}
                  >
                    <h2
                      className="text-center typo-heading-1 col-span-full mb-6 esm:mb-8 sm:mb-10"
                      style={{ color: '#202324' }}
                    >
                      <IntlMessages id="auth.signup" />
                    </h2>
                    <Input
                      type="text"
                      label={<IntlMessages id="common.name" />}
                      name="firstName"
                      formik={formik}
                      onChange={handleChangeForm}
                      className="min-w-[89%] esm:min-w-[90.5%] sm:min-w-[94.2%] md:min-w-[89.6%] lg:min-w-[466px] xl:min-w-[494px]"
                    />
                    <Input
                      type="text"
                      label={<IntlMessages id="common.lastName" />}
                      name="lastName"
                      formik={formik}
                      onChange={handleChangeForm}
                      className="min-w-[89%] esm:min-w-[90.5%] sm:min-w-[94.2%] md:min-w-[89.6%] lg:min-w-[466px] xl:min-w-[494px]"
                    />
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
                      className="min-w-[89%] esm:min-w-[90.5%] sm:min-w-[94.2%] md:min-w-[89.6%] lg:min-w-[466px] xl:min-w-[494px]"
                    />
                    <div
                      className={`flex flex-col col-span-full ${
                        formik?.errors.country ? 'mb-0' : 'mb-[18px]'
                      } sm:col-span-6 sm:col-start-2 ${
                        formik?.errors.country ? 'sm:mb-0' : 'sm:mb-[26px]'
                      } lg:col-start-3 lg:col-span-4 xl:col-span-full`}
                    >
                      <label className="mb-2 sm:mb-[10px] label-name typo-body-2 sm:text-sm sm:tracking-wider col-span-full text-text-1 lg:col-start-3 lg:col-span-4 xl:col-span-full">
                        <IntlMessages id="common.country" />
                      </label>
                      <select
                        id="countries"
                        name="country"
                        onChange={handleChangeForm}
                        className={`bg-background-2 text-gray-900 border-r-[20px] border-transparent text-sm rounded-lg block w-full p-2.5 sm:h-12 ${
                          formik.errors.country && 'input-error mb-[4px] xl:mb-[5px]'
                        }`}
                      >
                        <option selected disabled>
                          <IntlMessages id="common.chooseCountry" />
                        </option>
                        <option value="ES">Spain</option>
                        <option value="IT">Italy</option>
                        <option value="AL">Germany</option>
                        <option value="FR">France</option>
                      </select>
                    </div>
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
                          checked={privacyPolicy}
                          onChange={acceptPrivacyPolicy}
                        />
                        <span
                          className={`ml-3 text-text-2 typo-body-1 ${
                            formik?.errors?.privacyPolicy && 'text-secondary-redHard'
                          }`}
                        >
                          <IntlMessages id="auth.signup.acceptPrivacyPolicy.1" />{' '}
                          <Link target="_blank" href="/privacy-policy">
                            <span className={`underline cursor-pointer`}>
                              <IntlMessages id="auth.signup.acceptPrivacyPolicy.2" />
                            </span>
                          </Link>
                          ?
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="col-span-full h-[38px] sm:h-[44px] lg:h-[47px] flex items-center justify-center mt-5 sm:col-start-2 sm:col-span-6 sm:mt-[25px] md:col-start-2 md:col-span-6 xl:mt-6 lg:col-start-3 lg:col-span-4 bg-primary-blue text-white px-[24px] py-[10px] rounded-full xl:col-span-full"
                    >
                      {loading ? (
                        <Loader />
                      ) : (
                        <div className="typo-body-1">
                          <IntlMessages id="auth.signup" />
                        </div>
                      )}
                    </button>
                    <p className="text-center col-span-full mt-[18px] typo-body-1 sm:mt-[25px] lg:pb-0">
                      <IntlMessages id="auth.signup.alReadyAccount" />{' '}
                      <Link href="/login">
                        <span className="text-primary-blue underline">
                          <IntlMessages id="auth.login" />
                        </span>
                      </Link>
                    </p>
                  </form>
                </div>
              </>
            ) : (
              <div className="h-screen">
                <MessageModal email={form.email} text={<IntlMessages id="auth.text.sendVerifyEmail" />} />
              </div>
            )}
          </div>
        </section>
      </main>
      <style jsx>{`
        .content-main {
          min-height: calc(150vh - 96px);
        }
        @media (min-width: 360px) {
          .content-main {
            min-height: calc(135vh - 112px);
          }
        }
        @media (min-width: 414px) {
          .content-main {
            min-height: calc(125vh - 112px);
          }
        }
        @media (min-width: 360px) and (min-height: 700px) and (max-width: 600px) {
          .content-main {
            min-height: calc(100vh - 112px);
          }
        }
        @media (min-width: 768px) {
          .content-main {
            min-height: calc(100vh - 112px);
          }
        }
        @media (min-width: 1024px) {
          .content-main {
            min-height: calc(780px);
          }
        }
        @media (min-width: 1280px) {
          .content-main {
            min-height: calc(1000px - 24px);
          }
        }
      `}</style>
    </>
  );
}
