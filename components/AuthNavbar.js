import Image from 'next/image';
import mobileLogo from 'assets/mobile-logo.svg';
import logoBlue from 'assets/logoBlue.svg';
import avatarIcon from 'assets/avatar.svg';
import polygonIcon from 'assets/polygon.svg';
import { useState } from 'react';

export default function AuthNavbar({ admin }) {
  const [showList, setShowList] = useState(false);
  const [language, setLanguage] = useState('English');
  return (
    <nav className="h-12 border border-b-slate flex items-center justify-between px-[18px] lg:h-16 lg:pl-[35px] xl:pl-[31px]">
      <Image src={mobileLogo} alt="Fastwpay logo" className="w-[34px] h-6 xl:hidden" />
      <Image src={logoBlue} alt="Fastwpay logo" className="w-[154px] h-[33px] hidden xl:block" />
      <div>
        {!admin ? (
          <div className="flex items-center h-6 gap-[14px]">
            <p className="typo-body-1 text-text-1 font-bold">
              Balance: <span className="text-primary-blue typo-body-1">203,876.34 Є</span>
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
                      onClick={() => setLanguage('English')}
                    >
                      English
                    </li>
                    <li
                      className={`typo-body-1 ${language === 'Spanish' && 'text-primary-blue'}`}
                      onClick={() => setLanguage('Spanish')}
                    >
                      Spanish
                    </li>
                    <li
                      className={`typo-body-1 ${language === 'French' && 'text-primary-blue'}`}
                      onClick={() => setLanguage('French')}
                    >
                      French
                    </li>
                    <li
                      className={`typo-body-1 ${language === 'Italian' && 'text-primary-blue'}`}
                      onClick={() => setLanguage('Italian')}
                    >
                      Italian
                    </li>
                    <li
                      className={`typo-body-1 ${language === 'German' && 'text-primary-blue'}`}
                      onClick={() => setLanguage('German')}
                    >
                      German
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <p className="text-text-1 font-medium typo-body-1">John Constantine</p>
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
