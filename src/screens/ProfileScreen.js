import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileEs = () => {
    const navigation = useNavigation();

    useEffect(() => {
        console.log('Componente ProfileEs montado');
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>{'←'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.profileSection}>
                <Image
                    source={require('../../assets/images/SF.jpg')}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Jose Juan Lopez Gonzales</Text>
                <Text style={styles.profileLocation}>Aguascalientes, AGS</Text>
                <Text style={styles.profilePhone}>449-211-5051</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.carTitle}>Jetta 2003 estándar</Text>
                <Text style={styles.carStatus}>Disponible</Text>
                <Image
                    source={require('../../assets/images/Jetta03.jpg')}
                    style={styles.carImage}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f5f9',
    },
    header: {
        backgroundColor: '#e6ebf5',
        padding: 10,
    },
    backButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    profileSection: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e6ebf5',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    profileLocation: {
        fontSize: 14,
        color: '#666',
    },
    profilePhone: {
        fontSize: 14,
        color: '#007AFF',
        marginTop: 5,
    },
    card: {
        margin: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    carTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    carStatus: {
        fontSize: 14,
        color: '#28a745',
        marginBottom: 10,
    },
    carImage: {
        width: '100%',
        height: 150,
        borderRadius: 5,
    },
});

export default ProfileEs;
