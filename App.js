import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/Screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import MapsScreen from './src/Screens/MapsScreen';
import DashBoard from './src/Screens/DashBoard';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <MapsScreen /> */}
      {/* <DashBoard /> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})