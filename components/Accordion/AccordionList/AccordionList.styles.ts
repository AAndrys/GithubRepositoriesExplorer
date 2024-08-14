import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  listItem: {
    padding: 15,
    backgroundColor: colors.silver,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  emptyText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  indicator: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
