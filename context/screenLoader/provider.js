import { useState } from 'react';
import { ScreenLoaderContext } from './context';

export default function ScreenLoaderProvider({ children }) {
  const [showScreenLoader, setShowScreenLoader] = useState(false);

  return (
    <ScreenLoaderContext.Provider value={{ showScreenLoader, setShowScreenLoader }}>
      {children}
    </ScreenLoaderContext.Provider>
  );
}
