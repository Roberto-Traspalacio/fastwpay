import UserProvider from 'context/user/provider';
import Dashboard from 'modules/dashboard';

export default ({ openSidebar, setOpenSidebar }) => (
  <UserProvider>
    <Dashboard openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
  </UserProvider>
);
