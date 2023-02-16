import Cookies from 'js-cookie';
import fetch from 'utils/fetch';
export class Auth {
  auth = Cookies.get('auth') && JSON.parse(Cookies.get('auth'));

  async register(userData) {
    const data = await fetch.post(`/auth/register`, userData);
    return data;
  }
  async login(userData) {
    const { data, response } = await fetch.post('/auth/login', userData);
    return { data, response };
  }
  async sendEmailRecoverPassword(email) {
    const data = await fetch.put('/auth/forgot-password', email);
    return data;
  }
  async recoverPassword(password, token) {
    const data = await fetch.patch(`/auth/recover-password?token=${token}`, password);
    return data;
  }
  async verifyEmail(verifyToken) {
    const data = await fetch.get(`/auth/verify-email?token=${verifyToken}`);
    return data;
  }
  async resendEmailVerification({ email }) {
    const data = await fetch.post('/auth/send-verify-email', email);
    return data;
  }
}
