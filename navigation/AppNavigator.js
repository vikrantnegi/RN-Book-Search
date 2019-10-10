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
      // navigationOptions: ({ navigation }) => ({
      //   headerRight: (
      //     <Ionicons
      //       name="md-share"
      //       title="Share"
      //       size={24}
      //       style={{ marginRight: 10, padding: 10 }}
      //       onPress={() => {}}
      //     />
      //   ),
      // }),
    },
  },
  {
    headerBackTitleVisible: false,
  }
);

export default createAppContainer(MainStack);
