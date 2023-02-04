import Cookies from 'js-cookie';
import fetch from 'utils/fetch';

export class Admin {
  auth = Cookies.get('auth') && JSON.parse(Cookies.get('auth'));

  async summary() {
    const data = await fetch.get('/admin/summary', this.auth?.token);
    return data;
  }

  async listPayByAccount() {
    const data = await fetch.get('/admin/pay-by-account', this.auth?.token);
    return data;
  }
}
