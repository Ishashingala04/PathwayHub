import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const AttendanceChart = () => {
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default AttendanceChart;
