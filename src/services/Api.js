import axios from 'axios';



const api = axios.create({
  baseURL: 'http://api.tvmaze.com/'
  // headers: {'X-Custom-Header': 'foobar'}
})

export default api;