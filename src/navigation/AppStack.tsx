import { createStackNavigator } from '@react-navigation/stack';
import { BasketHomeScreen } from '../screens/BasketHomeScreen';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BasketHomeScreen} />
    </Stack.Navigator>
  );
}