import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import polygonIcon from 'assets/polygonWhite.svg';
import { useRouter } from 'next/router';
import menuPublicIcon from 'assets/menuPublic.svg';

export default function Navbar({ className }) {
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

  const selectLanguage = (language, acronim) => {
    setLanguage(language);
    push(`/`, '/', { locale: acronim });
  };

  return (
    <nav className={`col-span-full py-4 px-[18px] bg-primary-blue ${className} flex items-center justify-between`}>
      <Image alt="Logo" className="h-[18px] sm:h-[24px] md:h-8 w-[auto]" src={logo}></Image>
      <div className="flex">
        <div className="flex items-center h-full cursor-pointer relative" onClick={() => setShowList(!showList)}>
          <p className="typo-body-1 text-white">{language}</p>
          <Image className="ml-2 w-[9px]" src={polygonIcon} alt="Polygon" />
          {/* List of language */}
          {showList && (
            <div className="absolute top-[24px] right-0 py-4 px-5 bg-white rounded-md z-30">
              <ul className="flex flex-col gap-4 z-50">
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
        <Image className="ml-5 cursor-pointer" src={menuPublicIcon} alt="Menu" />
      </div>
    </nav>
  );
}
