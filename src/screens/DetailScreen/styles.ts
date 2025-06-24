import { StyleSheet } from 'react-native';

import { colors } from '../../theme/color';
import { ms } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ms(16),
  },
  image: {
    width: '100%',
    height: ms(200),
    borderRadius: ms(8),
  },
  title: {
    fontWeight: 'bold',
    fontSize: ms(22),
    marginVertical: ms(10),
  },
  description: {
    color: colors.GREY_TEXT,
    marginBottom: ms(10),
  },
  content: {
    fontSize: ms(16),
  },
});
