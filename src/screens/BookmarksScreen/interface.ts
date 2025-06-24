import { NavigationProp } from '@react-navigation/native';

export type Bookmark = {
  url: string;
  image: string;
  title: string;
  description: string;
  article_id:string
};

export type BookmarksScreenProps = {
  navigation: NavigationProp<any>;
};
