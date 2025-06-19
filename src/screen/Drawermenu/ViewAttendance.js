import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ProgressChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, G } from 'react-native-svg';
import { Calendar } from 'react-native-calendars';

const screenWidth = Dimensions.get('window').width;

const ViewAttendance = () => {
    const navigation = useNavigation();
    const [month, setMonth] = useState('April, 2022');
    const [selectedDate, setSelectedDate] = useState('2022-04-24');
    const [currentMonth, setCurrentMonth] = useState('2022-04-01');

    const markedDates = {
        '2022-04-06': { selected: true, selectedColor: '#e6e6fa' }, // Present
        '2022-04-07': { selected: true, selectedColor: '#e6e6fa' },
        '2022-04-08': { selected: true, selectedColor: '#e6e6fa' },
        '2022-04-24': { selected: true, selectedColor: '#1b385c', selectedTextColor: '#fff' }, // Selected date
        '2022-04-10': { selected: true, selectedColor: '#8e8eaa' },
        '2022-04-16': { selected: true, selectedColor: '#e74c3c' },
    };

    const size = 140;
    const strokeWidth = 13;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const present = 0.6;
    const leave = 0.25;
    const absent = 0.15;

    const presentStroke = present * circumference;
    const leaveStroke = leave * circumference;
    const absentStroke = absent * circumference;

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>View attendance</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Floating Filters */}
            <View style={styles.filterContainer}>
                <Text style={styles.filterBox}>1-A</Text>
                <Text style={styles.filterBox}>Shivaay Sharma</Text>
                <TouchableOpacity style={styles.viewButton}>
                    <Text style={styles.viewText}>View</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

                {/* Month Selector */}
                <View style={styles.monthSelector}>
                    <TouchableOpacity>
                        <Ionicons name="chevron-back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.monthText}>{month}</Text>
                    <TouchableOpacity>
                        <Ionicons name="chevron-forward" size={22} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Calendar Styled Box */}
                {/* Calendar container with student name */}
                <View style={styles.calendarBox}>
                    <Text style={styles.studentName}>Shivaay Sharma</Text>
                    <Calendar
                        current={currentMonth}
                        onDayPress={day => setSelectedDate(day.dateString)}
                        markedDates={{
                            ...markedDates,
                            [selectedDate]: {
                                selected: true,
                                selectedColor: '#1b385c',
                                selectedTextColor: '#fff',
                            },
                        }}

                        disableMonthChange={true}
                        hideArrows={true}
                        hideExtraDays={false}
                        disableArrowLeft={true}
                        disableArrowRight={true}
                        hideDayNames={false}
                        renderHeader={() => null}
                        enableSwipeMonths={false}
                        style={styles.calendarStyle}
                        theme={{
                            calendarBackground: '#fff',
                            textSectionTitleColor: '#444',
                            selectedDayTextColor: '#fff',
                            todayTextColor: '#e67e22',
                            dayTextColor: '#000',
                            textDisabledColor: '#ccc',
                            textDayFontWeight: '500',
                            textDayFontSize: 14,
                            textDayHeaderFontSize: 13,
                        }}
                    />
                </View>

                {/* Attendance Summary */}
                <View style={styles.summaryRow}>
                    <View style={[styles.summaryBox, { backgroundColor: '#2ecc71' }]}>
                        <Text style={styles.summaryNumber}>14</Text>
                        <Text style={styles.summaryLabel}>Present</Text>
                    </View>
                    <View style={[styles.summaryBox, { backgroundColor: '#8e8eaa' }]}>
                        <Text style={styles.summaryNumber}>1</Text>
                        <Text style={styles.summaryLabel}>Leave</Text>
                    </View>
                    <View style={[styles.summaryBox, { backgroundColor: '#e74c3c' }]}>
                        <Text style={styles.summaryNumber}>3</Text>
                        <Text style={styles.summaryLabel}>Absent</Text>
                    </View>
                </View>

                {/* Attendance Chart */}
                <View style={styles.chartmaincontanier}>
                    <View style={styles.chartContainer}>
                        <Svg width={size} height={size}>
                            <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
                                <Circle
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius}
                                    stroke="#00A76E" // Present
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={`${presentStroke}, ${circumference}`}
                                    fill="transparent"
                                />
                                <Circle
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius}
                                    stroke="#E53935" // Leave
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={`${leaveStroke}, ${circumference}`}
                                    strokeDashoffset={-presentStroke}
                                    fill="transparent"
                                />
                                <Circle
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius}
                                    stroke="#9E9E9E" // Absent
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={`${absentStroke}, ${circumference}`}
                                    strokeDashoffset={-(presentStroke + leaveStroke)}
                                    fill="transparent"
                                />
                            </G>
                        </Svg>
                    </View>

                    <View style={styles.labels}>
                        <Text style={{ color: '#00A76E', paddingHorizontal: 2 }}>● Present</Text>
                        <Text style={{ color: '#E53935', paddingHorizontal: 5 }}>● Leave</Text>
                        <Text style={{ color: '#9E9E9E', paddingHorizontal: 5 }}>● Absent</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
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
        left: 70,
        right: 70,
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

    monthSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1b385c',
        marginTop: 40,
        marginHorizontal: 30,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
    },
    monthText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },

    calendarBox: {
        marginHorizontal: 30,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#8e4e5e',
        // padding: 10,
        paddingBottom: 30,
        alignItems: 'center',
    },
    studentName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    summaryBox: {
        width: 90,
        height: 70,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryNumber: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    summaryLabel: { color: '#fff', fontSize: 14 },
    chartmaincontanier: {
        backgroundColor: '#fff',
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 10,
        elevation: 4,
        alignItems: 'center',
        width: 220,
        alignSelf: 'center',
        marginTop: 20,
    },
    chartContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    labels: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        width: '90%',
    },
});

export default ViewAttendance;
