import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen'
import BottomNavigation from './BottomNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import ProductDetails from '../Screens/ProductDetails'
import { useNavigation } from '@react-navigation/native'
import AllProducts from '../Screens/AllProducts'
import ProfileScreen from '../Screens/ProfileScreen'

const StackNavigation = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation()

    return (
        <Stack.Navigator
            screenOptions={{
                // headerShown: false
                headerTitle: " "
            }}
        >
            <Stack.Screen
                name="MainScreen" component={BottomNavigation} />
            <Stack.Screen
                name="AllProducts" component={AllProducts} />
            <Stack.Screen
                options={{
                }}
                name="ProductDetails" component={ProductDetails} />
            <Stack.Screen
                options={{
                }}
                name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})