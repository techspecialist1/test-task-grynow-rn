import { View, Text, Image, TouchableOpacity } from 'react-native';

import { BookmarkImg2, BookmarkRemoveImg } from '../../assets';
import { styles } from './styles';
import { Props } from './interface';

export const CustomCard = ({
  article,
  onPress,
  onToggleBookmark,
  isBookmarked,
}: Props) => {
  return (
    <TouchableOpacity style={styles.articleItem} onPress={onPress}>
      <Image source={{ uri: article.image_url }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text numberOfLines={2} style={styles.articleTitle}>
          {article.title}
        </Text>
        <Text numberOfLines={2} style={styles.articleDescription}>
          {article.description ?? 'No description available'}
        </Text>
      </View>
      {onToggleBookmark ? (
        <TouchableOpacity
          onPress={onToggleBookmark}
          style={styles.bookmarkButton}
        >
          <Image
            source={isBookmarked ? BookmarkRemoveImg : BookmarkImg2}
            style={styles.bookmarkImg}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.bookmarkButton} />
      )}
    </TouchableOpacity>
  );
};
