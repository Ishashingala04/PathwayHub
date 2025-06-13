import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // For the notebook icon

function InchargeSection() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Class Incharge Section */}
        <View style={{ marginBottom: 10 }}>
          <View style={{ paddingHorizontal: 8 }}>
            <Text style={styles.heading}>Class incharge</Text>
          </View>
          <View style={styles.boxRow}>
            <Pressable style={styles.classbox}>
              <View style={styles.iconTextContainer}>
                <AntDesign name="book" size={30} color="#6d515b" />
                <Text style={styles.boxText}>XII - Lily</Text>
              </View>
            </Pressable>
            <Pressable style={styles.classbox}>
              <View style={styles.iconTextContainer}>
                <AntDesign name="book" size={30} color="#6d515b" />
                <Text style={styles.boxText}>XII - Lily</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* Subject Incharge Section */}
        <View style={{ marginBottom: 5 }}>
          <View style={styles.headerRow}>
            <Text style={styles.heading}>Subject incharge</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <View style={styles.boxRow}>
            <Pressable style={styles.classbox}>
              <View style={styles.iconTextContainer}>
                <AntDesign name="book" size={30} color="#6d515b" />
                <Text style={styles.boxText}>XII - Lily</Text>
              </View>
            </Pressable>
            <Pressable style={styles.classbox}>
              <View style={styles.iconTextContainer}>
                <AntDesign name="book" size={30} color="#6d515b" />
                <Text style={styles.boxText}>XII - Lily</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8
  },
  seeAll: {
    color: '#88888a',
    fontSize: 14,
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  classbox: {
    backgroundColor: '#eadfd9',
    width: '45%',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    marginTop: 5, // Space between icon and text
    fontSize: 14,
  },
});
export default InchargeSection