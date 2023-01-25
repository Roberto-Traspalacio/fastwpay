import { UserContext } from 'context/user/context';
import { useContext, useState } from 'react';
import { ScreenLoaderContext } from './context';

export default function ScreenLoaderProvider({ children }) {
  const { userInfo } = useContext(UserContext);
  const [showScreenLoader, setShowScreenLoader] = useState(false);

  return (
    <ScreenLoaderContext.Provider value={{ showScreenLoader, setShowScreenLoader }}>
      {children}
    </ScreenLoaderContext.Provider>
  );
}
