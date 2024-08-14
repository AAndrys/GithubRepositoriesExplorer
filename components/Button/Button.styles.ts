import { StyleSheet } from 'react-native';

import { colorScheme } from '../../utils/styles/scheme';
import { colors, themeColors } from '../../utils/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors[colorScheme].button,
    borderRadius: 10,
    marginTop: 20,
    padding: 3,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 16,
  },
});
