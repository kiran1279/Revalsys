import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-aXPF-bkb1Fw6kF4QAg0tzuvSbQQTL-hQw&s' }}
                style={styles.profileImage}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.email}>john.doe@example.com</Text>
                <Text style={styles.phone}>123-456-7890</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    detailsContainer: {
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        fontSize: 18,
        marginBottom: 5,
    },
    phone: {
        fontSize: 18,
    },
});

export default ProfileScreen;
