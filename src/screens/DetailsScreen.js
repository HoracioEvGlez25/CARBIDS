import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Button, ScrollView } from 'react-native';

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
        <ScrollView style={{ backgroundColor: '#f0f4f8' }}>
            <View style={{ flex: 1, padding: 20 }}>
                <Image
                    source={image}
                    style={{
                        width: '100%',
                        height: 250,
                        borderRadius: 15,
                        marginBottom: 20,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                    }}
                />

                <View
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 15,
                        padding: 20,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        marginBottom: 20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 26,
                            fontWeight: 'bold',
                            color: '#333',
                            marginBottom: 10,
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: '600',
                            color: '#007bff',
                            marginBottom: 15,
                        }}
                    >
                        Precio actual: ${currentPrice.toLocaleString()}
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            lineHeight: 24,
                            color: '#555',
                            marginBottom: 20,
                        }}
                    >
                        {description}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 20,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#007bff',
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                                borderRadius: 10,
                            }}
                            onPress={handleMessagePress}
                        >
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Mensaje</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View
                                style={{
                                    alignItems: 'center',
                                    paddingVertical: 10,
                                    paddingHorizontal: 15,
                                    backgroundColor: '#e0f0ff',
                                    borderRadius: 10,
                                }}
                            >
                                <Text style={{ fontSize: 14, color: '#007bff' }}>Tiempo Restante</Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: '#333',
                                    }}
                                >
                                    05:34 minutos
                                </Text>
                            </View>
                            <Button title='Reunion' onPress={() => navigation.navigate('ReunionScreen')} />
                        </TouchableOpacity>
                    </View>

                    <Text
                        style={{
                            fontSize: 18,
                            color: '#333',
                            marginBottom: 10,
                        }}
                    >
                        Cantidad a aumentar: ${incrementAmount.toLocaleString()}
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#28a745',
                            paddingVertical: 15,
                            borderRadius: 10,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                        }}
                        onPress={handleIncrement}
                    >
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Aumentar</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    visible={isModalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={handleCloseModal}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        }}
                    >
                        <View
                            style={{
                                width: '85%',
                                backgroundColor: '#fff',
                                padding: 20,
                                borderRadius: 20,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.4,
                                shadowRadius: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: '#555',
                                    marginBottom: 15,
                                    textAlign: 'center',
                                }}
                            >
                                El negociante no está disponible en este momento. En cuanto esté disponible,
                                responderá su mensaje a la brevedad.
                            </Text>
                            <TextInput
                                style={{
                                    width: '100%',
                                    height: 50,
                                    borderColor: '#ccc',
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    paddingHorizontal: 15,
                                    marginBottom: 20,
                                }}
                                placeholder="Escriba su mensaje aquí..."
                            />
                            <Button title="Cerrar" onPress={handleCloseModal} color="#007bff" />
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
}

export default DetailsScreen;
