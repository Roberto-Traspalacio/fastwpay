import { UserContext } from 'context/user/context';
import { useContext, useState } from 'react';
import { ScreenLoaderContext } from './context';

export default function ScreenLoaderProvider({ children }) {
  const { userInfo } = useContext(UserContext);
  const [showScreenLoader, setShowScreenLoader] = useState(userInfo?.firstName ? false : true);

  return (
    <ScreenLoaderContext.Provider value={{ showScreenLoader, setShowScreenLoader }}>
      {children}
    </ScreenLoaderContext.Provider>
  );
}
