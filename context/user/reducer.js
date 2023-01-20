import types from './types';

export const INITIAL_STATE = {
  userInfo: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    default:
      return state;
  }
};
