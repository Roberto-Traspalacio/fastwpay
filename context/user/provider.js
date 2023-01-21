import { useReducer } from 'react';
import { UserContext } from './context';
import UserReducer, { INITIAL_STATE } from './reducer';
import { User } from 'services/User.service';
import types from './types';

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const user = new User();
  const SUCCESS_REQUEST_CODE = 200;

  const getUserInfo = async () => {
    const data = await user.getUser();
    if (data?.response.status === SUCCESS_REQUEST_CODE) {
      dispatch({
        type: types.GET_USER_INFO,
        userInfo: data.data,
      });
    }
  };

  return <UserContext.Provider value={{ userInfo: state?.userInfo, getUserInfo }}>{children}</UserContext.Provider>;
}
