import { StyleSheet } from 'react-native';

import { colors } from '../../theme/color';
import { ms } from '../../utils';

export const styles = StyleSheet.create({
  loading: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: ms(6),
    backgroundColor: colors.WHITE_LILAC,
  },
  errorText: {
    color: colors.RED,
    textAlign: 'center',
    marginTop: ms(20),
  },
});
