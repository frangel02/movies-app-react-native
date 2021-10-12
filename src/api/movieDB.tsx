import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '1159d7b1bfb61ad2784d72eb48ee718d',
    language: 'es-ES',
  },
});

export default movieDB;
