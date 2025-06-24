import axios from 'axios';

import { NEWS_API_URL } from '../utils';

export const fetchNewsArticles = async (page?: string) => {
  try {
    const url = page ? `${NEWS_API_URL}&page=${page}` : NEWS_API_URL;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch news articles');
  }
};
