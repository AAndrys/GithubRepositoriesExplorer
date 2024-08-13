import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen, { HomeScreenProps } from './screens/HomeScreen/HomeScreen';

export interface AppProps {}

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
};

type Screen = {
  name: keyof RootStackParamList;
  component: React.ComponentType<HomeScreenProps>;
};

const screens: Screen[] = [{ name: 'Home', component: HomeScreen }];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {screens.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
