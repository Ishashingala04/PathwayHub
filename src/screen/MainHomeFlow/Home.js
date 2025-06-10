import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import AttendanceChart from './Homecomponent/AttendanceChart';
import InchargeSection from './Homecomponent/InchargeSection';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LiveClasses from './Homecomponent/LiveClasses';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="menu" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.title}>Pathway Education Hub</Text>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <AttendanceChart />
                <InchargeSection />
                <LiveClasses />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});
