import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const RegisterScreen = ({ setIsAuthenticated }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numb, setNumb] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const navigation = useNavigation();

  const handleRegister = () => {
    if (!name || !surname || !age || !email || !password || !numb ) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }
    if (!isChecked) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones");
      return;
    }
    setIsAuthenticated(true);
    navigation.navigate("MainTab");
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Regístrate en CARBIDS</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Crea tu cuenta</Text>
          <TextInput
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <TextInput
            placeholder="Apellido"
            value={surname}
            onChangeText={setSurname}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <TextInput
            placeholder="Edad"
            value={age}
            onChangeText={setAge}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <TextInput
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <TextInput
            placeholder="Numero"
            secureTextEntry
            value={numb}
            onChangeText={setNumb}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              style={styles.checkbox}
            >
              <Text style={{ color: isChecked ? "#1e90ff" : "#aaa" }}>
                {isChecked ? "☑" : "☐"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
              Acepto los
              <Text
                style={styles.linkText}
                onPress={toggleModal} // Open modal on click
              >
                {" Términos y Condiciones"}
              </Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.linkText}>¿Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal for Terms and Conditions */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Términos y Condiciones</Text>
          <Text style={styles.modalText}>
            Aquí van los detalles de los términos y condiciones...
            Puedes agregar más texto según sea necesario.
          </Text>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f9fd",
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    backgroundColor: "#1e90ff",
    width: "100%",
    padding: 20,
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  formContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#f0f4f8",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: "#333",
  },
  linkText: {
    color: "#1e90ff",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  registerButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  // Modal styles
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
