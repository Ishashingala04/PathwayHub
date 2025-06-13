import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import AttendanceChart from './Homecomponent/AttendanceChart';
import InchargeSection from './Homecomponent/InchargeSection';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LiveClasses from './Homecomponent/LiveClasses';
import Header from './Homecomponent/Header';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Pathway Education Hub" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
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
    scrollContent: {
        paddingBottom: 20,
    },
});
