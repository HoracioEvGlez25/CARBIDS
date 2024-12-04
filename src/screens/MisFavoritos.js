import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

function MisFavoritos({ navigation }) {
    const favoriteCars = [
        {
            id: 1,
            title: "Mustang",
            price: "$450,000",
            description: "Motor y transmisión en perfecto estado.",
            image: "../../assets/images/Mustang.jpg", 
        },
        {
            id: 2,
            title: "Audi A3",
            price: "$356,000",
            description: "En excelentes condiciones, motor revisado.",
            image: "../../assets/images/Audi.jpg", 
        },
        {
            id: 3,
            title: "Chevrolet Aveo 2010",
            price: "$70,000",
            description: "Ideal para primer auto, todo funcionando bien.",
            image: "../../assets/images/aveo-2010.jpg", 
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.carsContainer}>
                {favoriteCars.map((product) => (
                    <View key={product.id} style={styles.carCard}>
                        <Image
                            source={{ uri: product.image }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <View style={styles.carDetails}>
                            <Text style={styles.carTitle}>{product.title}</Text>
                            <Text style={styles.carPrice}>{product.price}</Text>
                            <Text style={styles.carDescription}>{product.description}</Text>
                            <TouchableOpacity
                                style={styles.viewButton}
                                onPress={() => navigation.navigate('Details', {
                                    title: product.title,
                                    price: product.price,
                                    description: product.description,
                                    image: product.image,
                                })}
                            >
                                <Text style={styles.viewButtonText}>Ver</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
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
    image: {
        height: 150,
        width: '100%',
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default MisFavoritos;
