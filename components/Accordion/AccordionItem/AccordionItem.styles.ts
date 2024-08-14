import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/styles/theme';

export const styles = StyleSheet.create({
  container: {
    minHeight: 125,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.silverChaice,
    marginTop: 10,
    marginLeft: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  textWrapper: {
    flex: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
  wrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
