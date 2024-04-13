import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { DemoScreen } from '../screens/DemoScreen';

const Tab = createMaterialBottomTabNavigator();

export const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Demo" component={DemoScreen}/>
    </Tab.Navigator>
  );
}