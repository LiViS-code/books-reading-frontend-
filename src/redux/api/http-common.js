import axios from 'axios';

export const http = axios.create({
  // baseURL: 'http://localhost:3000', // address backend server
  baseURL: 'https://book-reader-team.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});
