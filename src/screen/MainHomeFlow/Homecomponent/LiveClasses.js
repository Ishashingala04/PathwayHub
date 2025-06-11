import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LiveClasses() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Live Classes</Text>
      <View style={styles.liveClass}>
        <View>
          <Text style={styles.classTitle}>📘 Geometry Class</Text>
          <Text>10 June, 10:00 AM</Text>
        </View>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={{ color: '#fff' }}>Join</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.liveClass}>
        <View>
          <Text style={styles.classTitle}>📘 Geometry Class</Text>
          <Text>10 June, 10:00 AM</Text>
        </View>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={{ color: '#fff' }}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.liveClass}>
        <View>
          <Text style={styles.classTitle}>📘 Geometry Class</Text>
          <Text>10 June, 10:00 AM</Text>
        </View>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={{ color: '#fff' }}>Join</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 10,
  },
  liveClass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    padding: 15,
    borderRadius: 8,
    elevation: 3,
  },
  classTitle: {
    fontWeight: '600',
    marginBottom: 5,
  },
  joinButton: {
    backgroundColor: '#28a745',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});
