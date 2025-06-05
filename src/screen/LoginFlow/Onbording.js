import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

function Onbording({ navigation }) {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>

                <Onboarding
                    onDone={() => navigation.replace('type')}
                    onSkip={() => navigation.replace('type')}
                    pages={[
                        {
                            backgroundColor: '#fef4f4',
                            image: (
                                <View style={style.lottie}>
                                    <LottieView source={require('../LoginFlow/images/onboard2.json')} autoPlay loop style={{ width: 300, height: 300 }} speed={1} />
                                </View>
                            ),
                            title: 'Global Learning',
                            subtitle: 'Empower education with a global reach and interactive platform.',
                        },
                        {
                            backgroundColor: '#fef3c7',
                            image: (
                                <View style={style.lottie}>
                                    <LottieView source={require('../LoginFlow/images/onboard1.json')} autoPlay loop style={{ width: 400, height: 400 }} speed={1} />
                                </View>
                            ),
                            title: 'Smart Study',
                            subtitle: 'Interactive lessons for students with books and digital content.',
                        },
                        {
                            backgroundColor: '#e9f5ff',
                            image: (
                                <View style={style.lottie}>
                                    <LottieView source={require('../LoginFlow/images/onboard3.json')} autoPlay loop style={{ width: 390, height: 400 }} speed={1} />
                                </View>
                            ),
                            title: 'Safe Transport',
                            subtitle: 'Track school buses & vans ensuring student safety at every step.',
                        },
                    ]}
                />
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    lottie: {
        height: 400,
        width: 300,
        justifyContent: "center",
        alignItems: 'center',

    }
})

export default Onbording