import fetch from 'utils/fetch';

export class Auth {
  async register(userData) {
    const data = await fetch.post(`/auth/register`, userData);
    console.log(data);
  }
  async login(userData) {
    const data = await fetch.post('/auth/login', userData);
  }
  async sendEmailRecoverPassword(email) {
    const data = await fetch.put('/auth/forgot-password', email);
  }
}
