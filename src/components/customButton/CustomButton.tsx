import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import type { CustomButtonProps } from './interface';

export const CustomButton = ({
  title,
  onPress,
  disabled,
  style,
  textStyle,
}: CustomButtonProps) => (
  <TouchableOpacity
    style={[styles.button, disabled ? styles.buttonDisabled : null, style]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);
