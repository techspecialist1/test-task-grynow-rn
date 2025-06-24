import { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { fetchNewsArticles } from '../../services/news.services';
import type { RawArticle } from './interface';
import { ROUTE_NAMES } from '../../constants/routeNames';
import { CustomCard } from '../../components/customCard/customCard';
import { formatArticles, updateBookmarks } from './helpers';

export const HomeScreen = ({ navigation }: any) => {
  const [articles, setArticles] = useState<RawArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);

  useEffect(() => {
    loadBookmarksAndArticles();
  }, []);

  const loadBookmarksAndArticles = async () => {
    setLoading(true);
    try {
      const response = await fetchNewsArticles();
      setNextPage(response.nextPage);

      const formatted = await formatArticles(response.results);
      setArticles(formatted);
    } catch (e) {
      console.error(e);
      setError('Failed to load news articles.');
    }
    setLoading(false);
  };

  const fetchMoreArticles = async () => {
    if (!nextPage || loadingMore) return;
    setLoadingMore(true);
    try {
      const response = await fetchNewsArticles(nextPage);
      setNextPage(response.nextPage);
      const newArticles = await formatArticles(response.results);
      setArticles(prev => [...prev, ...newArticles]);
    } catch (e) {
      console.error('Failed to load more articles', e);
    }
    setLoadingMore(false);
  };

  const toggleBookmark = async (article: RawArticle): Promise<void> => {
    const index = articles.findIndex(a => a.article_id === article.article_id);
    if (index === -1) return;
    const updated = [...articles];
    updated[index] = {
      ...updated[index],
      isBookmarked: !updated[index].isBookmarked,
    };
    setArticles(updated);
    await updateBookmarks(article);
  };

  const handlePress = (article: RawArticle) => {
    navigation.navigate(ROUTE_NAMES.DETAIL, { article });
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return <ActivityIndicator style={{ marginVertical: 16 }} />;
  };

  if (loading) return <ActivityIndicator style={styles.loading} />;
  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={item => item.article_id}
        onEndReached={fetchMoreArticles}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => (
          <CustomCard
            article={item}
            onPress={() => handlePress(item)}
            onToggleBookmark={() => toggleBookmark(item)}
            isBookmarked={item.isBookmarked}
          />
        )}
      />
    </View>
  );
};
