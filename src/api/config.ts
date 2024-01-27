import _axios from 'axios';

const axios = _axios.create({
  baseURL: 'http://44.204.63.25:3031/api',
});

export default axios;
