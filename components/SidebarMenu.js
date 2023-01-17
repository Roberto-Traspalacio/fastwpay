import dashboardIcon from 'assets/dashboard.svg';
import lockIcon from 'assets/lock_open.svg';
import personIcon from 'assets/person.svg';
import logoutIcon from 'assets/logout.svg';
import summaryIcon from 'assets/summarize.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SidebarMenu({ open, setOpen, className, admin }) {
  const router = useRouter();
  const closeSidebar = (e) => {
    if (e.target.className.includes('box')) {
      setOpen(false);
    }
  };
  return (
    <>
      <div
        className={`box z-10 fixed top-0 left-0 right-0 bottom-0 sm:relative ${className}`}
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        onClick={(e) => closeSidebar(e)}
      >
        <div className="w-[110px] h-[100%] bg-primary-blue pt-4 flex flex-col relative xl:w-[216px]">
          {!admin ? (
            <>
              <Link href="/dashboard">
                <div
                  className={`item flex flex-col items-center justify-center py-[11px] ${
                    router.pathname === '/dashboard' && 'item-active'
                  }`}
                >
                  <Image src={dashboardIcon} alt="Dashboard icon" />
                  <p className={`mt-[6px] text-white typo-body-1`}>Dashboard</p>
                </div>
              </Link>
              <Link href="/dashboard/api-key">
                <div
                  className={`item flex flex-col items-center justify-center py-[11px] ${
                    router.pathname === '/dashboard/api-key' && 'item-active'
                  }`}
                >
                  <Image src={lockIcon} alt="Dashboard icon" />
                  <p className="mt-[6px] text-white typo-body-1">API key</p>
                </div>
              </Link>
              <Link href="/account">
                <div
                  className={`item flex flex-col items-center justify-center py-[11px] ${
                    router.pathname === '/account' && 'item-active'
                  }`}
                >
                  <Image src={personIcon} alt="Dashboard icon" />
                  <p className="mt-[6px] text-white typo-body-1">Account</p>
                </div>
              </Link>
            </>
          ) : (
            <Link href="/admin/dashboard">
              <div
                className={`item flex flex-col items-center justify-center py-[11px] ${
                  router.pathname === '/account' && 'item-active'
                }`}
              >
                <Image src={summaryIcon} alt="Dashboard icon" />
                <p className="mt-[6px] text-white typo-body-1">Summary</p>
              </div>
            </Link>
          )}
          <div className="item flex flex-col items-center justify-center py-[11px] absolute bottom-0 left-0 right-0 xl:pl-8 xl:py-[25px]">
            <Image src={logoutIcon} alt="Logout icon" />
            <p className="mt-[6px] text-white typo-body-1">Logout</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
          /* height: calc(100vh - 48px); */
          height: 100vh;
        }
        .item {
          cursor: pointer;
        }
        .item:hover {
          background: #5580ce;
        }
        .item-active {
          background: #5580ce !important;
        }
        @media (min-width: 601px) {
          .box {
            height: calc(100vh - 48px);
          }
        }
        @media (min-width: 1280px) {
          .item {
            flex-direction: row;
            align-items: center;
            column-gap: 24px;
            justify-content: flex-start;
            padding-left: 32px;
          }
          .item > p {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
