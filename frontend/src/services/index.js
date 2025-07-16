import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const requestToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error) {
    return error
  }
};

export const requestCreateUser = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error) {
    return error
  }
};

export const sendRequest = async (method, endpoint, body = null) => {
  try {
    const config = {
      method,
      url: endpoint,
      data: body,
      headers: {
        Authorization: api.defaults.headers.common.Authorization
      }
    };

    const response = await api(config);
    return response.data;
  } catch (error) {
    return error
  }
};

export default api;