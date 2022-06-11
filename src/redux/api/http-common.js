import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3000', // address backend server
  headers: {
    'Content-type': 'application/json',
  },
});
