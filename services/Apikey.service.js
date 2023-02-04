import Cookies from 'js-cookie';
import fetch from 'utils/fetch';

export class Apikey {
  auth = Cookies.get('auth') && JSON.parse(Cookies.get('auth'));

  async generate(reference) {
    const data = await fetch.post('/keys/generate', reference, this.auth?.token);
    return data;
  }

  async list() {
    const data = await fetch.get('/keys/my-keys', this.auth?.token);
    return data;
  }

  async changeStatus(idKey) {
    await fetch.get(`/keys/change-status/${idKey}`, this.auth?.token);
  }

  async deleteKey(idKey) {
    const data = await fetch.delete(`/keys/delete/${idKey}`, this.auth?.token);
    return data;
  }

  async getBalanceList() {
    const data = await fetch.get('/keys/balance', this.auth?.token);
    return data;
  }

  async getTransactionsByApiKey(id) {
    const data = await fetch.get(`/keys/transactions-by-key/${id}`, this.auth?.token);
    return data;
  }
}
