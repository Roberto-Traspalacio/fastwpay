import Cookies from 'js-cookie';
import fetch from 'utils/fetch';

export class User {
  auth = Cookies.get('auth') && JSON.parse(Cookies.get('auth'));
  async getUser() {
    const user = await fetch.get('/users/info', this.auth?.token);
    return user;
  }

  async getCurrentBalance() {
    const data = await fetch.get('/transaction/actual-amount', this.auth?.token);
    return data;
  }
}
