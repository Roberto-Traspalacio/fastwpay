import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'assets/logo.svg';
import menuPublicIcon from 'assets/menuPublic.svg';
import polygonIcon from 'assets/polygonWhite.svg';
import IntlMessages from 'utils/IntlMessages';
import { DOWNLOAD_PLUGIN_URL, languagesList } from 'utils/common';
import useLanguage from 'hooks/useLanguage';

export default function Navbar({ className, auth }) {
  const [showList, setShowList] = useState(false);
  const [showListOptions, setShowListOptions] = useState(false);
  const { push } = useRouter();
  const { language, selectLanguage } = useLanguage();

  return (
    <nav className={`col-span-full py-4 px-[18px] bg-primary-blue ${className} md:px-10 lg:px-10 xl:px-0`}>
      <div className="flex items-center justify-between w-full xl:max-w-[1160px] xl:mx-auto xl2:max-w-[1277px]">
        <Image alt="Logo" className="h-[18px] esm:h-[24px] md:h-8 w-[auto]" src={logo}></Image>
        <div className="flex items-center">
          {!auth && (
            <>
              <div className="flex items-center h-full cursor-pointer relative" onClick={() => setShowList(!showList)}>
                <p className="typo-body-1 text-white">{language}</p>
                <Image className="ml-2 w-[9px]" src={polygonIcon} alt="Polygon" />
                {/* List of language */}
                {showList && (
                  <div
                    className="absolute top-[24px] right-0 py-4 px-5 bg-white rounded-md z-30"
                    style={{ boxShadow: '0px 0px 9px 0px #0000001F' }}
                  >
                    <ul className="flex flex-col gap-4 z-50">
                      {languagesList.map((l) => (
                        <li
                          key={l.acronym}
                          className={`typo-body-1 ${language === l.country && 'text-primary-blue'}`}
                          onClick={() => selectLanguage(l.country, l.acronym)}
                        >
                          {l.country}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative md:hidden">
                <Image
                  className="ml-5 cursor-pointer"
                  src={menuPublicIcon}
                  alt="Menu"
                  onClick={() => setShowListOptions(!showListOptions)}
                />
                {showListOptions && (
                  <div className="absolute top-[24px] right-0 py-4 px-5 bg-white rounded-md z-30">
                    <ul className="flex flex-col gap-4 z-50">
                      <li className={`typo-body-1 cursor-pointer`} onClick={() => push('/login')}>
                        <IntlMessages id="auth.login" />
                      </li>
                      <Link href={DOWNLOAD_PLUGIN_URL}>
                        <li className={`typo-body-1 cursor-pointer`}>
                          <IntlMessages id="common.download" />
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
          <div className="hidden md:flex items-center ml-10 gap-5">
            <Link href="/login">
              <p className="text-white">
                <IntlMessages id="auth.login" />
              </p>
            </Link>
            <Link href={DOWNLOAD_PLUGIN_URL}>
              <button className="text-primary-blue bg-white h-8 px-5 rounded-[17px] typo-body-1 flex items-center justify-center">
                <IntlMessages id="common.download" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
