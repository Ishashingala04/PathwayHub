import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native';

function Verification({ navigation }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('home'); // navigate to Home after 2 seconds
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>

                <View style={style.lottie}>
                    <LottieView source={require('../LoginFlow/images/verification.json')} autoPlay loop style={{ width: 250, height: 250 }} speed={1} />
                </View>

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
    lottie: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',

    }
})
export default Verification