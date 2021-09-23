import axios from 'axios';

import { message } from 'antd';

// const API_ROOT =
//   process.env.NODE_ENV === 'development' ? '/dev/developer' : '/developer';

let API_ROOT;

switch (process.env.NODE_ENV) {
  case 'development':
  case 'release':
    API_ROOT = 'https://qa-api-hotelpc.kuaibaobao.com';
    break;
  case 'preview':
    API_ROOT = 'https://pre-api-hotelpc.kuaibaobao.co';
    break;
  case 'production':
    API_ROOT = 'https://api-hotelpc.kuaibaobao.com';
    break;

  default:
    break;
}

const MOCK_ROOT = 'https://yapi.kuaibaobao.com/mock/57';

const requestConfigAdapter = config => {
  let API_BASE = API_ROOT;
  if (config.isMock) {
    API_BASE = MOCK_ROOT;
  }

  return { url: `${API_BASE}${config.url}` };
};

const handleErrors = err => {

  return Promise.reject(err.response);
}

const responseData = res => res.data;

const handleResponse = res => {

  return res;
}

const tokenPlugin = config => {
  return config;
}

const request = {};

axios.interceptors.request.use(tokenPlugin, handleErrors);

axios.interceptors.response.use(handleResponse);

['delete', 'get', 'head', 'options'].forEach(method => {
  request[method] = ({ url, payload, isMock = false }) => {
    const { url: apiUrl } = requestConfigAdapter({ url, isMock });
    return axios[method](apiUrl, { params: payload }).then(responseData);
  }
});

['post', 'put', 'patch'].forEach(method => {
  request[method] = ({ url, payload, isMock = false }) => {
    const { url: apiUrl } = requestConfigAdapter({ url, isMock });
    return axios[method](apiUrl, payload).then(responseData);
  }
});

export default request;
