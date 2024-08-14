import { forwardRef, memo } from 'react';
import { Text, TextInput, View } from 'react-native';

import { colorScheme } from '../../utils/styles/scheme';
import { themeColors } from '../../utils/styles/theme';

import { styles } from './Input.styles';

export interface InputProps {
  placeholder?: string;
}

const Input = forwardRef<TextInput, InputProps>(
  ({ placeholder, ...rest }, ref) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Search</Text>
        <TextInput
          ref={ref}
          style={styles.input}
          placeholder={placeholder}
          // value={value}
          // onChangeText={onChangeText}
          defaultValue=""
          placeholderTextColor={themeColors[colorScheme].text}
          {...rest}
        />
      </View>
    );
  }
);

Input.displayName = 'Input';

export default memo(Input);
