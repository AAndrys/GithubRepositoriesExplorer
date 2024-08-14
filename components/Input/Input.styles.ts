import { StyleSheet } from 'react-native';

import { colorScheme } from '../../utils/styles/scheme';
import { themeColors } from '../../utils/styles/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: themeColors[colorScheme].border,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: themeColors[colorScheme].background,
  },
});
