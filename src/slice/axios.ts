// src/axiosConfig.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
  }
});

export default instance;
