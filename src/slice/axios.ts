// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
//   }
// });

// export default instance;

// src/axiosConfig.ts
import axios from 'axios';

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

if (!accessToken) {
  throw new Error('VITE_ACCESS_TOKEN is not defined');
}

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

export default instance;


