import React, { useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

function Types({ navigation }) {

    return (
        <>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>

                <View style={style.maincontainer}>

                    <View>
                        <Text style={style.text}>Welcome Back</Text>
                    </View>
                    <View>
                        <Text style={{ padding: 10, fontSize: 18, color: '#a2a1a8', top: 15 }}>Sign In With As A</Text>
                    </View>

                    {/* User filed */}
                    <View style={{ paddingHorizontal: 10, padding: 20 }}>

                        <View style={{ margin: 5 }}>
                            <View style={{ margin: 15 }}>
                                <TouchableOpacity style={style.signbtn} onPress={() => navigation.navigate('login', { userType: 'Teacher' })}>
                                    <Text style={style.signtxt}>I'm a Teacher</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ margin: 5 }}>
                            <View style={{ margin: 15 }}>
                                <TouchableOpacity style={style.signbtn} onPress={() => navigation.navigate('login', { userType: 'Student' })}>
                                    <Text style={style.signtxt}>I'm a Student</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    maincontainer: {
        justifyContent: 'center',
        margin: 20,
    },
    text: {
        fontSize: 23,
        color: 'black',
        letterSpacing: 1,
        fontWeight: '600',
        padding: 10,
        top: 15
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    input: {
        width: '90%',
    },
    signbtn: {
        borderRadius: 15,
        backgroundColor: '#1b385c',
        padding: 13
    },
    signtxt: {
        color: 'white',
        fontSize: 16,
        textAlign: "center"
    },
})
export default Types;