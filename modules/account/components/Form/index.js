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
import { initialUserInfo, intialBankInformation, intialBankInformationArray, intialUserInfoArray } from './utils';
import { Bank } from 'services/Bank.service';
import Link from 'next/link';
import CountrySelect from 'components/CountrySelect';
import SwitchButton from '../SwitchButton';

export default function Form() {
  const [edit, setEdit] = useState(null); // null = not edit - 0 = Edit Personal info - 1 = Edit Withdrawal info
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
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
  const { userInfo, getUserInfo } = useContext(UserContext);
  const {
    form: bankInfoForm,
    handleChangeForm: handleChangeBankInfoForm,
    setForm,
  } = useForm({ ...intialBankInformation }, formikBank);
  const { setShowScreenLoader } = useContext(ScreenLoaderContext);
  const bank = new Bank();
  const SUCCESS_REQUEST_CODE = 200;

  const handleChecked = () => {
    setForm({ ...bankInfoForm, isSwiftAccount: !checked, accountNumber: '' });
    setChecked(!checked);
    setValueFormik(formikBank, 'accountNumber', '');
    setValueFormik(formikBank, 'isSwiftAccount', !checked);
  };

  const cancel = () => {
    setEdit(null);
    formikBank.setErrors({});
    setValueFormik(formikBank, 'bankName', infoBankPreEdit?.bankName);
    setValueFormik(formikBank, 'accountNumber', infoBankPreEdit?.accountNumber);
    setValueFormik(formikBank, 'beneficiary', infoBankPreEdit?.beneficiary);
    setValueFormik(formikBank, 'beneficiary', infoBankPreEdit?.country);
    setValueFormik(formikBank, 'isSwiftAccount', Boolean(infoBankPreEdit?.isSwiftAccount));
    setChecked(Boolean(infoBankPreEdit?.isSwiftAccount));
    setForm({ ...infoBankPreEdit, isSwiftAccount: Boolean(infoBankPreEdit?.isSwiftAccount) });
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
    const response = await bank.saveBank({ ...bankInfoForm, isSwiftAccount: checked });
    console.log('🚀 ~ file: index.js:82 ~ onSubmitBankInfo ~ response?.data:', response?.data);
    if (response?.status === SUCCESS_REQUEST_CODE) {
      setInfoBankPreEdit(response?.data);
      setForm(response?.data);
    }
    setLoading(false);
    setEdit(null);
  };

  useEffect(() => {
    intialUserInfoArray.map((e) => {
      setValueFormik(formik, e, userInfo[e]);
    });
  }, [userInfo]);

  useEffect(() => {
    intialBankInformationArray.map((e) => {
      setValueFormik(formikBank, e, bankInfoForm[e]);
    });
  }, [bankInfoForm]);

  useEffect(() => {
    (async () => {
      getUserInfo(false);
      const data = await bank.getinfo();
      console.log('🚀 ~ file: index.js:102 ~ data:', data);
      setForm({ ...data?.data, isSwiftAccount: Boolean(data?.data.isSwiftAccount), id: +data?.data.id });
      setValueFormik(formikBank, 'bankName', data?.data?.bankName);
      setValueFormik(formikBank, 'accountNumber', data?.data?.accountNumber);
      setValueFormik(formikBank, 'beneficiary', data?.data?.beneficiary);
      setValueFormik(formikBank, 'country', data?.data?.country);
      setValueFormik(formikBank, 'isSwiftAccount', Boolean(data?.data?.isSwiftAccount));
      if (data?.data.isSwiftAccount === true) {
        setChecked(true);
      }
    })();
  }, []);

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
        <CountrySelect
          className="col-span-full mt-[14px] lg:mt-5"
          formik={formik}
          disabled={edit === null || edit === 1}
          handleChangeForm={handleChangeForm}
        />
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
                  setInfoBankPreEdit({ ...bankInfoForm, isSwiftAccount: Boolean(bankInfoForm?.isSwiftAccount) });
                  console.log(
                    '🚀 ~ file: index.js:193 ~ Form ~ Boolean(bankInfoForm?.isSwiftAccount):',
                    Boolean(bankInfoForm?.isSwiftAccount)
                  );
                  setChecked(Boolean(bankInfoForm?.isSwiftAccount));
                }}
                className="cursor-pointer"
                src={editIcon}
                alt="Edit icon"
              />
            )}
          </div>
          {edit === 1 && (
            <div className="flex gap-x-[18px] mt-[27px]">
              <p className="typo-body-1 text-text-1 font-medium">Add information manually</p>
              <SwitchButton checked={checked} handleChecked={handleChecked} />
            </div>
          )}
        </div>
        {/* Country Input */}
        <Input
          disabled={edit === null || edit === 0}
          className="col-span-full mt-[14px] lg:mt-[28px]"
          type="text"
          label={<IntlMessages id="common.country" />}
          name="country"
          value={formikBank.values?.country}
          formik={formikBank}
          onChange={handleChangeBankInfoForm}
        />
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
          label={checked ? 'Swift Code' : <IntlMessages id="account.accountNumber" />}
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
