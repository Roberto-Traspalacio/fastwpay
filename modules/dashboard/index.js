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
    <AppLayout title="Dashboard">
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
                Lorem ipsum dolor sit amet consectetur. Donec sagittis netus vulputate.
              </p>
              <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">Information</h6>
              <p className="mt-3 typo-body-1 text-text-4">
                Lorem ipsum dolor sit amet consectetur. Donec sagittis netus vulputate pellentesque a et sapien mauris.
                Vitae penatibus dui sed pellentesque massa at. Risus orci nunc eu turpis lectus eget. Eget dolor nunc
                fermentum scelerisque enim consequat enim.
              </p>
              <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">Information</h6>
              <p className="mt-3 typo-body-1 text-text-4 pb-6">
                Lorem ipsum dolor sit amet consectetur. Vulputate cras consectetur maecenas enim pretium iaculis. Lacus
                purus orci egestas sit id adipiscing adipiscing ultricies. Cum magna sem diam ultrices elit donec. Proin
                a feugiat orci nec at ut facilisis. Posuere pellentesque eu velit ornare. Risus egestas nec bibendum
                purus eleifend augue. Netus ut lacus in senectus justo sed purus at. Orci gravida pharetra nisl sit sed.
                Arcu dictum nisl pretium at dictum ultricies. Aliquet eu elementum lacus sapien nunc pharetra facilisis
                diam eu. Tortor adipiscing fermentum sed duis. Adipiscing quis ultrices tempus tristique sit urna. Erat
                nisi tellus diam at viverra velit augue tempus rutrum. Sed accumsan sit ac amet lectus libero.
              </p>
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
