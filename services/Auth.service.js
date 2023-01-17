import fetch from 'utils/fetch';
export class Auth {
  async register(userData) {
    const data = await fetch.post(`/auth/register`, userData);
  }
  async login(userData) {
    const data = await fetch.post('/auth/login', userData);
  }
  async sendEmailRecoverPassword(email) {
    const data = await fetch.put('/auth/forgot-password', email);
  }
  async recoverPassword(password, token) {
    const data = await fetch.patch(`/auth/recover-password?token=${token}`, password);
    return data;
  }
  async verifyEmail(verifyToken) {
    const data = await fetch.get(`/auth/verify-email?token=${verifyToken}`);
  }
}
