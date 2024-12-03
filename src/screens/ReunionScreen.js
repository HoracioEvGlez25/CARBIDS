import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReunionScreen = () => {
  const [vendedor, setVendedor] = useState('');
  const [comprador, setComprador] = useState('');
  const [zonaReunion, setZonaReunion] = useState('');
  const [vestimenta, setVestimenta] = useState('');
  const [cocheInteres, setCocheInteres] = useState('');
  const [transporte, setTransporte] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [emergencia, setEmergencia] = useState('');
  const [horaReunion, setHoraReunion] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleHoraSeleccionada = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setHoraReunion(selectedDate);
    }
  };

  const handleGuardar = () => {
    Alert.alert('Datos guardados', `Reunión a las ${horaReunion.toLocaleTimeString()}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuario vendedor"
        value={vendedor}
        onChangeText={setVendedor}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario comprador"
        value={comprador}
        onChangeText={setComprador}
      />
      <TextInput
        style={styles.input}
        placeholder="Zona de reunión"
        value={zonaReunion}
        onChangeText={setZonaReunion}
      />
      <TextInput
        style={styles.input}
        placeholder="Vestimenta del comprador"
        value={vestimenta}
        onChangeText={setVestimenta}
      />
      <TextInput
        style={styles.input}
        placeholder="Coche de interés"
        value={cocheInteres}
        onChangeText={setCocheInteres}
      />
      <TextInput
        style={styles.input}
        placeholder="Medio de transporte a la zona"
        value={transporte}
        onChangeText={setTransporte}
      />
      <TextInput
        style={styles.input}
        placeholder="Características del transporte"
        value={caracteristicas}
        onChangeText={setCaracteristicas}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de emergencia"
        keyboardType="numeric"
        value={emergencia}
        onChangeText={setEmergencia}
      />

      <TouchableOpacity style={styles.assignButton} onPress={() => setShowPicker(true)}>
        <Text style={styles.assignButtonText}>Asignar Hora de recordatorio de emergencia</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={horaReunion}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleHoraSeleccionada}
        />
      )}

      <TouchableOpacity style={styles.saveButton} onPress={handleGuardar}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  assignButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  assignButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#34c759',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ReunionScreen;