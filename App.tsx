import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text } from 'react-native'
import Splash from './src/screen/LoginFlow/Splash'
import Types from './src/screen/LoginFlow/Types';
import Onbording from './src/screen/LoginFlow/Onbording';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="splash">
            <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" component={Onbording} options={{ headerShown: false }} />
            <Stack.Screen name="type" component={Types} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}

export default App