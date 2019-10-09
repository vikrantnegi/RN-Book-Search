import React from 'react';
import { createAppContainer, DrawerItems } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

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
  },
});

const RootStack = createDrawerNavigator({
  Main: MainStack,
});

export default createAppContainer(RootStack);
