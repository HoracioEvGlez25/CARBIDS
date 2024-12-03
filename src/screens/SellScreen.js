import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const SellCarScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleImportImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else if (response.errorMessage) {
        console.error('Error al seleccionar la imagen:', response.errorMessage);
      } else {
        const uri = response.assets[0].uri; 
        setImageUri(uri);
      }
    });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>CARGAR IMAGENES</Text>

      <TouchableOpacity style={styles.importButton} onPress={handleImportImage}>
        <Text style={styles.importButtonText}>IMPORTAR</Text>
      </TouchableOpacity>

      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={styles.imagePreview}
          resizeMode="contain"
        />
      )}

      <TextInput style={styles.input} placeholder="Precio inicial:" />
      <TextInput style={styles.input} placeholder="Características" />
      <TextInput style={styles.input} placeholder="Temas Legales" />
      <TextInput style={styles.input} placeholder="VIN del carro" />

      <View style={styles.inlineInputs}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Zona aproximada"
        />
        <TouchableOpacity style={styles.inlineButton}>
          <Text style={styles.inlineButtonText}>Ubicar</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Especifique el método de pago"
      />

      <View style={styles.inlineInputs}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Asigne un tiempo de publicación"
        />
        <TouchableOpacity style={styles.inlineButton}>
          <Text style={styles.inlineButtonText}>Asignar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>ELIMINAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.publishButton}>
          <Text style={styles.publishButtonText}>PUBLICAR</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  importButton: {
    backgroundColor: '#ccc',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  importButtonText: {
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  inlineInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  halfInput: {
    flex: 1,
    marginRight: 10,
  },
  inlineButton: {
    backgroundColor: '#000080',
    padding: 10,
    borderRadius: 5,
  },
  inlineButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  deleteButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  publishButton: {
    backgroundColor: '#00ff00',
    padding: 15,
    borderRadius: 5,
    flex: 1,
  },
  publishButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SellCarScreen;
