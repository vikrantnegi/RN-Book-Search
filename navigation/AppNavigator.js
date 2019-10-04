import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';

const AppNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    Result: {
      screen: ResultScreen,
    },
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
