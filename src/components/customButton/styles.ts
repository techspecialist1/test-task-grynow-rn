import { StyleSheet } from 'react-native';

import { colors } from '../../theme/color';
import { ms } from '../../utils';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.BLACK_COLOR,
    paddingVertical: ms(14),
    paddingHorizontal: ms(24),
    borderRadius: ms(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: ms(12),
    shadowColor: colors.BLACK_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: ms(4),
    elevation: 2,
  },
  buttonDisabled: {
    backgroundColor: colors.GREY_TEXT,
  },
  buttonText: {
    color: colors.WHITE_COLOR,
    fontSize: ms(16),
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
