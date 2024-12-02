import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function DetailsScreen({ route, navigation }) {
    const { title, price, description, image } = route.params || {};

    if (!title || !price || !description || !image) {
        return <Text>Loading...</Text>; 
    }

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>Precio actual: {price}</Text>
                <Text style={styles.description}>{description}</Text>

                <View style={styles.infoRow}>
                    <TouchableOpacity style={styles.messageButton}>
                        <Text style={styles.messageText}>Mensaje</Text>
                    </TouchableOpacity>
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerLabel}>Tiempo Restante</Text>
                        <Text style={styles.timer}>05:34 minutos</Text>
                    </View>
                </View>

                {/* Botón "Aumentar" */}
                <Text style={styles.incrementLabel}>Cantidad a aumentar: $50,000</Text>
                <TouchableOpacity style={styles.incrementButton}>
                    <Text style={styles.incrementButtonText}>Aumentar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    messageButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    messageText: {
        color: '#fff',
        fontSize: 16,
    },
    timerContainer: {
        alignItems: 'flex-end',
    },
    timerLabel: {
        fontSize: 14,
        color: '#666',
    },
    timer: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    incrementLabel: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
    },
    incrementButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    incrementButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DetailsScreen;
