// This component render the next tags: label, input and p tag with error message
export default function Input({ formik, type, name, label, onChange, className }) {
  return (
    <>
      <label className="mb-2 sm:mb-[10px] label-name typo-body-2 sm:text-sm sm:tracking-wider sm:col-start-2 col-span-full text-text-1 lg:col-start-3 lg:col-span-4 xl:col-span-full">
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className={`${className} input-name bg-background-2 h-9 col-span-full rounded-md mb-[18px] sm:rounded-[10px] sm:mb-5 sm:h-12 py-4 px-5 typo-body-1 sm:col-span-6 sm:col-start-2  xl:col-span-full lg:col-start-3 lg:col-span-4 ${
          formik.errors[name] && 'input-error mb-[4px] xl:mb-[5px]'
        }`}
      />
      {formik.errors[name] && (
        <p className="input-error-message col-span-full mb-[14px] sm:col-start-2 typo-body-2 lg:col-start-3 lg:col-span-4 xl:col-span-full">
          {formik.errors[name]}
        </p>
      )}
    </>
  );
}
