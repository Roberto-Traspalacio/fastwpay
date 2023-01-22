import '../styles/globals.css';
import CookieBanner from 'components/CookieBanner';
import UserProvider from 'context/user/provider';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ScreenLoaderProvider from 'context/screenLoader/provider';
import ScreenLoaderLayout from 'layouts/ScreenLoader.layout';
import { IntlProvider } from 'react-intl';
import en from 'locales/en.json';
import es from 'locales/es.json';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const [showCookiesBanner, setShowCookiesBanner] = useState(false);
  const { locale } = useRouter();
  const currentLanguage = locale === 'es' ? es : en;
  console.log('Current language: ', currentLanguage);

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
        <UserProvider>
          <main className={`font-sans relative max-h-screen`}>
            <ScreenLoaderLayout>
              <Component {...pageProps} />
              {showCookiesBanner && <CookieBanner acceptCookies={acceptCookies} />}
            </ScreenLoaderLayout>
          </main>
        </UserProvider>
      </ScreenLoaderProvider>
    </IntlProvider>
  );
}
