import { FunctionComponent, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useGlobalState } from '../../state/global';
import { QueryKeys } from '../../utils/enums';
import { getUsers } from '../../utils/queries';

import { styles } from './HomeScreen.styles';

export interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const { data, setData } = useGlobalState();

  const [inputValue, setInputValue] = useState<string>('');

  const { isFetching, isError, refetch } = useQuery({
    queryKey: [QueryKeys.Users],
    queryFn: () => getUsers(inputValue, inputValue),
    enabled: false,
  });

  const handlePressSearch = () => {
    refetch();
    setData({ isListExtended: false });
  };

  const error = <Text>Error occurred</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Input
          setValueChange={text => (
            setInputValue(text), setData({ isListExtended: true })
          )}
          placeholder="Enter username"
        />

        <Button label="Search" onPress={handlePressSearch} />

        {!data?.isListExtended && inputValue.length > 0 && (
          <View style={styles.info}>
            <Text style={styles.infoText}>
              Showing users for {'"' + inputValue + '"'}
            </Text>
          </View>
        )}

        <View style={styles.list}>
          {isFetching ? <ActivityIndicator /> : isError ? error : <Accordion />}
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
