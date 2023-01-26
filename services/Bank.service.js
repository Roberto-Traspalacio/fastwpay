import Cookies from 'js-cookie';
import fetch from 'utils/fetch';

export class Bank {
  auth = Cookies.get('auth') && JSON.parse(Cookies.get('auth'));
  async getinfo() {
    const bank = await fetch.get('/bank-information', this.auth?.token);
    console.log('🚀 ~ file: Bank.service.js:8 ~ Bank ~ getinfo ~ bank', bank);
    return bank;
  }
}
