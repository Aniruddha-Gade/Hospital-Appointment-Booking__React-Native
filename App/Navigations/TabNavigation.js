import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Appointement from '../screens/Appointement';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
import Colors from '../../assets/shared/Colors';


const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name='Home1' component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Appointement' component={Appointement}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          )
        }} />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          )
        }} />

    </Tab.Navigator>
  );
}

export default TabNavigation;
