import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

function MisCarros({ navigation }) {
    const cars = [
        {
            id: 1,
            title: "Jeep Grand Cherokee 2005",
            price: "$100,000",
            description: "Motor y transmisión en perfecto estado.",
        },
        {
            id: 2,
            title: "Volkswagen Jetta 2003",
            price: "$80,000",
            description: "En excelentes condiciones, motor revisado.",
        },
        {
            id: 3,
            title: "Chevrolet Aveo 2010",
            price: "$70,000",
            description: "Ideal para primer auto, todo funcionando bien.",
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Mis Carros</Text>
            </View>
            <ScrollView contentContainerStyle={styles.carsContainer}>
                {cars.map((car) => (
                    <View key={car.id} style={styles.carCard}>
                        {/* Espacio reservado para la imagen */}
                        {/* <View style={styles.imagePlaceholder} /> */}
                        <View style={styles.carDetails}>
                            <Text style={styles.carTitle}>{car.title}</Text>
                            <Text style={styles.carPrice}>{car.price}</Text>
                            <Text style={styles.carDescription}>{car.description}</Text>
                            <TouchableOpacity
                                style={styles.viewButton}
                                onPress={() => navigation.navigate('Details', { carId: car.id })}
                            >
                                <Text style={styles.viewButtonText}>Ver</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.navigationButtons}>
                <Button title="Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
                <Button title="Offers" onPress={() => navigation.navigate('Offers')} />
                <Button title="Sell" onPress={() => navigation.navigate('Sell')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 15,
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    carsContainer: {
        padding: 10,
    },
    carCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    imagePlaceholder: {
        height: 150,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
    },
    carDetails: {
        padding: 10,
    },
    carTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    carPrice: {
        fontSize: 14,
        color: '#007AFF',
        marginVertical: 5,
    },
    carDescription: {
        fontSize: 12,
        color: '#666',
    },
    viewButton: {
        backgroundColor: '#28a745',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    viewButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    navigationButtons: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
    },
});

export default MisCarros;
