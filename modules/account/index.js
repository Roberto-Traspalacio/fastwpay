import BannerBlue from 'components/BannerBlue';
import Form from 'modules/account/components/Form';
import IntlMessages from 'utils/IntlMessages';
import AppLayout from 'layouts/app.layout';

export default function Account() {
  return (
    <AppLayout title="FastwPay | Account">
      <div className="w-[100%] center-container sm:pb-6 lg:px-5 sm:overflow-auto">
        <BannerBlue className="sm:mx-5 lg:mx-0" />
        <h3 className="typo-heading-2 col-span-full mt-8 pl-[18px] sm:pl-5 font-normal text-text-4 sm:mt-8 md:mt-[41px] lg:pl-0">
          <IntlMessages id="account.title" />
        </h3>
        {/* Linea */}
        <div className="ml-[18px] h-[3px] bg-background-4 col-span-full relative mt-2 sm:ml-5 md:mt-5 lg:ml-0">
          <div className="bg-primary-blue rounded-full w-8 h-[3px] absolute left-0 z-10"></div>
        </div>
        <Form />
      </div>
    </AppLayout>
  );
}
