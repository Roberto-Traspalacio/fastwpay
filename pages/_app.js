import UserProvider from 'context/user/provider';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <main className={`font-sans`}>
        <Component {...pageProps} />
      </main>
    </UserProvider>
  );
}
