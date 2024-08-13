import axios from 'axios';

import { baseURL } from './config';

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
