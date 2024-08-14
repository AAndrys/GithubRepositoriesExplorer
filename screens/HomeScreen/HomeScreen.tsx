import { FunctionComponent, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { QueryKeys } from '../../utils/enums';
import { getUsers } from '../../utils/queries';

import { styles } from './HomeScreen.styles';

export interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const { isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.Users],
    queryFn: () => getUsers(inputValue, inputValue),
    enabled: false,
  });

  const handlePressSearch = () => {
    refetch();
  };

  const error = <Text>Error occurred</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Input
          setValueChange={text => setInputValue(text)}
          placeholder="Enter username"
        />

        <Button label="Search" onPress={handlePressSearch} />

        <View style={styles.list}>
          {isLoading ? <ActivityIndicator /> : isError ? error : <Accordion />}
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
