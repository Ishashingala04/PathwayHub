// DrawerNavigator.js
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Screens
import Tabnavigator from '../screen/BottomTab/Tabnavigator';
import Attendance from '../screen/Drawermenu/Attendance';

// Add your other screens here
const Drawer = createDrawerNavigator();     

const CustomDrawerContent = ({ navigation }) => {
    const menuItems = [
        { name: 'Dashboard', icon: <MaterialIcons name="dashboard" size={18} color="#6d515b" />, screen: 'Dashboard' },
        { name: 'Attendance', icon: <Ionicons name="calendar-outline" size={18} color="#6d515b" />, screen: 'Attendance' },
        { name: 'Class Test', icon: <MaterialIcons name="assignment" size={18} color="#6d515b" />, screen: 'Dashboard' },
        { name: 'Assignment', icon: <MaterialIcons name="assignment-turned-in" size={18} color="#6d515b" />, screen: 'Dashboard' },
        { name: 'Communication', icon: <Ionicons name="logo-wechat" size={18} color="#6d515b" />, screen: 'Dashboard' },
        { name: 'Exams', icon: <MaterialIcons name="description" size={18} color="#6d515b" />, screen: 'Dashboard' },
        { name: 'Time Table', icon: <FontAwesome5 name="clock" size={16} color="#6d515b" />, screen: 'Dashboard' },
        { name: 'Live Class', icon: <MaterialIcons name="live-tv" size={18} color="#6d515b" />, screen: 'Dashboard' },
        { name: 'Notifications', icon: <Ionicons name="notifications-outline" size={18} color="#6d515b" />, screen: 'Dashboard' },
        { name: 'Concerns', icon: <Ionicons name="headset-outline" size={18} color="#6d515b" />, screen: 'Dashboard' },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: '#f5fbfd' }}>
            {/* Profile Header */}
            <View style={styles.headerContainer}>
                <Image source={require('../img/profile.jpg')} style={styles.profileImage} />
                <Text style={styles.profileName}>Himanshi Mehra</Text>
            </View>

            {/* Menu Items */}
            <ScrollView contentContainerStyle={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={() => navigation.navigate(item.screen)}
                    >
                        <View style={styles.icon}>{item.icon}</View>
                        <Text style={styles.menuText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Log Out */}
            <TouchableOpacity style={styles.logout}>
                <Ionicons name="log-out-outline" size={18} color="#03415A" style={styles.icon} />
                <Text style={styles.menuText}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: 280,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                },
            }}
        >
            <Drawer.Screen name="Dashboard" component={Tabnavigator} />
            <Drawer.Screen name="Attendance" component={Attendance} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#1b385c',
        paddingVertical: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center"
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 35,
        margin: 10
    },
    profileName: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    },
    menuContainer: {
        padding: 15,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 25,
    },
    icon: {
        marginRight: 15,
        width: 20,
        alignItems: 'center',
    },
    menuText: {
        fontSize: 13,
        color: '#03415A',
    },
    logout: {
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        paddingLeft: 25,
    },
});
