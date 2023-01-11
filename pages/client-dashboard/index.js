import AuthNavbar from 'components/AuthNavbar';
import menuIcon from 'assets/menu.svg';
import Image from 'next/image';
import { Button } from 'components';
import BalanceCard from 'modules/client-dashboard/components/BalanceCard';
import SidebarMenu from 'components/SidebarMenu';
import { useState } from 'react';

export default function ClientDashboard() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <AuthNavbar />
      <main className="grid-main relative">
        {/* Menu button */}
        <div className="bg-primary-blue w-10 col-span-full h-10 mt-[10px] flex items-center justify-center rounded-r-[7px]" onClick={() => setOpenSidebar(!openSidebar)}>
          <Image src={menuIcon} alt="Hambuger menu white" className="w-[17px] h-[12px]" />
        </div>
        {
          openSidebar && <SidebarMenu open={openSidebar} setOpen={setOpenSidebar} />
        }
        {/* Banner blue */}
        <div className="grid-main gap-x-3 col-span-full bg-background-2 py-[16px] h-[110px] mt-[10px]">
          <h3 className="typo-body-1 text-center m-auto max-w-[32ch] col-span-full">
            This plugin is free and only charges commission per sale
          </h3>
          <button className="m-auto col-span-full flex items-center justify-center bg-primary-blue text-white py-[10px] px-[24px] h-[34px] rounded-full mt-3">
            <p className="typo-body-1">Download</p>
          </button>
        </div>
        <h3 className="typo-heading-3 col-span-full mt-10 pl-[18px]">Dashboard</h3>
        <div className="ml-[18px] h-[3px] bg-background-4 col-span-full relative mt-2">
          <div className="bg-primary-blue rounded-full w-8 h-[3px] absolute left-0 z-10"></div>
        </div>
        {/* Balance */}
        <div className='px-[18px] pt-9 col-span-full'>
          <BalanceCard />
        </div>
      </main>
    </>
  );
}
