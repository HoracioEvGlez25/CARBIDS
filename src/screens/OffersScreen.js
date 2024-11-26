import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button } from "react-native";

function OffersScreen({ navigation }) {
    const offers = [
        {
            id: 1,
            title: "Producto 1",
            price: "$10,000",
            description: "Descripción breve del producto 1.",
        },
        {
            id: 2,
            title: "Producto 2",
            price: "$15,000",
            description: "Descripción breve del producto 2.",
        },
        {
            id: 3,
            title: "Producto 3",
            price: "$20,000",
            description: "Descripción breve del producto 3.",
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Ofertas</Text>
            </View>
            <ScrollView contentContainerStyle={styles.offersContainer}>
                {offers.map((offer) => (
                    <View key={offer.id} style={styles.offerCard}>
                        {/* Espacio reservado para la imagen */}
                        {/* <View style={styles.imagePlaceholder} /> */}
                        <View style={styles.offerDetails}>
                            <Text style={styles.offerTitle}>{offer.title}</Text>
                            <Text style={styles.offerPrice}>{offer.price}</Text>
                            <Text style={styles.offerDescription}>{offer.description}</Text>
                            <TouchableOpacity
                                style={styles.viewButton}
                                onPress={() => navigation.navigate('Details', { offerId: offer.id })}
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
    offersContainer: {
        padding: 10,
    },
    offerCard: {
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
    offerDetails: {
        padding: 10,
    },
    offerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    offerPrice: {
        fontSize: 14,
        color: '#007AFF',
        marginVertical: 5,
    },
    offerDescription: {
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

export default OffersScreen;
