import Cookies from 'js-cookie';
import fetch from 'utils/fetch';

export class User {
  auth = Cookies.get('auth') && JSON.parse(Cookies.get('auth'));
  async getUser() {
    const user = await fetch.get('/user/info', this.auth?.token);
    return user;
  }
}
