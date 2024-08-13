import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './HomeScreen.styles';

export interface HomeScreenProps {}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up HomeScreen.tsx to start working on your HomeScreen!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
