import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {BasketHomeScreen} from '../screens/BasketHomeScreen';
import {OrderScreen} from '../screens/OrderScreen';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Tab = createMaterialBottomTabNavigator();

export const AppTabs = () => {
  return (
    <Tab.Navigator
      activeColor="#fff"
      activeIndicatorStyle={{backgroundColor:'#fffdf0', elevation: 1}}
      
      inactiveColor="#9cd6ff"
      barStyle={{backgroundColor: '#0074c7'}}
      screenOptions={{
        
      }}>
      <Tab.Screen
        name="Basket"
        component={BasketHomeScreen}
        options={{
          tabBarColor: 'green',
          tabBarIcon: ({color, focused}) => (
            <Fontisto
              name="shopping-basket"
              color={focused ? '#a89502' : 'white'}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Fontisto
              name="shopping-basket-add"
              color={focused ? '#0f2e00' : 'white'}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
