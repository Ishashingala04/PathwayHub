import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
    { label: 'Attendance', icon: 'calendar-outline' },
    { label: 'Class Test', icon: 'calculator-outline' },
    { label: 'Assignment', icon: 'document-text-outline' },
    { label: 'Exams', icon: 'clipboard-outline' },
    { label: 'Time Table', icon: 'timer-outline' },
    { label: 'Live Class', icon: 'videocam-outline' },
];

const IconGrid = () => {
    return (
        <View style={styles.grid}>
            {data.map((item, index) => (
                <Pressable key={index} style={styles.item}>
                    <View style={styles.iconCircle}>
                        <Ionicons name={item.icon} size={30} color="#6d515b" />
                    </View>
                    <Text style={styles.label}>{item.label}</Text>
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    item: {
        width: '30%',
        alignItems: 'center',
        marginVertical: 8,
    },
    iconCircle: {
        backgroundColor: '#eadfd9',
        padding: 20,
        borderRadius: 50,
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default IconGrid;
