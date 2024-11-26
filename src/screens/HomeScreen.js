import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Inicio</Text>
            </View>

            {/* Ejemplo de tarjeta para los vehículos */}
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://example.com/jeep.jpg' }} // Reemplaza con tu imagen real
                    style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Jeep Grand Cherokee 2005</Text>
                    <Text style={styles.cardPrice}>$100,000</Text>
                    <Text style={styles.cardDescription}>Motor y transmisión en perfecto estado</Text>
                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.cardButtonText}>Ver</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://example.com/vw.jpg' }} // Reemplaza con tu imagen real
                    style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Volkswagen Jetta 2015</Text>
                    <Text style={styles.cardPrice}>$180,000</Text>
                    <Text style={styles.cardDescription}>Automático, único dueño</Text>
                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.cardButtonText}>Ver</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Botones originales */}
            <View style={styles.buttonsContainer}>
                <Button title='Go to details' onPress={() => navigation.navigate('Details')} />
                <Button title='Go to settings' onPress={() => navigation.navigate('Settings')} />
                <Button title='Go to offers' onPress={() => navigation.navigate('Offers')} />
                <Button title='Go to sell' onPress={() => navigation.navigate('Sell')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    cardImage: {
        width: '100%',
        height: 200,
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF',
        marginVertical: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
    cardButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    cardButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        padding: 20,
        alignItems: 'center',
    },
});

export default HomeScreen;
