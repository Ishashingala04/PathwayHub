import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function Splash({ navigation }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Type'); // navigate to Home after 2 seconds
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>

                <LinearGradient colors={['#0f3057', '#057d8c']} style={style.loginBox} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
                    {/* <Text style={style.loginText}>Login</Text> */}
                </LinearGradient>
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    loginBox: {

        height: '100%',
        width: '100%'
    },
    login: {
        height: 360,
        width: 330,
        backgroundColor: 'rgba(3,66,89,0.4)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#246AA4',
        elevation: 2
    },
})
export default Splash