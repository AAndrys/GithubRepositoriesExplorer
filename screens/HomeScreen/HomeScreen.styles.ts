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
  info: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 15,
  },
  list: {
    flex: 2,
    marginTop: 20,
  },
});
