import { Text, View } from 'react-native';

import { styles } from './New.styles';

export interface NewProps {}

const New = () => {
  return (
    <View style={styles.container}>
      <Text>New component</Text>
    </View>
  );
};

export default New;
