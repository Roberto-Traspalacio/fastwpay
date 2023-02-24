import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import AuthNavbar from 'components/AuthNavbar';
import SidebarMenu from 'components/SidebarMenu';
import ReportCard from 'modules/admin/components/ReportCard';
import Summary from 'modules/admin/components/Summary';
import SummaryColumn from 'modules/admin/components/SummaryColumn';
import { Admin } from 'services/Admin.service';
import { SUCCESS_REQUEST_CODE } from 'utils/statusCodes';
import { UserContext } from 'context/user/context';
import { ScreenLoaderContext } from 'context/screenLoader/context';
import { ScreenLoader } from 'components';

export default function AdminDashboard() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [list, setList] = useState([]);
  const { getUserInfo } = useContext(UserContext);
  const { showScreenLoader, setShowScreenLoader } = useContext(ScreenLoaderContext);
  const admin = new Admin();

  useEffect(() => {
    (async () => {
      setShowScreenLoader(true);
      await getUserInfo();
      const data = await admin.listPayByAccount();
      if (data?.response.status == SUCCESS_REQUEST_CODE) {
        setList(data?.data?.items);
      }
      setShowScreenLoader(false);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>FastwPay | Admin Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthNavbar isAdmin />
      <main className="content-main sm:flex">
        {/* Menu button */}
        {/* <MenuButton openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} /> */}
        {openSidebar && <SidebarMenu className="hidden sm:block" admin open={openSidebar} setOpen={setOpenSidebar} />}
        <div className="sm:w-full center-container">
          <Summary className="col-span-full" setList={setList} />
          {/* List of reports mobile */}
          <div className="col-span-full flex flex-col gap-[18px] pt-[18px] px-[18px] sm:hidden pb-6">
            {list &&
              list.map((item) => (
                <ReportCard
                  key={item.id}
                  email={item.email}
                  total={item.total}
                  profit={item.profit}
                  totalToPay={item.totalToPay}
                />
              ))}
          </div>
          {/* List of report desktop */}
          <div className="pt-[18px] col-span-full pb-5 flex-col gap-[18px] sm:pt-0 sm:mt-10 hidden sm:flex">
            <div className="hidden col-span-full sm:pl-5 sm:grid-main overflow-auto">
              {/* Header */}
              <header className="col-span-full min-w-[874px] mt-10 grid-main pb-[14px] sm:mt-0">
                <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-start">Account</h5>
                <h5 className="col-span-2 col-start-3 typo-heading-4 text-text-1 font-bold text-center xl:col-span-2 lg:col-start-3 xl:col-start-7">
                  Total
                </h5>
                <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-center">Profit</h5>
                <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-center">Pay</h5>
              </header>
              {/* List */}
              {list &&
                list.map((item) => (
                  <SummaryColumn
                    key={item.id}
                    email={item.email}
                    total={item.total}
                    profit={item.profit}
                    totalToPay={item.totalToPay}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>
      {showScreenLoader && <ScreenLoader />}
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
  );
}
