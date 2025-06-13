import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={24} color="#787681" style={styles.icon} />
            <TextInput
                placeholder="Search"
                style={styles.input}
                placeholderTextColor="#787681"
            />
            <Ionicons name="mic" size={24} color="#787681" style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 45,
        paddingHorizontal: 5,
        color: '#000',
        fontSize:16
    },
    icon: {
        marginHorizontal: 5,
    },
});

export default SearchBar;
