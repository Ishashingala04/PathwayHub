import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const studentData = [
    { id: '1', name: 'Brandon Aminoff', rollNo: '1', status: 'P', image: require('./../../img/profile.jpg') },
    { id: '2', name: 'Jakob Curtis', rollNo: '2', status: 'P', image: require('./../../img/profile.jpg') },
    { id: '3', name: 'Omar Lubin', rollNo: '3', status: 'L', image: require('./../../img/profile.jpg') },
    { id: '4', name: 'Jakob Baptista', rollNo: '4', status: 'A', image: require('./../../img/profile.jpg') },
    { id: '5', name: 'Marcus Lipshutz', rollNo: '5', status: 'A', image: require('./../../img/profile.jpg') },
    { id: '6', name: 'Nolan Vetrovs', rollNo: '6', status: 'L', image: require('./../../img/profile.jpg') },
    { id: '7', name: 'Justin Levin', rollNo: '7', status: 'P', image: require('./../../img/profile.jpg') },
    { id: '8', name: 'Leo Philips', rollNo: '8', status: 'P', image: require('./../../img/profile.jpg') },
];

const backgroundColors = ["#d9e3fb", "#d3ceed", "#f1cebc", "#fadce1", "#cebcd7"];

const Attendance = () => {
    const navigation = useNavigation();

    const renderItem = ({ item, index }) => (
        <View style={[styles.card, { backgroundColor: backgroundColors[index % backgroundColors.length] }]}>
            <Image source={item.image} style={styles.avatar} />
            <View style={styles.studentInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.roll}>Roll no. {item.rollNo}</Text>
            </View>
            <View style={styles.actions}>
                <View style={styles.callcircle}>
                    <TouchableOpacity >
                        <Ionicons name="call" size={22} color="#84cfb6" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.statusCircle, styles[`statusCircle${item.status}`]]}>
                    <Text style={styles.statusText}>{item.status}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mark Attendance</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Floating Filters */}
            <View style={styles.filterContainer}>
                <Text style={styles.filterBox}>24/08/2022</Text>
                <Text style={styles.filterBox}>1-A</Text>
                <TouchableOpacity style={styles.viewButton} onPress={() => { navigation.navigate('viewattendance') }}>
                    <Text style={styles.viewText}>View</Text>
                </TouchableOpacity>
            </View>

            {/* Total Students */}
            <View style={styles.totalRow}>
                <Text style={styles.totalText}>Total Students - {studentData.length}</Text>
            </View>

            {/* Student List */}
            <FlatList
                data={studentData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        height: 90,
        backgroundColor: '#1b385c',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 5
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        top: 70,
        left: 80,
        right: 80,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
        zIndex: 10
    },
    filterBox: {
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 14,
        color: '#333'
    },
    viewButton: {
        backgroundColor: '#1b385c',
        paddingVertical: 6,
        paddingHorizontal: 14,
    },
    viewText: { color: '#fff' },

    totalRow: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginTop: 60, // push down due to floating filter
        marginRight: 15,
    },
    totalText: { fontSize: 15 },
    card: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 12,
        padding: 10,
        alignItems: 'center'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#6d515b'
    },
    studentInfo: {
        flex: 1,
        marginHorizontal: 12
    },
    name: { fontSize: 15 },
    roll: {
        color: '#666',
        fontSize: 13
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    callcircle: {
        backgroundColor: 'white',
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: '#84cfb6',
        width: 45,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusCircle: {
        width: 45,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
    statusP: { backgroundColor: '#d3eafd' },
    statusA: { backgroundColor: '#ffd7d7' },
    statusL: { backgroundColor: '#ffe8cc' },
    statusCircleP: { backgroundColor: '#4caf50' },
    statusCircleA: { backgroundColor: '#cd3b3c' },
    statusCircleL: { backgroundColor: '#767686' },
});

export default Attendance;
