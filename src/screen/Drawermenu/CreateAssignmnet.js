import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

function CreateAssignmnet() {

    const navigation = useNavigation();

    const fields = [
        { icon: 'create-outline', label: 'Class Section' },
        { icon: 'document-text-outline', label: 'Topic Name' },
        { icon: 'document-outline', label: 'Assignment Description' },
        { icon: 'calendar-outline', label: 'Due Date' },
        { icon: 'hourglass-outline', label: 'Time' },
        { icon: 'attach-outline', label: 'Attachment' },
    ];

    return (
        <>
            <SafeAreaView style={styles.container}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Create Assignment</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* Input Buttons */}
                <ScrollView contentContainerStyle={styles.content}>
                    {fields.map((field, index) => (
                        <TouchableOpacity key={index} style={styles.inputBox}>
                            <Ionicons name={field.icon} size={18} color="#a33c57" style={styles.inputIcon} />
                            <Text style={styles.inputText}>{field.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Share Assignment Button */}
                <TouchableOpacity style={styles.shareButton}>
                    <Text style={styles.shareButtonText}>Share Assignment</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )
}

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
    content: {
        padding: 20,
        top: 20
        // paddingBottom: 120,
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#b7b7b7',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginBottom: 15,
        marginHorizontal: 40,
    },
    inputIcon: {
        marginRight: 10,
    },
    inputText: {
        fontSize: 15,
        color: 'black',
        fontWeight: '400',
    },
    shareButton: {
        backgroundColor: '#1b385c',
        paddingVertical: 14,
        borderRadius: 25,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
    },
    shareButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
    },
})
export default CreateAssignmnet