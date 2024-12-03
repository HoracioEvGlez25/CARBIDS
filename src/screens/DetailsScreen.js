import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

function DetailsScreen({ route, navigation }) { 
    const { title, price, description, image } = route.params || {};

    const [currentPrice, setCurrentPrice] = useState(price);
    const incrementAmount = 50000;
    const [isModalVisible, setModalVisible] = useState(false);

    const handleIncrement = () => {
        setCurrentPrice(prevPrice => prevPrice + incrementAmount);
    };

    const handleMessagePress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    if (!title || !price || !description || !image) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>Precio actual: ${currentPrice.toLocaleString()}</Text>
                <Text style={styles.description}>{description}</Text>

                <View style={styles.infoRow}>
                    <TouchableOpacity style={styles.messageButton} onPress={handleMessagePress}>
                        <Text style={styles.messageText}>Mensaje</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.timerLabel}>Tiempo Restante</Text>
                        <Text style={styles.timer}>05:34 minutos</Text>
                        <Button title='Reunion' onPress={() => navigation.navigate('ReunionScreen')} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.incrementLabel}>Cantidad a aumentar: ${incrementAmount.toLocaleString()}</Text>
                <TouchableOpacity style={styles.incrementButton} onPress={handleIncrement}>
                    <Text style={styles.incrementButtonText}>Aumentar</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalMessage}>
                            El negociante no está disponible en este momento. En cuanto esté disponible, responderá su mensaje a la brevedad.
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Escriba su mensaje aquí..."
                        />
                        <Button title="Cerrar" onPress={handleCloseModal} color="#007bff" />
                    </View>
                </View>
            </Modal>
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
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalMessage: {
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    textInput: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default DetailsScreen;
