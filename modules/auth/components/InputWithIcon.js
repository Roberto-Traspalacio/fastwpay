import checkIcon from 'assets/check.svg';
import cancelIcon from 'assets/cancel.svg';
import Image from 'next/image';

export default function InputWithIcon({ formik, type, name, label, onChange, className }) {
  return (
    <>
      <label className="mb-2 sm:mb-[10px] label-name typo-body-2 sm:text-sm sm:tracking-wider sm:col-start-2 col-span-full text-text-1 lg:col-start-3 lg:col-span-4 xl:col-span-full">
        {label}
      </label>
      <div
        className={`flex items-center justify-between border col-span-full h-9 bg-background-2 rounded-md mb-[18px] pl-1 pr-[13px] sm:rounded-[10px] sm:h-12 sm:mb-5 sm:col-span-6 sm:col-start-2 xl:col-span-full lg:col-start-3 lg:col-span-4 ${
          formik.errors[name] && 'input-error mb-[4px] sm:mb-[4px] xl:mb-[5px]'
        }`}
      >
        <input
          type={type}
          name={name}
          onChange={onChange}
          className={`input-name bg-background-2 outline-none h-8 w-[100%] sm:h-11 py-4 px-4 typo-body-1 ${className}`}
        />
        {/* {formik.errors[name] && (
          <Image alt="Cancel icon" src={cancelIcon} width="16px" height="16px" className="w-4 h-4" />
        )} */}
        {formik.values?.newPassword === formik.values?.repeatNewPassword ? (
          <Image alt="Check icon" src={checkIcon} width="16px" height="16px" className="w-4 h-4" />
        ) : (
          <Image alt="Cancel icon" src={cancelIcon} width="16px" height="16px" className="w-4 h-4" />
        )}
      </div>
      {formik.errors[name] && (
        <p className="input-error-message col-span-full mb-[14px] sm:col-start-2 typo-body-2 lg:col-start-3 lg:col-span-4 xl:col-span-full">
          {formik.errors[name]}
        </p>
      )}
    </>
  );
}
