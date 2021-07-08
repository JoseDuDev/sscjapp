import axios from 'axios';

const baseUrl = 'http://localhost:3300/api/'

const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000
  // headers: { 'X-Custom-Headers': 'foobar' }
})

export default api;