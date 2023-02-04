import IntlMessages from 'utils/IntlMessages';

export default function CountrySelect({ className, formik, disabled, edit, handleChangeForm }) {
  return (
    <div className={`${className}`}>
      <label className="typo-body-2 mb-2 ml-[8px] text-text-1" htmlFor="countries">
        <IntlMessages id="common.country" />
      </label>
      <select
        disabled={disabled}
        id="countries"
        name="country"
        onChange={handleChangeForm}
        value={formik.values.country}
        className={`${
          edit === null || edit === 1 ? 'bg-background-7' : 'bg-background-2'
        } col-span-full text-gray-900 text-sm border-r-[20px] border-transparent mt-2 rounded-lg block w-full p-2.5 h-[36px] typo-body-1 sm:h-12 sm:col-span-6 sm:col-start-2 xl:col-span-full lg:col-start-3 lg:col-span-4 md:col-span-6 md:col-start-2 ${
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
  );
}
