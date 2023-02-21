import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import dashboardIcon from 'assets/dashboard.svg';
import lockIcon from 'assets/lock_open.svg';
import personIcon from 'assets/person.svg';
import logoutIcon from 'assets/logout.svg';
import summaryIcon from 'assets/summarize.svg';
import balanceIcon from 'assets/balance.svg';
import { ScreenLoaderContext } from 'context/screenLoader/context';
import IntlMessages from 'utils/IntlMessages';
import { UserContext } from 'context/user/context';

const userViews = [
  {
    path: '/dashboard',
    icon: dashboardIcon,
    text: <IntlMessages id="dashboard.title" />,
  },
  {
    path: '/api-key',
    icon: lockIcon,
    text: <IntlMessages id="apiKey.title" />,
  },
  {
    path: '/account',
    icon: personIcon,
    text: <IntlMessages id="account.title" />,
  },
  {
    path: '/balance',
    icon: balanceIcon,
    text: <IntlMessages id="common.balance" />,
  },
];

const adminViews = [
  {
    path: '/admin/dashboard',
    icon: summaryIcon,
    text: 'Summary',
  },
];

export default function SidebarMenu({ setOpen, className, admin: isAdmin }) {
  const { setShowScreenLoader } = useContext(ScreenLoaderContext);
  const { reset } = useContext(UserContext);
  const { push, pathname } = useRouter();
  const list = !isAdmin ? userViews : adminViews;

  const closeSidebar = (e) => {
    if (e.target.className.includes('box')) {
      setOpen(false);
    }
  };

  const logout = () => {
    setShowScreenLoader(true);
    Cookies.remove('auth');
    push('/login');
    reset();
    setTimeout(() => {
      setShowScreenLoader(false);
    }, 2500);
  };

  return (
    <>
      <div
        className={`box z-10 fixed top-0 left-0 right-0 bottom-0 sm:relative ${className}`}
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        onClick={(e) => closeSidebar(e)}
      >
        <div className="w-[110px] h-full bg-primary-blue pt-4 flex flex-col relative xl:w-[216px]">
          {list.map((view) => (
            <Link href={view.path}>
              <div
                onClick={() => setOpen(false)}
                className={`item cursor-pointer flex flex-col items-center justify-center py-[11px] xl:flex-row xl:items-center xl:gap-6 xl:justify-start xl: pl-8 ${
                  pathname === view.path && 'item-active'
                }`}
              >
                <Image src={view.icon} alt="Sidebar icon" />
                <p className={`mt-[6px] text-white typo-body-1 xl:m-0`}>{view.text}</p>
              </div>
            </Link>
          ))}
          <div
            className="item cursor-pointer flex flex-col items-center justify-center py-[11px] absolute bottom-16 sm:bottom-0 left-0 right-0 xl:pl-8 xl:py-[25px] xl:flex-row xl:gap-6 xl:justify-start"
            onClick={logout}
          >
            <Image src={logoutIcon} alt="Logout icon" />
            <p className="mt-[6px] text-white typo-body-1 xl:m-0">
              <IntlMessages id="common.logout" />
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
          height: 100vh;
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
        @media (min-width: 1024px) {
          .box {
            height: calc(100vh - 64px);
          }
        }
      `}</style>
    </>
  );
}
