import _axios from 'axios';

const axios = _axios.create({
  baseURL: 'https://bank-05iy.onrender.com/api',
});

export default axios;
