import { useState } from 'react';
import editIcon from 'assets/edit.svg';
import useForm from 'hooks/useForm';
import Image from 'next/image';
import EditButtons from './EditButtons';
import Input from './Input';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  bank: '',
  accountNumber: '',
};

export default function Form() {
  const { form, handleChangeForm } = useForm(initialForm);
  const [edit, setEdit] = useState(null); // null = not edit - 0 = Edit Personal info - 1 = Edit Withdrawal info
  return (
    <form className="px-[18px] mt-[30px] grid-main pb-6 sm:px-5 sm:pb-0 sm:overflow-auto sm:mt-[40px] lg:px-0">
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-3 xl:col-span-4">
        {/* Personal Information */}
        <div className="col-span-full sm:col-start-1 md:col-start-2 md:col-start-end-7 lg:col-span-full">
          <div className="flex gap-[14px] items-center">
            <h6 className="typo-heading-4 text-text-1 font-bold">Personal Information</h6>
            <Image
              onClick={() => setEdit(edit === 0 ? null : 0)}
              className="cursor-pointer"
              src={editIcon}
              alt="Edit icon"
            />
          </div>
        </div>
        {/* Fisrt name & Last name */}
        <div className="grid-main col-span-full mt-6 md:col-span-6 md:col-start-2 lg:mt-[28px] xl:mt-[28px]">
          <Input
            disabled={edit === null || edit === 1}
            className="col-span-2 sm:col-span-4 lg:col-span-full xl:col-span-6"
            type="text"
            label="First Name"
          />
          <Input
            disabled={edit === null || edit === 1}
            className="col-span-2 sm:col-span-4 lg:col-span-full lg:mt-5 xl:col-span-6 xl:mt-0"
            type="text"
            label="Last Name"
          />
        </div>
        {/* Email */}
        <Input
          disabled={edit === null || edit === 1}
          className="col-span-full mt-[14px] md:col-span-6 md:col-start-2 lg:mt-5"
          type="text"
          label="Email"
        />
        {/* Country Select */}
        <div className="col-span-full mt-[18px] md:col-span-6 md:col-start-2 lg:mt-5">
          <label className="typo-body-2 mb-2 ml-[8px] text-text-1" htmlFor="countries">
            Country
          </label>
          <select
            disabled={edit === null || edit === 1}
            id="countries"
            name="country"
            className="bg-background-7 col-span-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[36px] typo-body-1 sm:h-12 sm:col-span-6 sm:col-start-2 xl:col-span-full lg:col-start-3 lg:col-span-4 md:col-span-6 md:col-start-2"
          >
            <option className="typo-body-1" selected disabled>
              Choose a country
            </option>
            <option value="ES">Spain</option>
            <option value="IT">Italy</option>
            <option value="AL">Germany</option>
            <option value="FR">France</option>
          </select>
        </div>
        {edit === 0 && <EditButtons className="mt-5" edit={edit} setEdit={setEdit} />}
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-3 lg:col-start-5 xl:col-span-4 xl:col-start-6">
        {/* Withdrawal information */}
        <div className="col-span-full mt-8 md:col-span-6 md:col-start-2 sm:mt-12 lg:mt-0">
          <div className="flex gap-[14px] items-center">
            <h6 className="typo-heading-4 text-text-1 font-bold">Withdrawal information</h6>
            <Image
              onClick={() => setEdit(edit === 1 ? null : 1)}
              className="cursor-pointer"
              src={editIcon}
              alt="Edit icon"
            />
          </div>
        </div>
        {/* Bank Select */}
        <div className="col-span-full mt-6 md:col-span-6 md:col-start-2 xl:mt-[28px]">
          <label className="typo-body-2 mb-2 ml-[8px] text-text-1" htmlFor="countries">
            Bank
          </label>
          <select
            disabled={edit === null || edit === 0}
            id="banks"
            name="bank"
            className={`bg-background-7 col-span-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[36px] typo-body-1 sm:h-12 sm:col-span-6 sm:col-start-2 xl:col-span-full lg:col-start-3 lg:col-span-4 lg:mt-[10px]`}
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
          className="col-span-full mt-[18px] md:col-span-6 md:col-start-2 lg:mt-5"
          type="text"
          label="Account number"
        />
        {edit === 1 && <EditButtons className="mt-5" edit={edit} setEdit={setEdit} />}
      </div>
    </form>
  );
}
