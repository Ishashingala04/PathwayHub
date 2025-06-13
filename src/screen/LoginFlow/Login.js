import React, { useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

function Login({ route, navigation }) {
    const { userType } = route.params; 
    const [mobileNo, setMobileNo] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>

                <View style={style.maincontainer}>

                    <View>
                        <Text style={style.text}>Let's Sign In</Text>
                    </View>
                    <View>
                        <Text style={{ padding: 10, fontSize: 18, color: '#a2a1a8' }}>Welcome Back</Text>
                    </View>

                    {/* User field */}
                    <View style={{ paddingHorizontal: 10, padding: 20 }}>
                        {userType === 'Teacher' ? (
                            // Mobile number field for Teacher
                            <View style={{ margin: 5 }}>
                                <Text style={{ fontWeight: '500', color: '#4a4855' }}>Mobile Number</Text>
                                <View style={style.inputContainer}>
                                    <TextInput
                                        placeholder="Mobile Number"
                                        placeholderTextColor="#B9B5B9"
                                        style={style.input}
                                        keyboardType="phone-pad"
                                        value={mobileNo}
                                        onChangeText={setMobileNo}
                                        maxLength={10}
                                    />
                                </View>
                            </View>
                        ) : (
                            // Username and Password fields for Student
                            <>
                                <View style={{ margin: 5 }}>
                                    <Text style={{ fontWeight: '500', color: '#4a4855' }}>User Name</Text>
                                    <View style={style.inputContainer}>
                                        <TextInput
                                            placeholder="User Id"
                                            placeholderTextColor="#B9B5B9"
                                            style={style.input}
                                            value={username}
                                            onChangeText={setUsername}
                                        />
                                    </View>
                                </View>

                                <View style={{ margin: 5 }}>
                                    <Text style={{ fontWeight: '500', color: '#4a4855' }}>Password</Text>
                                    <View style={style.inputContainer}>
                                        <TextInput
                                            placeholder="Password"
                                            placeholderTextColor="#B9B5B9"
                                            style={style.input}
                                            // keyboardType="numeric"
                                            secureTextEntry={!showPassword}
                                            value={password}
                                            onChangeText={setPassword}
                                        />
                                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                            <Ionicons
                                                name={showPassword ? 'eye-sharp' : 'eye-off-sharp'}
                                                size={24}
                                                color="#B9B5B9"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                        )}
                    </View>

                    {/* Sign Button */}
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={style.signbtn} onPress={() => navigation.navigate('verify')}>
                            <Text style={style.signtxt}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Forget pass */}
                    {userType === 'Student' && (
                        <View style={{ top: 10 }}>
                            <Pressable>
                                <Text style={style.forgettxt}>Forget Password?</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    maincontainer: {
        justifyContent: 'center',
        margin: 20
    },
    lottie: {
        height: 500,
        width: 400,
        justifyContent: "center",
        alignItems: 'center',

    },
    text: {
        fontSize: 23,
        color: 'black',
        letterSpacing: 1,
        fontWeight: '600',
        padding: 10
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
        borderRadius: 25,
        backgroundColor: '#1b385c',
        width: 180,
        padding: 10
    },
    signtxt: {
        color: 'white',
        fontSize: 16,
        textAlign: "center"
    },
    forgettxt: {
        textAlign: 'center',
        fontSize: 15,
        paddingTop: 13,
        color: '#72717b'
    }
})
export default Login