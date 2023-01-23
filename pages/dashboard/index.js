import { UserContext } from 'context/user/context';
import ScreenLoaderLayout from 'layouts/ScreenLoader.layout';
import Dashboard from 'modules/dashboard';
import { useContext, useEffect } from 'react';

export default function Index() {
  const { userInfo, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    if (!userInfo?.firstName) {
      getUserInfo();
    }
  }, []);

  return (
    <ScreenLoaderLayout>
      <Dashboard />
    </ScreenLoaderLayout>
  );
}
