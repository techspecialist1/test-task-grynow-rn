import { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

import { styles } from './styles';
import type { Bookmark, BookmarksScreenProps } from './interface';
import { ROUTE_NAMES } from '../../constants/routeNames';
import { CustomCard } from '../../components/customCard/customCard';

export const BookmarksScreen = ({ navigation }: BookmarksScreenProps) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadBookmarks();
  }, [isFocused]);

  const loadBookmarks = async () => {
    const data = await AsyncStorage.getItem('bookmarks');
    setBookmarks(data ? JSON.parse(data) : []);
  };

  const handlePress = (article: Bookmark) => {
    navigation.navigate(ROUTE_NAMES.DETAIL, { article });
  };

  if (!bookmarks.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No bookmarks yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        keyExtractor={(item: Bookmark) => item.article_id}
        renderItem={({ item }) => (
          <CustomCard article={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};
