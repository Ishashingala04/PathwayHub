import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../MainHomeFlow/Home';
import Activity from './Activitycomponent/Activity';
import Chat from './Chat';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function Tabnavigator() {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        height:55,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        paddingTop: 5,
                        paddingBottom: 20,
                        elevation: 5, // Adds shadow for Android
                        shadowOpacity: 0.1, // Adds shadow for iOS
                        shadowRadius: 5,
                        shadowOffset: { width: 0, height: 2 },
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons
                                name={focused ? 'home' : 'home-outline'}
                                color={color}
                                size={size}
                            />
                        ),
                        tabBarActiveTintColor: '#1b3a5d',
                        tabBarInactiveTintColor: '#797786',
                    }}
                />
                <Tab.Screen
                    name="Activity"
                    component={Activity}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="shield-checkmark" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#1b3a5d',
                        tabBarInactiveTintColor: '#797786',

                    }}
                />
                <Tab.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="chatbubble" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#1b3a5d',
                        tabBarInactiveTintColor: '#797786',

                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#1b3a5d',
                        tabBarInactiveTintColor: '#797786',
                    }}
                />
            </Tab.Navigator>

        </>
    )
}

export default Tabnavigator