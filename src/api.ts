import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000
  // headers: { 'X-Custom-Headers': 'foobar' }
})

export default api;