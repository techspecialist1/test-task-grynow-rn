import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const guidelineBaseWidth = 375;

export const scale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

const moderateScale = (size: number, factor: number = 0.25): number =>
  size + (scale(size) - size) * factor;

export const ms = moderateScale;
