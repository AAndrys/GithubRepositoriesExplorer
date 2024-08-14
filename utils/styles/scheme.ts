import { Appearance } from 'react-native';

export const colorScheme =
  Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
