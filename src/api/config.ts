import _axios from 'axios';

const axios = _axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'http://54.89.219.176:3031/api',
});

export default axios;
