import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.sunrise-sunset.org/',
});

export default api;