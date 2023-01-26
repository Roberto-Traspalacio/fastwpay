import { useContext, useEffect, useState } from 'react';
import editIcon from 'assets/edit.svg';
import useForm from 'hooks/useForm';
import Image from 'next/image';
import EditButtons from '../EditButtons';
import Input from '../Input';
import { useFormik } from 'formik';
import { useYupValidations, useYupValidationsBank } from './yup';
import { UserContext } from 'context/user/context';
import { setValueFormik } from 'utils/setValueFormik';
import { ScreenLoaderContext } from 'context/screenLoader/context';
import IntlMessages from 'utils/IntlMessages';
import { initialUserInfo, intialBankInformation, intialUserInfoArray, listBanks, listCountries } from './utils';
import { Bank } from 'services/Bank.service';
import Link from 'next/link';

export default function Form() {
  const [edit, setEdit] = useState(null); // null = not edit - 0 = Edit Personal info - 1 = Edit Withdrawal info
  const [loading, setLoading] = useState(false);
  const [infoBankPreEdit, setInfoBankPreEdit] = useState({});
  const { validationSchema } = useYupValidations();
  const { validationSchema: validationSchemaBank } = useYupValidationsBank();
  const formik = useFormik({
    initialValues: initialUserInfo,
    onSubmit: () => onSubmit(),
    validationSchema,
  });
  const formikBank = useFormik({
    initialValues: intialBankInformation,
    onSubmit: () => onSubmitBankInfo(),
    validationSchema: validationSchemaBank,
  });
  const { form, handleChangeForm } = useForm(initialUserInfo, formik);
  const {
    form: bankInfoForm,
    handleChangeForm: handleChangeBankInfoForm,
    setForm,
  } = useForm(intialBankInformation, formikBank);
  const { userInfo, getUserInfo } = useContext(UserContext);
  const { setShowScreenLoader } = useContext(ScreenLoaderContext);
  const bank = new Bank();

  const cancel = () => {
    setEdit(null);
    formikBank.setErrors({});
    setValueFormik(formikBank, 'bankName', infoBankPreEdit?.bankName);
    setValueFormik(formikBank, 'accountNumber', infoBankPreEdit?.accountNumber);
    setValueFormik(formikBank, 'beneficiary', infoBankPreEdit?.beneficiary);
    setForm(infoBankPreEdit);
  };

  const onSubmit = async () => {
    setShowScreenLoader(true);
    setEdit(null);
    setTimeout(() => {
      setShowScreenLoader(false);
    }, 2500);
  };

  const onSubmitBankInfo = async () => {
    setLoading(true);
    await bank.saveBank(bankInfoForm);
    setLoading(false);
    setEdit(null);
  };

  useEffect(() => {
    (async () => {
      getUserInfo(false);
      const data = await bank.getinfo();
      setForm(data?.data);
    })();
  }, []);

  useEffect(() => {
    intialUserInfoArray.map((e) => {
      setValueFormik(formik, e, userInfo[e]);
    });
  }, [userInfo]);

  useEffect(() => {
    setValueFormik(formikBank, 'bankName', bankInfoForm?.bankName);
    setValueFormik(formikBank, 'accountNumber', bankInfoForm?.accountNumber);
    setValueFormik(formikBank, 'beneficiary', bankInfoForm?.beneficiary);
  }, [bankInfoForm]);

  return (
    <div className="grid-main">
      <form
        className="px-[18px] mt-[20px] lg:mt-10 col-span-full pb-0 sm:px-5 sm:pb-0 sm:overflow-auto sm:mt-[40px] md:col-span-6 md:col-start-2 md:col-end-8 md:px-0 lg:col-span-3 xl:col-span-4"
        onSubmit={formik.handleSubmit}
      >
        {/* Personal Information */}
        <div className="col-span-full">
          <div className="flex gap-[14px] items-center">
            <h6 className="typo-heading-4 text-text-1 font-bold">
              <IntlMessages id="account.personalInformation" />
            </h6>
            {/* {edit !== 0 && (
              <Image
                onClick={() => setEdit(edit === 0 ? null : 0)}
                className="cursor-pointer"
                src={editIcon}
                alt="Edit icon"
              />
            )} */}
          </div>
        </div>
        {/* Fisrt name & Last name */}
        <div
          className={`grid-main col-span-full mt-6 lg:mt-[28px] xl:mt-[28px] ${
            formik.errors.firstName || formik.errors.lastName ? 'lg:gap-0' : 'lg:gap-5'
          } xl:gap-5`}
        >
          <Input
            disabled={edit === null || edit === 1}
            className="col-span-2 sm:col-span-4 lg:col-span-full xl:col-span-6"
            type="text"
            label={<IntlMessages id="common.firstName" />}
            name="firstName"
            formik={formik}
            value={formik.values.firstName}
            onChange={handleChangeForm}
          />
          <Input
            disabled={edit === null || edit === 1}
            className="col-span-2 sm:col-span-4 lg:col-span-full xl:col-span-6"
            type="text"
            label={<IntlMessages id="common.lastName" />}
            name="lastName"
            formik={formik}
            value={formik.values.lastName}
            onChange={handleChangeForm}
          />
        </div>
        {/* Email */}
        <Input
          disabled={edit === null || edit === 1}
          className={`col-span-full ${formik?.errors.email || formik?.errors.lastName ? 'mt-0' : 'mt-[14px]'} ${
            formik?.errors.email || formik?.errors.lastName ? 'lg:mt-0' : 'lg:mt-5'
          }`}
          type="text"
          label={<IntlMessages id="common.email" />}
          name="email"
          formik={formik}
          value={formik.values.email}
          onChange={handleChangeForm}
        />
        {/* Country Select */}
        <div className="col-span-full mt-[14px] lg:mt-5">
          <label className="typo-body-2 mb-2 ml-[8px] text-text-1" htmlFor="countries">
            <IntlMessages id="common.country" />
          </label>
          <select
            disabled={edit === null || edit === 1}
            id="countries"
            name="country"
            onChange={handleChangeForm}
            value={formik.values.country}
            className={`${
              edit === null || edit === 1 ? 'bg-background-7' : 'bg-background-2'
            } col-span-full text-gray-900 text-sm border-r-[20px] border-transparent mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[36px] typo-body-1 sm:h-12 sm:col-span-6 sm:col-start-2 xl:col-span-full lg:col-start-3 lg:col-span-4 md:col-span-6 md:col-start-2 ${
              formik?.errors.country && 'input-error mb-[4px] xl:mb-[5px]'
            }`}
          >
            <option className="typo-body-1" selected disabled>
              <IntlMessages id="common.chooseCountry" />
            </option>
            <option value="ES">Spain</option>
            <option value="IT">Italy</option>
            <option value="AL">Germany</option>
            <option value="FR">France</option>
          </select>
          {formik?.errors.country && (
            <p className="input-error-message col-span-full mb-[14px] sm:col-start-2 typo-body-2 lg:col-start-3 lg:col-span-4 xl:col-span-full">
              {formik?.errors.country}
            </p>
          )}
        </div>
        {edit === 0 && <EditButtons className="mt-5" cancel={cancel} edit={edit} setEdit={setEdit} />}
      </form>
      <form
        className="px-[18px] mt-8 sm:mt-8 lg:mt-10 col-span-full pb-6 sm:px-5 sm:overflow-auto md:col-span-6 md:col-start-2 md:col-end-8 md:px-0 lg:col-span-3 lg:col-start-5 xl:col-span-4 xl:col-start-6"
        onSubmit={formikBank.handleSubmit}
      >
        {/* Withdrawal information */}
        <div className="col-span-full">
          <div className="flex gap-[14px] items-center">
            <h6 className="typo-heading-4 text-text-1 font-bold">
              <IntlMessages id="account.withdrawalInformation" />
            </h6>
            {edit !== 1 && (
              <Image
                onClick={() => {
                  setEdit(edit === 1 ? null : 1);
                  setInfoBankPreEdit(bankInfoForm);
                }}
                className="cursor-pointer"
                src={editIcon}
                alt="Edit icon"
              />
            )}
          </div>
        </div>
        {/* Bank Input */}
        <Input
          disabled={edit === null || edit === 0}
          className="col-span-full mt-[18px] lg:mt-5"
          type="text"
          label={<IntlMessages id="common.bank" />}
          name="bankName"
          value={formikBank.values?.bankName}
          formik={formikBank}
          onChange={handleChangeBankInfoForm}
        />
        {/* Account Number */}
        <Input
          disabled={edit === null || edit === 0}
          className="col-span-full mt-[18px] lg:mt-5"
          type="text"
          label={<IntlMessages id="account.accountNumber" />}
          name="accountNumber"
          value={formikBank.values?.accountNumber}
          formik={formikBank}
          onChange={handleChangeBankInfoForm}
        />
        <Input
          disabled={edit === null || edit === 0}
          className="col-span-full mt-[18px] lg:mt-5"
          type="text"
          label={<IntlMessages id="common.beneficiary" />}
          name="beneficiary"
          formik={formikBank}
          value={formikBank.values?.beneficiary}
          onChange={handleChangeBankInfoForm}
        />
        <p className="typo-body-1 text-text-2 mt-8">
          If you don't know the exact name of your bank, check this{' '}
          <Link className="text-primary-blue" target="_blank" href="https://wise.com/es/swift-codes/countries">
            link
          </Link>
          <br />
          At the moment we only work with WISE banks, we will be adding new methods in the future
        </p>
        {edit === 1 && <EditButtons loading={loading} setLoading={setLoading} className="mt-5" cancel={cancel} />}
      </form>
    </div>
  );
}
