import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type Article = {
  title: string;
  image_url: string;
  description: string;
  content: string;
  url: string;
};

type RootStackParamList = {
  Tabs: undefined;
  Detail: { article: Article };
};

export type DetailScreenProps = {
  route: RouteProp<RootStackParamList, 'Detail'>;
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
};
