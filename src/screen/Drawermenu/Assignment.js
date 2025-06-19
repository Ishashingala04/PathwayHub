import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
const dummyData = [
    {
        id: '1',
        title: 'Homework Title',
        class: 'XII - Rose',
        subject: 'English',
        date: '22/04/2022',
        attachment: 'Attachment',
    },
    {
        id: '2',
        title: 'Homework Title',
        class: 'XII - Rose',
        subject: 'English',
        date: '22/04/2022',
        attachment: 'Attachment',
    },
    {
        id: '3',
        title: 'Homework Title',
        class: 'XII - Rose',
        subject: 'English',
        date: '22/04/2022',
        attachment: 'Attachment',
    },
];


function Assignment() {

    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                {/* <Ionicons name="create-outline" size={20} color="#000" style={styles.cardIcon} /> */}
                <Feather name="edit" size={23} color="#535353" tyle={styles.cardIcon} />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardText}>{item.class}</Text>
                    <Text style={styles.cardText}>{item.subject}</Text>
                    <Text style={styles.cardText}>{item.date}</Text>
                    <Text style={styles.cardText}>{item.attachment}</Text>
                </View>
            </View>
            <View style={styles.cardActions}>
                <TouchableOpacity style={styles.viewButton}>
                    <Ionicons name="eye" size={16} color="#fff" />
                    <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton}>
                    <Ionicons name="trash" size={16} color="#fff" />
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <>
            <SafeAreaView style={styles.container}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Assignment</Text>
                    <View style={{ width: 24 }} />
                </View>


                <View style={styles.searchcontainer}>
                    <Ionicons name="search-outline" size={22} color="#787681" style={styles.icon} />
                    <TextInput
                        placeholder="Search"
                        style={styles.input}
                        placeholderTextColor="#787681"
                    />
                    <Ionicons name="mic" size={24} color="#787681" style={styles.icon} />
                </View>


                {/* Homework List */}
                <FlatList
                    data={dummyData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />

                {/* Create Assignment Button */}
                <TouchableOpacity style={styles.createButton} onPress={() => { navigation.navigate('createaasignment') }}>
                    <Text style={styles.createButtonText}>Create Assignment</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

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
    searchcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        margin: 20,
    },
    input: {
        flex: 1,
        height: 45,
        paddingHorizontal: 5,
        color: '#000',
        fontSize: 16
    },
    icon: {
        marginHorizontal: 5,
    },
    card: {
        borderWidth: 1.5,
        borderColor: '#c9cfde',
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 10,
        marginBottom: 15,
    },
    cardHeader: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    cardIcon: {
        marginRight: 10,
        marginTop: 5,
    },
    cardContent: {
        flexDirection: 'column',
        left: 10
    },
    cardTitle: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000',
    },
    cardText: {
        color: '#444',
        fontSize: 13,
        marginTop: 2,
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    viewButton: {
        backgroundColor: '#4CAF50',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 6,
    },
    deleteButton: {
        backgroundColor: '#cd3b3c',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        marginLeft: 6,
        fontSize: 14,
    },
    createButton: {
        backgroundColor: '#1b385c',
        paddingVertical: 14,
        borderRadius: 25,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
    },
    createButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
    },
})
export default Assignment