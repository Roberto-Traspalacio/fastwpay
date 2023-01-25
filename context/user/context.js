import { createContext } from 'react';

export const UserContext = createContext({
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  password: null,
  country: '',
  status: '',
});
