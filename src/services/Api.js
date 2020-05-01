import axios from 'axios';

const urlNow = window.location.host === 'localhost:3000' ? 'http://api.tvmaze.com/' : 'https://api.tvmaze.com/';

const api = axios.create({
  baseURL: urlNow
  // headers: {'X-Custom-Header': 'foobar'}
})

export default api;