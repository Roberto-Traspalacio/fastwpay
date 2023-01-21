import { useContext } from 'react';
import ScreenLoader from 'components/ScreenLoader';
import { ScreenLoaderContext } from 'context/screenLoader/context';

export default function ScreenLoaderLayout({ children }) {
  const { showScreenLoader, setShowScreenLoader } = useContext(ScreenLoaderContext);
  return (
    <>
      {children}
      {showScreenLoader && <ScreenLoader />}
    </>
  );
}
