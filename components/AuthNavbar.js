import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { UserContext } from 'context/user/context';
import avatarIcon from 'assets/avatar.svg';
import logoBlue from 'assets/logoBlue.svg';
import mobileLogo from 'assets/mobile-logo.svg';
import polygonIcon from 'assets/polygon.svg';
import IntlMessages from 'utils/IntlMessages';
import { languagesList } from 'utils/common';

export default function AuthNavbar({ isAdmin }) {
  const [showList, setShowList] = useState(false);
  const { push, locale, pathname } = useRouter();
  const [language, setLanguage] = useState(languagesList.find((l) => l.acronym === locale).country);
  const { userInfo } = useContext(UserContext);

  const selectLanguage = (language, acronym) => {
    setLanguage(language);
    push(`/${pathname}`, `/${pathname}`, { locale: acronym });
  };

  return (
    <nav className="h-12 border border-b-slate flex items-center justify-between px-[18px] sm:pl-[38px] lg:h-16 lg:pl-[35px] xl:pl-[31px]">
      <Link href="/dashboard">
        <Image src={mobileLogo} alt="Fastwpay logo" className="w-[34px] h-6 xl:hidden" />
        <Image src={logoBlue} alt="Fastwpay logo" className="w-[154px] h-[33px] hidden xl:block" />
      </Link>
      <div>
        <div className="flex items-center h-6 gap-[14px]">
          {!isAdmin && (
            <>
              <p className="typo-body-1 text-text-1 font-bold">
                <IntlMessages id="common.balance" />:{' '}
                <span className="text-primary-blue typo-body-1">{userInfo?.balance} Є</span>
              </p>
              <div className="flex items-center h-full cursor-pointer relative" onClick={() => setShowList(!showList)}>
                <p className="typo-body-1 text-text-1">{language}</p>
                <Image className="ml-2 w-[9px]" src={polygonIcon} alt="Polygon" />
                {/* List of languages */}
                {showList && (
                  <div
                    className="absolute top-[24px] right-0 py-4 px-5 bg-white rounded-md z-10"
                    style={{ boxShadow: '0px 0px 9px 0px #0000001F' }}
                  >
                    <ul className="flex flex-col gap-4">
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
            </>
          )}
          <div className={`items-center gap-3 ${!isAdmin ? 'hidden' : 'flex'} lg:flex`}>
            <Link href={!isAdmin ? '/account' : ''}>
              <p className="text-text-1 font-medium typo-body-1">{userInfo?.firstName + ' ' + userInfo?.lastName}</p>
            </Link>
            <Image className="sm:w-[38px]" width="32px" src={avatarIcon} alt="Avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
}
