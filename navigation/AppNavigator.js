import React from 'react';
import { useScreens } from 'react-native-screens';
import { createAppContainer, DrawerItems } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

useScreens();

const MainStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerTransparent: true,
      headerLeft: (
        <Ionicons
          name="md-menu"
          size={26}
          style={{ marginLeft: 10, padding: 10 }}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }),
  },
  Result: {
    screen: ResultScreen,
  },
  BookDetail: {
    screen: BookDetailScreen,
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <Ionicons
          name="md-share"
          title="Share"
          size={24}
          style={{ marginRight: 10, padding: 10 }}
          onPress={() => {}}
        />
      ),
    }),
  },
});

const RootStack = createDrawerNavigator({
  Main: MainStack,
});

export default createAppContainer(RootStack);
