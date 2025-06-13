import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

function Header({ title = "Default Title" }) {
    return (
        <>
            <SafeAreaView>

                <View style={styles.header}>
                    <TouchableOpacity >
                        <Ionicons name="menu" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    contanier: {
        flex: 1
    },
    header: {
        height: 90,
        backgroundColor: '#1b385c',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 20,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
export default Header