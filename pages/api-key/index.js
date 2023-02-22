import UserProvider from 'context/user/provider';
import ApiKey from 'modules/api-key';

export default ({ openSidebar, setOpenSidebar }) => (
  <UserProvider>
    <ApiKey openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
  </UserProvider>
);
