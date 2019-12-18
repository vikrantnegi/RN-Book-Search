import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { withTheme } from 'styled-components';

import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

enableScreens();

const MainStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        header: null,
      },
    },
    Result: {
      screen: ResultScreen,
    },
    BookDetail: {
      screen: BookDetailScreen,
    },
  },
  {
    headerBackTitleVisible: false,
    defaultNavigationOptions: ({ screenProps }) => ({
      headerTintColor: screenProps.colors.primary,
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: screenProps.colors.bg,
        elevation: 0,
      },
    }),
  }
);

const AppContainer = createAppContainer(MainStack);

class Navigation extends React.Component {
  render() {
    return <AppContainer screenProps={this.props.theme} />;
  }
}

export default withTheme(Navigation);
