import { useContext, useEffect, useState } from 'react';
import { AuthNavbar, ScreenLoader, SidebarMenu } from 'components';
import { ScreenLoaderContext } from 'context/screenLoader/context';
import MenuButton from 'modules/dashboard/components/MenuButton';
import Head from 'next/head';

export default function AppLayout({ children, title = '' }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { showScreenLoader } = useContext(ScreenLoaderContext);

  useEffect(() => {
    if (openSidebar) {
      document.querySelector(':root').style.overflow = 'hidden';
    } else {
      document.querySelector(':root').style.overflow = 'initial';
    }
  }, [openSidebar]);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <AuthNavbar />
      <section className="sm:flex relative max-h-screen content-main sm:overflow-hidden">
        {/* Menu button */}
        <MenuButton openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <SidebarMenu
          className={`${!openSidebar ? 'hidden' : 'flex'} sm:flex`}
          open={openSidebar}
          setOpen={setOpenSidebar}
        />
        {children}
      </section>
      {showScreenLoader && <ScreenLoader />}
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
    </div>
  );
}
