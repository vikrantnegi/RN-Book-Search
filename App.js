import 'react-native-gesture-handler';
import bugsnag from '@bugsnag/expo';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import * as Font from 'expo-font';
import * as Icon from '@expo/vector-icons';

import { AppLoading } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

import theme, { ThemeContext } from './config/theme';
import AppNavigator from './navigation/AppNavigator';
import ErrorFallback from './components/ErrorFallback';

const bugsnagClient = bugsnag();
const ErrorBoundary = bugsnagClient.getPlugin('react');

const _makeTheme = (type = 'light') => ({
  ...theme(type),
});

const dark = _makeTheme('dark');
const light = _makeTheme('light');

export default class App extends React.PureComponent {
  state = {
    isLoadingComplete: false,
    theme: 'light',
  };

  componentDidMount() {
    this._changeStatusBarStyle();
  }

  toggleTheme = () => {
    this.setState(
      ({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light',
      }),
      this._changeStatusBarStyle
    );
  };

  _changeStatusBarStyle = () => {
    StatusBar.setBarStyle(
      this.state.theme === 'light' ? 'dark-content' : 'light-content'
    );
  };

  _loadResourcesAsync = async () =>
    Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // Feel free to remove this if you are not using it in your app
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      }),
    ]);

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    bugsnagClient.notify(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;

    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeContext.Provider
          value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
        >
          <ThemeProvider theme={this.state.theme === 'light' ? light : dark}>
            <SafeAreaProvider>
              <AppNavigator />

              <FlashMessage position="bottom" floating />
            </SafeAreaProvider>
          </ThemeProvider>
        </ThemeContext.Provider>
      </ErrorBoundary>
    );
  }
}
