import type { Article } from '../screens/DetailScreen/interface';

export type RootStackParamList = {
  Tabs: undefined;
  Detail: { article: Article; neme: string }; 
};
