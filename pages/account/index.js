import UserProvider from 'context/user/provider';
import Account from 'modules/account';

export default ({ openSidebar, setOpenSidebar }) => (
  <UserProvider>
    <Account openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
  </UserProvider>
);
