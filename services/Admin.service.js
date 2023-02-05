import Cookies from 'js-cookie';
import fetch from 'utils/fetch';
const API_URL = process.env.REACT_NEXT_APP_URL_API;

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

  async generateReport(clean) {
    const response = await window.fetch(`${API_URL}/admin/reports?clean=${clean}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${this.auth?.token}` },
    });
    const data = await response.blob();
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${Date.now()}.xlsx`);
    document.body.appendChild(link);
    link.click();
  }
}
