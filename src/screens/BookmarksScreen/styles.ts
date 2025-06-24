import { StyleSheet } from 'react-native';

import { colors } from '../../theme/color';
import { ms } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ms(10),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookmarkItem: {
    flexDirection: 'row',
    marginBottom: ms(15),
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: ms(8),
    elevation: ms(2),
  },
  bookmarkImage: {
    width: ms(90),
    height: ms(90),
    borderRadius: ms(8),
  },
  bookmarkContent: {
    flex: 1,
    marginLeft: ms(10),
    justifyContent: 'center',
  },
  bookmarkTitle: {
    fontWeight: 'bold',
    fontSize: ms(16),
  },
  bookmarkDescription: {
    color: colors.GREY_TEXT,
    marginTop: ms(4),
  },
});
