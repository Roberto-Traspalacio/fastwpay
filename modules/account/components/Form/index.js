import { useContext, useEffect, useState } from 'react';
import editIcon from 'assets/edit.svg';
import useForm from 'hooks/useForm';
import Image from 'next/image';
import EditButtons from '../EditButtons';
import Input from '../Input';
import { useFormik } from 'formik';
import { useYupValidations } from './yup';
import { UserContext } from 'context/user/context';
import { setValueFormik } from 'utils/setValueFormik';

const initialUserInfo = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
};

const intialUserInfoArray = ['firstName', 'lastName', 'email', 'country'];

export default function Form() {
  const [edit, setEdit] = useState(null); // null = not edit - 0 = Edit Personal info - 1 = Edit Withdrawal info
  const { validationSchema } = useYupValidations();
  const formik = useFormik({
    initialValues: initialUserInfo,
    onSubmit: () => onSubmit(),
    validationSchema,
  });
  const { form, handleChangeForm } = useForm(initialUserInfo, formik);
  const SUCCESS_REQUEST_CODE = 201;
  const { userInfo, getUserInfo } = useContext(UserContext);

  const cancel = () => {
    setEdit(null);
    formik.setErrors({});
  };

  const onSubmit = async () => {
    console.log('SE ESTA ACTUALIZANDO LA INFORMACION DEL USUARIO');
  };

  useEffect(() => {
    intialUserInfoArray.map((e) => {
      setValueFormik(formik, e, userInfo[e]);
    });
  }, [userInfo]);

  useEffect(() => {
    getUserInfo();
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
            <h6 className="typo-heading-4 text-text-1 font-bold">Personal Information</h6>
            {edit !== 0 && (
              <Image
                onClick={() => setEdit(edit === 0 ? null : 0)}
                className="cursor-pointer"
                src={editIcon}
                alt="Edit icon"
              />
            )}
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
            label="First Name"
            name="firstName"
            formik={formik}
            value={formik.values.firstName}
            onChange={handleChangeForm}
          />
          <Input
            disabled={edit === null || edit === 1}
            className="col-span-2 sm:col-span-4 lg:col-span-full xl:col-span-6"
            type="text"
            label="Last Name"
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
          label="Email"
          name="email"
          formik={formik}
          value={formik.values.email}
          onChange={handleChangeForm}
        />
        {/* Country Select */}
        <div className="col-span-full mt-[14px] lg:mt-5">
          <label className="typo-body-2 mb-2 ml-[8px] text-text-1" htmlFor="countries">
            Country
          </label>
          <select
            disabled={edit === null || edit === 1}
            id="countries"
            name="country"
            onChange={handleChangeForm}
            value={formik.values.country}
            className={`${
              edit === null || edit === 1 ? 'bg-background-7' : 'bg-background-2'
            } col-span-full text-gray-900 text-sm mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[36px] typo-body-1 sm:h-12 sm:col-span-6 sm:col-start-2 xl:col-span-full lg:col-start-3 lg:col-span-4 md:col-span-6 md:col-start-2 ${
              formik?.errors.country && 'input-error mb-[4px] xl:mb-[5px]'
            }`}
          >
            <option className="typo-body-1" selected disabled>
              Choose a country
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
      <form className="px-[18px] mt-8 sm:mt-8 lg:mt-10 col-span-full pb-6 sm:px-5 sm:overflow-auto md:col-span-6 md:col-start-2 md:col-end-8 md:px-0 lg:col-span-3 lg:col-start-5 xl:col-span-4 xl:col-start-6">
        {/* Withdrawal information */}
        <div className="col-span-full">
          <div className="flex gap-[14px] items-center">
            <h6 className="typo-heading-4 text-text-1 font-bold">Withdrawal information</h6>
            {edit !== 1 && (
              <Image
                onClick={() => setEdit(edit === 1 ? null : 1)}
                className="cursor-pointer"
                src={editIcon}
                alt="Edit icon"
              />
            )}
          </div>
        </div>
        {/* Bank Select */}
        <div className="col-span-full mt-[18px] sm:mt-6 xl:mt-[28px]">
          <label className="typo-body-2 mb-2 ml-[8px] text-text-1" htmlFor="countries">
            Bank
          </label>
          <select
            disabled={edit === null || edit === 0}
            id="banks"
            name="bank"
            className={`${
              edit === null || edit === 0 ? 'bg-background-7' : 'bg-background-2'
            } col-span-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[36px] typo-body-1 sm:h-12 sm:col-span-6 sm:col-start-2 xl:col-span-full lg:col-start-3 lg:col-span-4 lg:mt-[10px]`}
          >
            <option selected disabled>
              Choose a bank
            </option>
            <option value="ES">BBVA</option>
            <option value="IT">Banesco</option>
            <option value="AL">Facebank</option>
            <option value="FR">Ontop</option>
          </select>
        </div>
        {/* Account Number */}
        <Input
          disabled={edit === null || edit === 0}
          className="col-span-full mt-[18px] lg:mt-5"
          type="text"
          label="Account number"
        />
        {edit === 1 && <EditButtons className="mt-5" edit={edit} setEdit={setEdit} />}
      </form>
    </div>
  );
}
