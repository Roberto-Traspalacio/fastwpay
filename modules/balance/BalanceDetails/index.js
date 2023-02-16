import AuthNavbar from 'components/AuthNavbar';
import SidebarMenu from 'components/SidebarMenu';
import ListBalanceDetails from 'modules/balance/components/ListBalanceDetails';
import BannerBlue from 'components/BannerBlue';
import MenuButton from 'modules/dashboard/components/MenuButton';
import Head from 'next/head';
import { useRouter } from 'next/router';
import IntlMessages from 'utils/IntlMessages';

export default function BalanceDetails({ openSidebar, setOpenSidebar }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Balance</title>
      </Head>
      <AuthNavbar />
      <main className="sm:flex sm:flex-row relative content-main">
        <MenuButton openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <SidebarMenu
          className={`${!openSidebar ? 'hidden' : 'flex'} sm:flex`}
          open={openSidebar}
          setOpen={setOpenSidebar}
        />
        <div className="overflow-auto w-full">
          <BannerBlue className="sm:mx-[20px]" />
          <div className="px-[18px] center-container col-span-full sm:px-5 w-[100%]">
            <h3 className="typo-heading-2 col-span-full mt-10 font-normal text-text-4 sm:mt-8 md:mt-[41px] lg:pl-0">
              <IntlMessages id={`${router?.query?.rfc}`} />
            </h3>
            {/* Linea */}
            <div className="h-[3px] bg-background-4 col-span-full relative mt-2 md:mt-5 lg:ml-0">
              <div className="bg-primary-blue rounded-full w-8 h-[3px] absolute left-0 z-10"></div>
            </div>
            <ListBalanceDetails />
          </div>
        </div>
      </main>
      <style jsx>{`
        @media (min-width: 601px) {
          .content-main {
            height: calc(100vh - 48px);
          }
        }
        @media (min-width: 1024px) {
          .content-main {
            height: calc(100vh - 64px);
          }
        }
      `}</style>
    </>
  );
}
