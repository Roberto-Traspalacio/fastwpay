import Cookies from 'js-cookie';
import fetch from 'utils/fetch';

export class Apikey {
  auth = Cookies.get('auth') && JSON.parse(Cookies.get('auth'));

  async generate(reference) {
    console.log('🚀 ~ file: Apikey.service.js:6 ~ Apikey ~ auth', this.auth?.token);
    const data = await fetch.post('/keys/generate', { reference }, this.auth?.token);
    return data;
  }

  async changeStatus(idKey, token) {
    await fetch.get(`/keys/change-status/${idKey}`, token);
  }
}
