import { Article } from "../../screens/HomeScreen/interface";

export interface Props {
  article: Article;
  onPress?: () => void;
  onToggleBookmark?: () => void;
  isBookmarked?: boolean;
}
