import Image from 'next/image';
import mobileLogo from 'assets/mobile-logo.svg';
import logoBlue from 'assets/logoBlue.svg';
import avatarIcon from 'assets/avatar.svg';
import polygonIcon from 'assets/polygon.svg';
import { useContext, useState } from 'react';
import { UserContext } from 'context/user/context';
import IntlMessages from 'utils/IntlMessages';
import { useRouter } from 'next/router';

export default function AuthNavbar({ admin }) {
  const [showList, setShowList] = useState(false);
  const { push, locale } = useRouter();
  const [language, setLanguage] = useState(
    locale === 'es'
      ? 'Spanish'
      : locale === 'en'
      ? 'English'
      : locale === 'fr'
      ? 'French'
      : locale === 'it'
      ? 'Italian'
      : 'Germany'
  );
  const { userInfo } = useContext(UserContext);
  const router = useRouter();

  const selectLanguage = (language, acronim) => {
    setLanguage(language);
    router.push(`/${router.pathname}`, `/${router.pathname}`, { locale: acronim });
  };

  return (
    <nav className="h-12 border border-b-slate flex items-center justify-between px-[18px] sm:pl-[38px] lg:h-16 lg:pl-[35px] xl:pl-[31px]">
      <Image src={mobileLogo} alt="Fastwpay logo" className="w-[34px] h-6 xl:hidden" />
      <Image src={logoBlue} alt="Fastwpay logo" className="w-[154px] h-[33px] hidden xl:block" />
      <div>
        {!admin ? (
          <div className="flex items-center h-6 gap-[14px]">
            <p className="typo-body-1 text-text-1 font-bold">
              <IntlMessages id="common.balance" />:{' '}
              <span className="text-primary-blue typo-body-1">{userInfo?.balance} Є</span>
            </p>
            <div className="flex items-center h-full cursor-pointer relative" onClick={() => setShowList(!showList)}>
              <p className="typo-body-1 text-text-1">{language}</p>
              <Image className="ml-2 w-[9px]" src={polygonIcon} alt="Polygon" />
              {/* List of languages */}
              {showList && (
                <div className="absolute top-[24px] right-0 py-4 px-5 bg-white rounded-md z-10">
                  <ul className="flex flex-col gap-4">
                    <li
                      className={`typo-body-1 ${language === 'English' && 'text-primary-blue'}`}
                      onClick={() => selectLanguage('English', 'en')}
                    >
                      English
                    </li>
                    <li
                      className={`typo-body-1 ${language === 'Spanish' && 'text-primary-blue'}`}
                      onClick={() => selectLanguage('Spanish', 'es')}
                    >
                      Spanish
                    </li>
                    <li
                      className={`typo-body-1 ${language === 'French' && 'text-primary-blue'}`}
                      onClick={() => selectLanguage('French', 'fr')}
                    >
                      French
                    </li>
                    <li
                      className={`typo-body-1 ${language === 'Italian' && 'text-primary-blue'}`}
                      onClick={() => selectLanguage('Italian', 'it')}
                    >
                      Italian
                    </li>
                    <li
                      className={`typo-body-1 ${language === 'Germany' && 'text-primary-blue'}`}
                      onClick={() => selectLanguage('Germany', 'de')}
                    >
                      Germany
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="items-center gap-3 hidden lg:flex">
              <p className="text-text-1 font-medium typo-body-1">{userInfo?.firstName + ' ' + userInfo?.lastName}</p>
              <Image className="sm:w-[38px]" width="32px" src={avatarIcon} alt="Avatar" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <p className="text-text-1 font-medium typo-body-1">Name Admin</p>
            <Image className="sm:w-[38px]" width="32px" src={avatarIcon} alt="Avatar" />
          </div>
        )}
      </div>
    </nav>
  );
}
