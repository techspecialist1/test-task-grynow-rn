import { StyleSheet } from 'react-native';

import { colors } from '../../theme/color';
import { ms } from '../../utils';

export const styles = StyleSheet.create({
  articleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: ms(8),
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: ms(8),
    elevation: 4,
    shadowColor: colors.BLACK_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: ms(8),
    padding: ms(8),
  },
  articleImage: {
    width: ms(110),
    height: ms(110),
    borderRadius: ms(8),
    backgroundColor: colors.WHITE_SMOKE,
  },
  articleContent: {
    flex: 1,
    marginLeft: ms(16),
    justifyContent: 'center',
  },
  articleTitle: {
    fontWeight: 'bold',
    fontSize: ms(18),
    color: colors.BLACK_COLOR,
    marginBottom: ms(6),
  },
  articleDescription: {
    color: colors.GREY_TEXT,
    fontSize: ms(14),
    marginTop: ms(2),
  },
  bookmarkButton: {
    padding: ms(10),
    alignSelf: 'flex-start',
    marginLeft: ms(8),
  },
  bookmarkImg: {
    width: ms(16),
    height: ms(16),
    resizeMode: 'contain',
  },
});
