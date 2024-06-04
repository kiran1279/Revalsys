import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/Screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})