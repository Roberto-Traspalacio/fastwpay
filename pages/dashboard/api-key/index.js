import { useState } from 'react';
import AuthNavbar from 'components/AuthNavbar';
import SidebarMenu from 'components/SidebarMenu';
import MenuButton from 'modules/dashboard/components/MenuButton';
import Head from 'next/head';
import BannerBlue from 'modules/dashboard/components/BannerBlue';
import { Button } from 'components';

export default function ApiKey() {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <>
      <Head>
        <title>Dashboard | API key</title>
      </Head>
      <AuthNavbar />
      <main className="sm:flex">
        <MenuButton openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        {openSidebar && <SidebarMenu open={openSidebar} setOpen={setOpenSidebar} />}
        <div className="grid-main w-[100%] col-span-full">
          <BannerBlue />
          <h3 className="typo-heading-3 col-span-full mt-10 pl-[18px] font-normal text-text-4 sm:mt-8 md:mt-[41px] lg:pl-0">
            API key
          </h3>
          {/* Linea */}
          <div className="ml-[18px] h-[3px] bg-background-4 col-span-full relative mt-2 md:mt-5 lg:ml-0">
            <div className="bg-primary-blue rounded-full w-8 h-[3px] absolute left-0 z-10"></div>
          </div>
          {/* Content information */}
          <div className="col-span-full px-[18px]">
            <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">Activating your plugin</h6>
            <p className="mt-3 typo-body-1 text-text-4">
              API keys are used to activate your plugins after installing them on your online store. To activate your
              product and enable plugin updates, simply enter your API Key in the "settings" tab within your WordPress
              Dashboard of your online store.
            </p>
            <h6 className="typo-heading-4 font-bold mt-8 text-text-4 sm:mt-6 lg:mt-8">Your API keys</h6>
            <p className="mt-3 typo-body-1 text-text-4">
              They can create new API Keys for different Online Stores and/or different clients. You can also disable or
              delete API keys that are no longer in use and those sites will no longer receive updates. You can create
              as many API keys as you need, but you can only use one per store.
            </p>
          </div>
          {/* Box input */}
          <div className="flex flex-col px-[18px] col-span-full">
            <input
              type="text"
              placeholder="Add name for reference..."
              className="w-[100%] rounded-[10px] typo-body-1 py-[11px] pl-6 bg-background-6 mt-3"
            />
            <Button className='min-w-[157px] m-auto mt-3 mb-6'>Generate Api key</Button>
          </div>
        </div>
      </main>
    </>
  );
}
