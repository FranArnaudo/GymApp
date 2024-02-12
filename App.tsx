/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext } from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import MainStackNavigator from './navigators/MainStackNavigator/MainStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nProvider } from './contexts/I18nContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';



function App(): React.JSX.Element {

  const { theme } = useContext(ThemeContext)
  return (
    <Provider store={store}>
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
    </Provider>
  );
}


export default App;
