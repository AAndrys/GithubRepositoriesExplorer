import { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import HomeScreen, { HomeScreenProps } from './screens/HomeScreen/HomeScreen';

export interface AppProps {}

type RootStackParamList = {
  Home: undefined;
};

type Screen = {
  name: keyof RootStackParamList;
  component: React.ComponentType<HomeScreenProps>;
  options: NativeStackNavigationOptions;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screens: Screen[] = [
  { name: 'Home', component: HomeScreen, options: { headerShown: false } },
];

const App: FunctionComponent<AppProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {screens.map(({ name, component, options }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
