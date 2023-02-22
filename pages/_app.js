import '../styles/globals.css';
import CookieBanner from 'components/CookieBanner';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ScreenLoaderProvider from 'context/screenLoader/provider';
import { IntlProvider } from 'react-intl';
import en from 'locales/en.json';
import es from 'locales/es.json';
import fr from 'locales/fr.json';
import it from 'locales/it.json';
import de from 'locales/de.json';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const [showCookiesBanner, setShowCookiesBanner] = useState(false);
  const { locale } = useRouter();
  const currentLanguage =
    locale === 'es' ? es : locale === 'fr' ? fr : locale === 'it' ? it : locale === 'de' ? de : en;

  const acceptCookies = () => {
    Cookies.set('cookiesAccept', true);
    setShowCookiesBanner(false);
  };

  useEffect(() => {
    if (!Cookies.get('cookiesAccept')) {
      setShowCookiesBanner(true);
    }
  }, []);

  return (
    <IntlProvider locale={locale} messages={currentLanguage}>
      <ScreenLoaderProvider>
<<<<<<< HEAD
        <UserProvider>
          <main className={`font-sans relative max-h-screen`}>
            <Component {...pageProps} />
            {showCookiesBanner && <CookieBanner acceptCookies={acceptCookies} />}
          </main>
        </UserProvider>
=======
        <main className={`font-sans relative max-h-screen ${openSidebar && 'overflow-hidden'}`}>
          <Component {...pageProps} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          {showCookiesBanner && <CookieBanner acceptCookies={acceptCookies} />}
        </main>
>>>>>>> 449f75a2165496590d0250b182eca7146c69b832
      </ScreenLoaderProvider>
    </IntlProvider>
  );
}
