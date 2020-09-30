import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { withTheme } from 'styled-components';

import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

enableScreens();

const Stack = createStackNavigator();

// const MainStack = test(
//   {
//     Search: {
//       screen: SearchScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },r
//     Result: {
//       screen: ResultScreen,
//     },
//     BookDetail: {
//       screen: BookDetailScreen,
//     },
//   },
//   {
//     headerBackTitleVisible: false,
//     defaultNavigationOptions: ({ screenProps }) => ({
//       headerTintColor: screenProps.colors.primary,
//       headerStyle: {
//         borderBottomWidth: 0,
//         backgroundColor: screenProps.colors.bg,
//         elevation: 0,
//       },
//     }),
//   }
// );

function Navigation({ theme }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: theme.colors.primary,
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: theme.colors.bg,
            elevation: 0,
          },
        }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withTheme(Navigation);
