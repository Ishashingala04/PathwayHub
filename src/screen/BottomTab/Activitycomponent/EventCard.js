import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather
    from 'react-native-vector-icons/Feather';

const EventCard = () => {
    return (
        <View style={styles.contanier}>

            <View style={{ marginBottom: 5 }}>
                <Text style={styles.mainheading}>Today's event</Text>

                <View style={styles.card}>
                    <View style={styles.row}>

                        {/* Left Column: Icon */}
                        <View >
                            <Feather
                                name="edit" size={23} color="#535353" />
                        </View>

                        {/* Center Column: Text Info */}
                        <View style={styles.centerSection}>
                            <Text style={styles.heading}>Heading</Text>
                            <Text style={styles.subText}>Geography Class</Text>
                            <Text style={styles.subText}>30/06/2022 - 4:30pm</Text>
                            <Text style={styles.subText}>Class - Xth</Text>
                        </View>

                        {/* Right Column: Buttons */}
                        <View style={styles.rightSection}>
                            <TouchableOpacity style={styles.joinBtn}>
                                <Text style={styles.joinText}>Join</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.removeBtn}>
                                <Text style={styles.removeText}>Remove</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.row}>

                        {/* Left Column: Icon */}
                        <View >
                            <Feather
                                name="edit" size={23} color="#535353" />
                        </View>

                        {/* Center Column: Text Info */}
                        <View style={styles.centerSection}>
                            <Text style={styles.heading}>Heading</Text>
                            <Text style={styles.subText}>Geography Class</Text>
                            <Text style={styles.subText}>30/06/2022 - 4:30pm</Text>
                            <Text style={styles.subText}>Class - Xth</Text>
                        </View>

                        {/* Right Column: Buttons */}
                        <View style={styles.rightSection}>
                            <TouchableOpacity style={styles.joinBtn}>
                                <Text style={styles.joinText}>Join</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.removeBtn}>
                                <Text style={styles.removeText}>Remove</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.row}>

                        {/* Left Column: Icon */}
                        <View >
                            <Feather
                                name="edit" size={23} color="#535353" />
                        </View>

                        {/* Center Column: Text Info */}
                        <View style={styles.centerSection}>
                            <Text style={styles.heading}>Heading</Text>
                            <Text style={styles.subText}>Geography Class</Text>
                            <Text style={styles.subText}>30/06/2022 - 4:30pm</Text>
                            <Text style={styles.subText}>Class - Xth</Text>
                        </View>

                        {/* Right Column: Buttons */}
                        <View style={styles.rightSection}>
                            <TouchableOpacity style={styles.joinBtn}>
                                <Text style={styles.joinText}>Join</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.removeBtn}>
                                <Text style={styles.removeText}>Remove</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contanier: {
        flex: 1
    },
    card: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#fff',
        elevation: 2,
    },
    mainheading: {
        fontWeight: '400',
        fontSize: 17,
        marginBottom: 10,
        fontWeight: '400'
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    centerSection: {
        flex: 1,
        paddingHorizontal: 10,
    },
    heading: {
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 4,
    },
    subText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 2,
    },
    rightSection: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    joinBtn: {
        backgroundColor: '#36b489',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginBottom: 6,
    },
    removeBtn: {
        backgroundColor: '#cd3b3c',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    joinText: {
        color: '#fff',
        fontSize: 14,
    },
    removeText: {
        color: '#ffd8d8',
        fontSize: 14,
    },

});

export default EventCard;
