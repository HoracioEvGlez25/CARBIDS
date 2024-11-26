import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (email && password) {
            setIsAuthenticated(true);
            navigation.navigate('MainTab');
        } else {
            Alert.alert('Error', 'Por favor, ingresa tus credenciales');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Iniciar Sesión</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/Carbidslogo.jpeg')} style={styles.logo} />
                <Text style={styles.logoText}>CARBIDS</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    placeholder="Correo Electrónico"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.createAccountButton}>Crear Cuenta</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                    <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 30,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    logoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    form: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    loginButton: {
        backgroundColor: '#FF0000',
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linksContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    createAccountButton: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 10,
        fontWeight: 'bold',
        backgroundColor: '#FF0000',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        textAlign: 'center',
        alignSelf: 'center',
    },
    forgotPassword: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    footer: {
        backgroundColor: '#007AFF',
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default LoginScreen;
