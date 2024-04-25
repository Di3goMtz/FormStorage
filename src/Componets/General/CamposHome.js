import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export const InputName = ({ value, onChangeText }) => (
  <TextInput
    label="Ingresa Tu Nombre (s):"
    value={value}
    onChangeText={onChangeText}
    left={<TextInput.Icon name="account" />}
    style={styles.input}
  />
);

export const InputLastName = ({ value, onChangeText }) => (
  <TextInput
    label="Ingresa Tus Apellidos :"
    value={value}
    onChangeText={onChangeText}
    left={<TextInput.Icon name="account" />}
    style={styles.input}
  />
);

export const InputAge = ({ value, onChangeText }) => (
  <TextInput
    label="Ingresa Tu Edad :"
    value={value}
    onChangeText={onChangeText}
    left={<TextInput.Icon name="account" />}
    style={styles.input}
  />
);

export const InputPhone = ({ value, onChangeText }) => (
  <TextInput
    label="Ingresa Tu Numero"
    value={value}
    onChangeText={onChangeText}
    left={<TextInput.Icon name="account" />}
    style={styles.input}
  />
);

export const InputEmail = ({ value, onChangeText }) => (
  <TextInput
    label="Ingresa Tu Correo Electronico"
    value={value}
    onChangeText={onChangeText}
    left={<TextInput.Icon name="account" />}
    style={styles.input}
  />
);

export const HomeText = () => (
  <Text style={{ color: '#FFFFFF'}}>AGREGAR ALUMNO</Text>
);

export const TextButton = ({ onPress, children }) => (
  <Button
    mode="contained"
    onPress={onPress}
    style={{ marginBottom: 10, width: 200, backgroundColor: '#E71C0B' }}
    labelStyle={{ color: '#5E5856' }}
  >
    {children}
  </Button>
);

export const HomeButton = ({ onPress, children }) => (
  <Button
    mode="contained"
    onPress={onPress}
    style={{ marginBottom: 10, width: 200, backgroundColor: '#E71C0B' }}
    labelStyle={{ color: '#5E5856' }}
  >
    {children}
  </Button>
);


const styles = StyleSheet.create({
  input: {
    width: '100%',
    marginBottom: 10,
    width: 400,
    height: 50,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    backgroundColor: '#E71C0B',
  },
});