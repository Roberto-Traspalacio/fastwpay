import { useState } from 'react';
import AuthNavbar from 'components/AuthNavbar';
import SidebarMenu from 'components/SidebarMenu';
import MenuButton from 'modules/dashboard/components/MenuButton';
import Head from 'next/head';
import BannerBlue from 'modules/dashboard/components/BannerBlue';
import { Button } from 'components';
import ListApikeys from 'modules/dashboard/components/ListApikeys';

export default function ApiKey() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [tab, setTab] = useState(0);
  return (
    <>
      <Head>
        <title>Dashboard | API key</title>
      </Head>
      <AuthNavbar />
      <main className="sm:flex relative content-main">
        <MenuButton openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        {openSidebar && <SidebarMenu open={openSidebar} setOpen={setOpenSidebar} />}
        <div className="px-[18px] center-container col-span-full sm:px-5 w-[100%]">
          <BannerBlue />
          <h3 className="typo-heading-3 col-span-full mt-10 font-normal text-text-4 sm:mt-8 md:mt-[41px] lg:pl-0">
            API key
          </h3>
          {/* Linea */}
          <div className="h-[3px] bg-background-4 col-span-full relative mt-2 md:mt-5 lg:ml-0">
            <div className="bg-primary-blue rounded-full w-8 h-[3px] absolute left-0 z-10"></div>
            <button
              onClick={() => setTab(0)}
              className={`${
                tab === 0 ? 'tab-active' : 'tab'
              } absolute right-[113px] top-[-38px] xsm:top-[-40px] typo-body-1 py-[10px] px-[13px] sm:top-[-44px] sm:right-[150px]`}
            >
              Create
            </button>
            <button
              onClick={() => setTab(1)}
              className={`${
                tab === 1 ? 'tab-active' : 'tab'
              } flex items-center gap-1 absolute py-[10px] px-[13px] top-[-38px] xsm:top-[-40px] right-0 typo-body-1 text-text-2 font-normal sm:top-[-44px]`}
            >
              List Api Keys
              <p className="w-4 h-4 flex items-center justify-center rounded-full bg-[#626263] text-white typo-body-3">
                7
              </p>
            </button>
          </div>
          {/* Content information */}
          {tab === 0 ? (
            <div className="lg:px-0 lg:grid-main">
              <div className="col-span-3 xl:col-span-5">
                <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">Activating your plugin</h6>
                <p className="mt-3 typo-body-1 text-text-4 text-justify">
                  API keys are used to activate your plugins after installing them on your online store. To activate
                  your product and enable plugin updates, simply enter your API Key in the "settings" tab within your
                  WordPress Dashboard of your online store.
                </p>
              </div>
              <div className="col-start-5 col-span-4 xl:col-start-7 xl:col-span-6">
                <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">Your API keys</h6>
                <p className="mt-3 typo-body-1 text-text-4 text-justify">
                  They can create new API Keys for different Online Stores and/or different clients. You can also
                  disable or delete API keys that are no longer in use and those sites will no longer receive updates.
                  You can create as many API keys as you need, but you can only use one per store.
                </p>
                {/* Box input */}
                <div className="flex flex-col col-span-full mt-3 sm:flex-row sm:items-center sm:gap-5 lg:px-0 xl:justify-between">
                  <input
                    type="text"
                    placeholder="Add name for reference..."
                    className="w-[100%] rounded-[10px] typo-body-1 py-[11px] pl-6 bg-background-6 sm:w-[239px] xl:w-[314px]"
                  />
                  <Button className="min-w-[157px] m-auto mt-3 mb-6 sm:mt-0 sm:mb-0 sm:m-0 sm:min-w-[172px]">
                    Generate Api key
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <ListApikeys />
          )}
        </div>
      </main>
      <style jsx>{`
        .tab {
          border-top: 3px solid transparent;
          border-left: 3px solid transparent;
          border-right: 3px solid transparent;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        .tab-active {
          border-top: 3px solid #e8e8e8;
          border-left: 3px solid #e8e8e8;
          border-right: 3px solid #e8e8e8;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          background: #d7e1f3;
          color: #295bb7;
        }
        .tab-active > p {
          background: #295bb7;
        }
        @media (min-width: 601px) {
          .center-container {
            max-height: calc(100vh - 48px);
            overflow: auto;
          }
        }
        @media (min-width: 1024px) {
          .content-main {
            height: calc(100vh - 48px);
          }
        }
      `}</style>
    </>
  );
}
