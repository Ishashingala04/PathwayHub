import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Text } from 'react-native'
import Splash from './src/screen/LoginFlow/Splash'
import Types from './src/screen/LoginFlow/Types';
import Onbording from './src/screen/LoginFlow/Onbording';
import Login from './src/screen/LoginFlow/Login';
import Verification from './src/screen/LoginFlow/Verification';
import Home from './src/screen/MainHomeFlow/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Activity from './src/screen/BottomTab/Activity';
import Chat from './src/screen/BottomTab/Chat';
import Profile from './src/screen/BottomTab/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
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
            <Ionicons name="hexagon-outline" color={color} size={size} />
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
  );
}

function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="splash">
            <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" component={Onbording} options={{ headerShown: false }} />
            <Stack.Screen name="type" component={Types} options={{ headerShown: false }} />
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="verify" component={Verification} options={{ headerShown: false }} />
            <Stack.Screen name="home" component={MainTabs} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}

export default App;