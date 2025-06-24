import AsyncStorage from '@react-native-async-storage/async-storage';

import { RawArticle } from './interface';

/**
 * Loads bookmarks from AsyncStorage
 */
const getAsyncData = async (): Promise<RawArticle[]> => {
  try {
    const stored = await AsyncStorage.getItem('bookmarks');
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error('Error loading bookmarks', err);
    return [];
  }
};

/**
 * Formats raw API articles and merges bookmark state
 */
export const formatArticles = async (
  rawArticles: RawArticle[],
): Promise<RawArticle[]> => {
  const storedBookmarks = await getAsyncData();
  return rawArticles.map(item => {
    const isBookmarked = storedBookmarks.some(
      b => b.article_id === item.article_id,
    );
    return {
      ...item,
      isBookmarked,
    };
  });
};

/**
 * Updates the bookmarks list and returns the new array
 */
export const updateBookmarks = async (
  article: RawArticle,
): Promise<RawArticle[]> => {
  const storedBookmarks = await getAsyncData();
  let updated: RawArticle[];

  if (article.isBookmarked) {
    updated = storedBookmarks.filter(b => b.article_id !== article.article_id);
  } else {
    updated = [...storedBookmarks, { ...article, isBookmarked: true }];
  }
  try {
    await AsyncStorage.setItem('bookmarks', JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save bookmarks:', err);
  }

  return updated;
};
