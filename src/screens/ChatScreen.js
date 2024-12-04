import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

function ChatScreen({ route, navigation }) {
    const { title, price } = route.params || {};
    
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hola, ¿cómo estás?', sender: 'vendedor' },
        { id: '2', text: '¡Hola! Estoy interesado en el producto.', sender: 'comprador' },
    ]);
    
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: (messages.length + 1).toString(),
                text: message,
                sender: 'comprador',
            };
            setMessages([...messages, newMessage]);
            setMessage(''); 
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.headerText}>Chat con el Vendedor</Text>
                <Text style={styles.productInfo}>Producto: {title}</Text>
                <Text style={styles.productInfo}>Precio: {price}</Text>
            </View>

            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={[styles.message, item.sender === 'vendedor' ? styles.messageLeft : styles.messageRight]}>
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.messagesList}
                inverted
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe tu mensaje..."
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                    <Text style={styles.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    header: {
        padding: 20,
        backgroundColor: '#28a745',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    productInfo: {
        fontSize: 16,
        color: '#fff',
        marginTop: 5,
    },
    messagesList: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    message: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    messageLeft: {
        backgroundColor: '#e0e0e0',
        alignSelf: 'flex-start',
    },
    messageRight: {
        backgroundColor: '#007bff',
        alignSelf: 'flex-end',
    },
    messageText: {
        fontSize: 16,
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#28a745',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ChatScreen;
