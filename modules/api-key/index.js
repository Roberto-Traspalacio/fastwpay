import { useState } from 'react';
import BannerBlue from 'components/BannerBlue';
import { Button } from 'components';
import ListApikeys from 'modules/api-key/components/ListApikeys';
import useForm from 'hooks/useForm';
import { useFormik } from 'formik';
import { useYupValidations } from 'modules/api-key/yup';
import { Apikey } from 'services/Apikey.service';
import IntlMessages from 'utils/IntlMessages';
import Loader from 'components/Loader';
import { SUCCESS_REQUEST_CODE } from 'utils/statusCodes';
import AppLayout from 'layouts/app.layout';
import { useIntl } from 'react-intl';

const initialForm = { reference: '' };

export default function ApiKey() {
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const { validationSchema } = useYupValidations();
  const formik = useFormik({
    initialValues: initialForm,
    onSubmit: () => onSubmit(form),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialForm, formik);
  const apiKey = new Apikey();
  const { messages } = useIntl();

  const onSubmit = async () => {
    setLoading(true);
    const data = await apiKey.generate(form);
    if (data?.response.status === SUCCESS_REQUEST_CODE) {
      setTab(1);
    }
    setLoading(false);
  };

  return (
    <>
      <AppLayout title="FastwPay | API key">
        <div className="sm:overflow-auto w-full">
          <BannerBlue className="sm:mx-[20px]" />
          <div className="px-[18px] center-container col-span-full sm:px-5 w-[100%]">
            <div className="max-w-[14ch] h-auto px-[1px] lg:max-w-[26ch]">
              <h3 className="typo-heading-2 col-span-full mt-10 font-normal text-text-4 sm:mt-8 md:mt-[41px] lg:pl-0">
                <IntlMessages id="apiKey.title" />
              </h3>
            </div>
            {/* Linea */}
            <div className="h-[3px] bg-background-4 col-span-full relative mt-2 md:mt-5 lg:ml-0">
              <div className="bg-primary-blue rounded-full w-8 h-[3px] absolute right-0 left-0 z-10"></div>
              <div className="absolute flex -top-[40px] sm:-top-[45px] lg:-top-[44px] right-0">
                <button
                  onClick={() => setTab(0)}
                  className={`${tab === 0 ? 'tab-active' : 'tab'} typo-body-1 py-[10px] px-[13px]`}
                >
                  <IntlMessages id="common.create" />
                </button>
                <button
                  onClick={() => setTab(1)}
                  className={`${
                    tab === 1 ? 'tab-active' : 'tab'
                  } flex items-center gap-1 py-[10px] px-[13px] typo-body-1 text-text-2 font-normal `}
                >
                  <IntlMessages id="apiKey.listApikeys" />
                </button>
              </div>
            </div>
            {/* Content information */}
            {tab === 0 ? (
              <div className="lg:px-0 lg:grid-main pb-4">
                <div className="col-span-3 xl:col-span-5">
                  <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">
                    <IntlMessages id="apiKey.activatingYourPlugin" />
                  </h6>
                  <p className="mt-3 typo-body-1 text-text-4 text-justify">
                    <IntlMessages id="apiKey.activatingYourPlugin.text" />
                  </p>
                </div>
                <div className="col-start-5 col-span-4 xl:col-start-7 xl:col-span-6">
                  <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">
                    <IntlMessages id="apiKey.yourApikeys" />
                  </h6>
                  <p className="mt-3 typo-body-1 text-text-4 text-justify">
                    <IntlMessages id="apiKey.yourApikeys.text" />
                  </p>

                  <form
                    className="flex flex-col col-span-full mt-3 sm:flex-row sm:items-start sm:gap-5 lg:px-0 xl:justify-between lg:items-center"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="relative">
                      <input
                        name="reference"
                        onChange={handleChangeForm}
                        type="text"
                        placeholder={String(messages['apiKey.generate.input.placeholder'])}
                        className="w-[100%] rounded-[10px] typo-body-1 py-[11px] pl-6 bg-background-6 sm:w-[239px] xl:w-[314px]"
                      />
                      {formik.errors?.reference && (
                        <p className="input-error-message col-span-full l-2 sm:col-start-2 typo-body-2 lg:col-start-3 lg:col-span-4 xl:col-span-full">
                          {formik.errors?.reference}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="min-w-[157px] h-[36px] sm:h-[38px] flex items-center justify-center m-auto mt-3 mb-6 sm:mt-0 sm:mb-0 sm:m-0 sm:min-w-[172px] leading-4"
                    >
                      {loading ? <Loader /> : <IntlMessages id="apiKey.generate" />}
                    </Button>
                  </form>
                </div>
              </div>
            ) : (
              <ListApikeys />
            )}
          </div>
        </div>
      </AppLayout>
      <style jsx>{`
        .tab {
          border-top: 3px solid transparent;
          border-left: 3px solid transparent;
          border-right: 3px solid transparent;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        .tab-active {
          border-top: 3px solid #e8e8e8;
          border-left: 3px solid #e8e8e8;
          border-right: 3px solid #e8e8e8;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          background: #d7e1f3;
          color: #295bb7;
        }
        .tab-active > p {
          background: #295bb7;
        }
      `}</style>
    </>
  );
}
