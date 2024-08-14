import {
  Dispatch,
  FunctionComponent,
  memo,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Text, TextInput, View } from 'react-native';
import debounce from 'lodash/debounce';

import { colorScheme } from '../../utils/styles/scheme';
import { themeColors } from '../../utils/styles/theme';

import { styles } from './Input.styles';

export interface InputProps {
  placeholder?: string;
  setValueChange: Dispatch<SetStateAction<string>>;
}

const Input: FunctionComponent<InputProps> = ({
  placeholder,
  setValueChange,
  ...rest
}) => {
  const [value, setValue] = useState<string>('');

  const debouncedSetValueChange = debounce(
    (newValue: string) => setValueChange(newValue),
    300
  );

  useEffect(() => {
    debouncedSetValueChange(value);

    return () => debouncedSetValueChange.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Search</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue(text)}
        placeholderTextColor={themeColors[colorScheme].text}
        {...rest}
      />
    </View>
  );
};

export default memo(Input);
