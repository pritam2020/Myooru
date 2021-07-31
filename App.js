/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import LaunchScreen from './screens/LaunchScreen';
import EndUserScreen from './screens/EndUserScreen';
import RetailerScreen from './screens/RetailerScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LaunchScreen} />
        <Stack.Screen name="EndUser" component={EndUserScreen} />
        <Stack.Screen name="Retailer" component={RetailerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
