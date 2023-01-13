const API_URL = process.env.REACT_NEXT_APP_URL_API;
const fetch = {
  post: async (endpoint, data) => {
    try {
      const response = await window.fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
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
};

export default fetch;
