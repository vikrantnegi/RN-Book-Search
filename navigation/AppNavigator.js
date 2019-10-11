import React from 'react';
import { useScreens } from 'react-native-screens';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

useScreens();

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
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: '#fafafa',
        elevation: 0,
      },
    },
  }
);

export default createAppContainer(MainStack);
