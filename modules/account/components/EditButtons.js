import Loader from 'components/Loader';
import IntlMessages from 'utils/IntlMessages';

export default function EditButtons({ className, cancel, loading, setLoading }) {
  return (
    <div className={`grid-main col-span-full md:col-start-2 sm:mt-6 ${className}`}>
      <button
        type="button"
        onClick={cancel}
        className="flex items-center justify-center h-[36px] rounded-[19px] typo-body-1 col-span-2 text-primary-blue border border-primary-blue lg:col-span-3 xl:col-span-4"
      >
        <IntlMessages id="common.cancel" />
      </button>
      <button
        type="submit"
        className="flex items-center justify-center h-[36px] rounded-[19px] typo-body-1 col-span-2 text-white bg-primary-blue lg:col-span-3 xl:col-span-4"
      >
        {loading ? <Loader /> : <IntlMessages id="common.save" />}
      </button>
    </div>
  );
}
