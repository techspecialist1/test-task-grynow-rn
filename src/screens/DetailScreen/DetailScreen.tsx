import { Text, Image, ScrollView, Linking } from 'react-native';

import { styles } from './styles';
import { CustomButton } from '../../components';
import type { DetailScreenProps } from './interface';

export const DetailScreen = ({ route }: DetailScreenProps) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.image_url }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>{article.description}</Text>
      <Text style={styles.content}>{article.content}</Text>
      <CustomButton
        title="Read Full Article"
        onPress={() => Linking.openURL(article.url)}
      />
    </ScrollView>
  );
};
