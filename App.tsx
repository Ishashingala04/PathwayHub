import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text } from 'react-native'
import Splash from './src/screen/LoginFlow/Splash'
import Types from './src/screen/LoginFlow/Types';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Type" component={Types} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Home" component={Home} /> */}
          </Stack.Navigator>
        </NavigationContainer>

      </SafeAreaView>
    </>
  )
}

export default App