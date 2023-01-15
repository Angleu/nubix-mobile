import _axios from 'axios';

const axios = _axios.create({
  baseURL: 'https://bank-back-production.up.railway.app/',
});

export default axios;
