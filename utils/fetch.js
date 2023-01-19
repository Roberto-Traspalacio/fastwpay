const API_URL = process.env.REACT_NEXT_APP_URL_API;
const fetch = {
  get: async (endpoint, token) => {
    try {
      const response = await window.fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          [token && 'Authorization']: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return { response, data };
    } catch (error) {
      console.log(error);
    }
  },
  post: async (endpoint, body) => {
    try {
      const response = await window.fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return { response, data };
    } catch (error) {
      console.log(error);
    }
  },
  put: async (endpoint, data) => {
    try {
      const response = await window.fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseParsed = await response.json();
      console.log('Data: ', responseParsed);
      return responseParsed;
    } catch (error) {
      console.log(error);
    }
  },
  patch: async (endpoint, data) => {
    try {
      const response = await window.fetch(`${API_URL}${endpoint}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
export default fetch;
