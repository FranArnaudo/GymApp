/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import MainStackNavigator from './navigators/MainStackNavigator/MainStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nProvider } from './contexts/I18nContext';



function App(): React.JSX.Element {

  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider>
      <I18nProvider>
        <SafeAreaProvider>
          <StatusBar barStyle={theme.type === 'dark' ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}


export default App;
