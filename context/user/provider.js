import { useContext, useEffect, useReducer } from 'react';
import { UserContext } from './context';
import UserReducer, { INITIAL_STATE } from './reducer';
import { User } from 'services/User.service';
import types from './types';
import { ScreenLoaderContext } from 'context/screenLoader/context';

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const { setShowScreenLoader } = useContext(ScreenLoaderContext);
  const user = new User();
  const SUCCESS_REQUEST_CODE = 200;

  const getUserInfo = async (loader = true) => {
    loader && setShowScreenLoader(true);
    const data = await user.getUser();
    setShowScreenLoader(false);
    if (data?.response.status === SUCCESS_REQUEST_CODE) {
      dispatch({
        type: types.GET_USER_INFO,
        userInfo: data.data,
      });
    }
  };

  const reset = () => {
    dispatch({ type: types.RESET });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider value={{ userInfo: state?.userInfo, getUserInfo, reset }}>{children}</UserContext.Provider>
  );
}
