import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeSVG from '../../assets/SVG/HomeSVG';
import HomeScreen from '../Screens/HomeScreen';
import ProfileSVG from '../../assets/SVG/ProfileSVG';
import ProfileScreen from '../Screens/ProfileScreen';


const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <HomeSVG size={25} color={color} />
                    ),
                }}
                name="Home" component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <ProfileSVG size={25} color={color} />
                    ),
                }}

                name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})
