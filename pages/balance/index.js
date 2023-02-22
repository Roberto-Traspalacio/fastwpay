import UserProvider from 'context/user/provider';
import Balance from 'modules/balance';

export default ({ openSidebar, setOpenSidebar }) => (
  <UserProvider>
    <Balance openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
  </UserProvider>
);
