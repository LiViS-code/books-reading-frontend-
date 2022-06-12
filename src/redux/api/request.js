//import axios from "axios";
//import { http } from "./http-common";

//all requests will be here
import axios from 'axios';

const fetch = axios.create({
  baseURL:
    'mongodb+srv://Vasiliy:TWP42fBmEWVikfu@cluster0.5oqg2.mongodb.net/db-books-reading?retryWrites=true&w=majority',
});

export async function fetchBooksAPI() {
  const books = await fetch.get('/api/books/');
  return books ? console.log(books.data) : console.log('Fetch error');
}
