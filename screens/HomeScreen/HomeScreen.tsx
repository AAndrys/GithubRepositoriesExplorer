import { FunctionComponent, useRef } from 'react';
import { TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Accordion from '../../components/Accordion/Accordion';
// import debounce from 'lodash/debounce';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import { styles } from './HomeScreen.styles';

export interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const textInputRef = useRef<TextInput>(null);

  const handlePressSearch = () => {
    console.log('press');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Input ref={textInputRef} placeholder="Enter username" />

        <Button label="Search" onPress={handlePressSearch} />

        <View style={styles.list}>
          <Accordion />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
