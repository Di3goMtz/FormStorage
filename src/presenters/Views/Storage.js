import * as FileSystem from 'expo-file-system';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import {InputName, InputLastName, InputAge, InputPhone, InputEmail, HomeText } from '../../Componets/General/CamposHome'

const App = () => {
  const [Name, setName] = useState('');
  const [LastName, setlastName] = useState('');
  const [Age, setAge] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const filePath = FileSystem.documentDirectory + 'tasks.json';

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const info = await FileSystem.getInfoAsync(filePath);
        if (info.exists) {
          const storedTasks = await FileSystem.readAsStringAsync(filePath);
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Error al recuperar tareas', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddOrUpdateTask = async () => {
    try {
      if (selectedTaskIndex !== null) {
        // Actualizar tarea existente
        const updatedTask = { Name, LastName, Age, Phone, Email };
        const updatedTasks = [...tasks];
        updatedTasks[selectedTaskIndex] = updatedTask;
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        setSelectedTaskIndex(null);
      } else {
        // Agregar nueva tarea
        const newTask = { Name, LastName, Age, Phone, Email };
        const updatedTasks = [...tasks, newTask];
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
      }
      // Limpiar campos de entrada
      setName('');
      setlastName('');
      setAge('');
      setPhone('');
      setEmail('');
    } catch (error) {
      console.error('Error al guardar tarea', error);
    }
  };

  const handleDeleteTask = async (index) => {
    try {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al eliminar tarea', error);
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setSelectedTaskIndex(index);
    setName(taskToEdit.Name);
    setlastName(taskToEdit.LastName);
    setAge(taskToEdit.Age);
    setPhone(taskToEdit.Phone);
    setEmail(taskToEdit.Email);
  };

  return (
    <View style={styles.container}>
      <InputName value={Name} onChangeText={setName}/>
      <InputLastName value={LastName} onChangeText={setlastName}/>
      <InputAge value={Age} onChangeText={setAge}/>
      <InputPhone value={Phone} onChangeText={setPhone} />
      <InputEmail value={Email} onChangeText={setEmail} />
      <Button title={selectedTaskIndex !== null ? 'Actualizar' : 'Agregar'} onPress={handleAddOrUpdateTask} color="#00C5FF"/>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.Name}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Eliminar" onPress={() => handleDeleteTask(index)} color="#C40213"/>
              <Button title="Editar" onPress={() => handleEditTask(index)} color="#040893"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 50,
  },
  input: {
    width: 400,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 20,
  },
  taskText: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default App;