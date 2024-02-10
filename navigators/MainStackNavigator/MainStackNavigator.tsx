import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import WorkoutNavigator from '../WorkoutNavigator/WorkoutNavigator';

export type MainStackParamList = {
  HomeScreen: undefined;
  WorkoutNavigator: undefined
};
const Stack = createNativeStackNavigator<MainStackParamList>();
function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="WorkoutNavigator" component={WorkoutNavigator} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;