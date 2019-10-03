import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '../screens/SearchScreen';

const AppNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
