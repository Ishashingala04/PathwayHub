import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';

function Types({ navigation }) {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>

                <View style={style.lottie}>
                    <LottieView source={require('../LoginFlow/images/onboard2.json')} autoPlay loop style={{ width: 300, height: 300 }} speed={1} />
                </View>

                <View style={{bottom:15}} >
                    <Text style={style.text}>Sign In With</Text>
                </View>

                <View style={{ padding: 10 }}>
                    <Pressable style={style.button}>
                        <Text style={style.btntxt}>As A Teacher</Text>
                    </Pressable>

                    <Pressable style={style.button}>
                        <Text style={style.btntxt}>As A Student</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    lottie: {
        height: 500,
        width: 400,
        justifyContent: "center",
        alignItems: 'center',

    },
    text: {
        fontSize: 23,
        color: 'black',
        textAlign: 'center',
        letterSpacing: 1,
        fontWeight:'800'
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 25,
        backgroundColor: '#1b385c',
        padding: 15,
        borderRadius: 10
    },
    btntxt: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        letterSpacing: 1
    }
})
export default Types;