import Head from 'next/head';
import ScreenLoaderLayout from 'layouts/ScreenLoader.layout';
import AuthNavbar from 'components/AuthNavbar';
import SidebarMenu from 'components/SidebarMenu';
import BannerBlue from 'components/BannerBlue';
import MenuButton from 'modules/dashboard/components/MenuButton';
import Form from 'modules/account/components/Form';
import IntlMessages from 'utils/IntlMessages';

export default function Account({ openSidebar, setOpenSidebar }) {
  return (
    <ScreenLoaderLayout>
      <>
        <Head>
          <title>FastwPay | Account</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <AuthNavbar />
        <main className="relative content-main max-h-screen sm:flex lg:flex-row lg:overflow-hidden">
          {/* Menu button */}
          <MenuButton openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

          <SidebarMenu
            className={`${!openSidebar ? 'hidden' : 'flex'} sm:flex`}
            open={openSidebar}
            setOpen={setOpenSidebar}
          />
          <div className="w-[100%] center-container sm:pb-6 lg:px-5 overflow-auto">
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
        </main>
        <style jsx>{`
          @media (min-width: 601px) {
            .center-container {
              max-height: calc(100vh - 48px);
              overflow: auto;
            }
          }
          @media (min-width: 1024px) {
            .content-main {
              height: calc(100vh - 64px);
            }
          }
        `}</style>
      </>
    </ScreenLoaderLayout>
  );
}
