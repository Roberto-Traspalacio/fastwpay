export default function Input({ className, formik, type, name, label, onChange, disabled, value }) {
  return (
    <div className={className}>
      <label className="typo-body-2 ml-[8px] text-text-1" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        disabled={disabled}
        className={`w-[100%] h-9 mt-2 ${
          disabled ? 'bg-background-7' : 'bg-background-2'
        } rounded-lg text-text-2 pl-[14px] typo-body-1 sm:h-12 lg:mt-[10px] ${
          formik?.errors[name] && 'input-error mb-[4px] sm:mb-[4px] xl:mb-[5px]'
        }`}
        type={type}
        value={value}
      />
      {formik?.errors[name] && (
        <p className="input-error-message col-span-full mb-[14px] sm:col-start-2 typo-body-2 lg:col-start-3 lg:col-span-4 xl:col-span-full">
          {formik?.errors[name]}
        </p>
      )}
    </div>
  );
}
