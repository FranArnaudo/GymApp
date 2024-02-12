import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import WorkoutNavigator from '../WorkoutNavigator/WorkoutNavigator';
import { BottomTabsNavigator } from '../BottomTabNavigator/BottomTabNavigator';

export type ConfigStackParamsList = {
  ConfigScreen: undefined;
};
const Stack = createNativeStackNavigator<ConfigStackParamsList>();
function ConfigStackNavigator() {
  return (
    <Stack.Navigator initialRouteName='ConfigScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConfigScreen" component={BottomTabsNavigator} />
    </Stack.Navigator>
  );
}

export default ConfigStackNavigator;