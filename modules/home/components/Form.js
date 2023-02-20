import IntlMessages from 'utils/IntlMessages';
import Button from '../../../components/Button';

export default function Form({ children }) {
  return (
    <form className="grid-main bg-background-2 pt-14 gap-x-3 full-bleed-section lg:pb-20 ">
      <div className="mb-6 font-bold text-center typo-heading-1 col-span-full text-text-1 md:mb-16">
        <IntlMessages id="landing.contact.title" />
      </div>
      <div className="mb-2 label-name typo-body-2 sm:col-start-2 col-span-full xl:col-start-7 text-text-1 lg:col-start-3 lg:col-span-4">
        <IntlMessages id="common.name" />
      </div>
      <input
        type="text"
        className="input-name col-span-full rounded-md mb-[18px] py-4 px-5 typo-body-1 sm:col-span-6  sm:col-start-2 xl:col-start-7 xl:col-span-5 lg:col-start-3 lg:col-span-4"
      />
      <div className="mb-2 label-email typo-body-2 sm:col-start-2 col-span-full xl:col-start-7 text-text-1 lg:col-start-3 lg:col-span-4">
        <IntlMessages id="common.email" />
      </div>
      <input
        type="text"
        className="input-email col-span-full rounded-md mb-[18px] py-4 px-5 typo-body-1 sm:col-span-6 sm:col-start-2 xl:col-start-7 xl:col-span-5 lg:col-start-3 lg:col-span-4"
      />
      <div className="mb-2 label-message typo-body-2 sm:col-start-2 col-span-full xl:col-start-7 text-text-1 lg:col-start-3 lg:col-span-4">
        <IntlMessages id="common.message" />
      </div>
      <textarea
        type="text"
        className="px-5 py-4 mb-4 rounded-md input-message col-span-full typo-body-1 sm:col-start-2 sm:col-span-6 xl:col-start-7 xl:col-span-5 lg:col-start-3 lg:col-span-4"
      />
      <Button className="col-span-full sm:col-start-2 sm:col-span-6 md:col-start-2 md:col-span-6 xl:col-start-10 xl:col-span-2 xl:mt-6 lg:col-start-3 lg:col-span-4">
        <IntlMessages id="common.submit" />
      </Button>
      {children}
    </form>
  );
}
