import { StatusBar, StyleSheet } from 'react-native';

import { colorScheme } from '../../utils/styles/scheme';
import { themeColors } from '../../utils/styles/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: themeColors[colorScheme].background,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
  },
  list: {
    flex: 2,
    marginTop: 20,
    backgroundColor: 'gray',
  },
});
