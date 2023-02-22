import ListBalanceDetails from 'modules/balance/components/ListBalanceDetails';
import BannerBlue from 'components/BannerBlue';
import { useRouter } from 'next/router';
// import IntlMessages from 'utils/IntlMessages';
import AppLayout from 'layouts/app.layout';

export default function BalanceDetails() {
  const router = useRouter();
  return (
    <AppLayout title="Balance">
      <div className="overflow-auto w-full">
        <BannerBlue className="sm:mx-[20px]" />
        <div className="px-[18px] center-container col-span-full sm:px-5 w-[100%]">
          <h3 className="typo-heading-2 col-span-full mt-10 font-normal text-text-4 sm:mt-8 md:mt-[41px] lg:pl-0">
            {router?.query?.rfc}
          </h3>
          {/* Linea */}
          <div className="h-[3px] bg-background-4 col-span-full relative mt-2 md:mt-5 lg:ml-0">
            <div className="bg-primary-blue rounded-full w-8 h-[3px] absolute left-0 z-10"></div>
          </div>
          <ListBalanceDetails />
        </div>
      </div>
    </AppLayout>
  );
}
