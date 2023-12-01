import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert,} from 'react-native';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';

const API_BASE_URL = 'https://6565277eeb8bb4b70ef14533.mockapi.io/';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        name,
        email,
        password,
      });

      Alert.alert('Cadastro realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
    
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => setName(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Telefone"
        onChangeText={(text) => setTelefone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
          
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default RegisterScreen;




