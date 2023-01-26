import Cookies from 'js-cookie';
import fetch from 'utils/fetch';

export class Bank {
  auth = Cookies.get('auth') && JSON.parse(Cookies.get('auth'));
  async getinfo() {
    const bank = await fetch.get('/bank-information/', this.auth?.token);
    return bank;
  }

  async saveBank(body) {
    const data = await fetch.post('/bank-information/save', body, this.auth?.token);
    return data;
  }
}
