import axios from 'axios';

const fetch = axios.create({
  baseURL: 'https://book-reader-team.herokuapp.com/api',
});

export async function fetchBooksAPI() {
  const books = await fetch.get('/api/books/');
  return books ? console.log(books.data) : console.log('Fetch error');
}
