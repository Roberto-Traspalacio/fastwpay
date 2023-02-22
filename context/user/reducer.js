import types from './types';

export const INITIAL_STATE = {
  userInfo: {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    password: null,
    country: '',
    status: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    case types.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};
