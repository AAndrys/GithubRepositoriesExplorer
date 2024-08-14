import { FunctionComponent, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './Button.styles';

export interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ label = '', onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Button);
