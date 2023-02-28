import { useContext, useEffect } from 'react';
import { UserContext } from 'context/user/context';
import BalanceCard from 'modules/dashboard/components/BalanceCard';
import BannerBlue from 'components/BannerBlue';
import IntlMessages from 'utils/IntlMessages';
import LastTransactions from './components/LastTransactions';
import AppLayout from 'layouts/app.layout';

export default function Dashboard() {
  const { userInfo, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    if (!userInfo?.firstName) {
      getUserInfo();
    }
  }, []);

  return (
    <AppLayout title="FastwPay | Dashboard">
      <div className="grid-main col-span-full sm:overflow-auto">
        {/* Center container */}
        <div className="center-container col-span-full sm:px-5">
          <BannerBlue />
          <h3 className="typo-heading-2 col-span-full mt-10 pl-[18px] font-normal text-text-4 sm:mt-8 md:mt-[41px] lg:pl-0">
            <IntlMessages id="dashboard.title" />
          </h3>
          {/* Linea */}
          <div className="ml-[18px] h-[3px] bg-background-4 col-span-full relative mt-2 md:mt-5 lg:ml-0">
            <div className="bg-primary-blue rounded-full w-8 h-[3px] absolute left-0 z-10"></div>
          </div>
          {/* Balance */}
          <div className="flex flex-col-reverse md:grid-main px-[18px] pt-9 col-span-full sm:pt-12 md:px-0 lg:pt-8">
            {/* Container information */}
            <div className="md:col-span-full lg:col-span-3 xl:col-span-7 lg:pb-6">
              <p className="typo-heading-3 text-primary-blue text-center mt-[33px] font-bold esm:mt-[35px] sm:mt-[58px] md:mt-[41px] lg:mt-0 lg:text-start">
                <IntlMessages id="common.welcome" /> {userInfo.firstName + ' ' + userInfo.lastName}!
              </p>
              <p className="typo-body-1 text-center mt-[10px] esm:mt-[7px] text-text-4 sm:mt-[2px] lg:text-start">
                <IntlMessages id="dashboard.welcome.text" />
              </p>
              <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">Information</h6>
              <ul>
                <li className="ml-6 list-disc">
                  <p className="mt-3 typo-body-1 text-text-4">
                    <IntlMessages id="dashboard.welcome.text2.option1" />
                  </p>
                </li>
                <li className="ml-6 list-disc">
                  <p className="mt-3 typo-body-1 text-text-4">
                    <IntlMessages id="dashboard.welcome.text2.option2" />
                  </p>
                </li>
              </ul>
              <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">Suggestions</h6>
              <ul>
                <li className="ml-6 list-disc">
                  <p className="mt-3 typo-body-1 text-text-4 pb-6">
                    <IntlMessages id="dashboard.welcome.text3.option1" />
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:col-span-6 md:row-start-1 md:col-start-2 lg:col-span-4 lg:col-start-5 xl:col-start-9">
              <BalanceCard />
              <LastTransactions />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
