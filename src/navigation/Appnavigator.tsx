import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/LoginFlow/Splash';
import Onbording from '../screen/LoginFlow/Onbording';
import Types from '../screen/LoginFlow/Types';
import Login from '../screen/LoginFlow/Login';
import Verification from '../screen/LoginFlow/Verification';
import Tabnavigator from '../screen/BottomTab/Tabnavigator';
import DrawerNavigator from './DrawerNavigator';



const Stack = createNativeStackNavigator();


function Appnavigator() {
    return (
       
            <NavigationContainer>
                <Stack.Navigator initialRouteName="splash">
                    <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="onboarding" component={Onbording} options={{ headerShown: false }} />
                    <Stack.Screen name="type" component={Types} options={{ headerShown: false }} />
                    <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="verify" component={Verification} options={{ headerShown: false }} />
                    <Stack.Screen name="home" component={DrawerNavigator} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Appnavigator