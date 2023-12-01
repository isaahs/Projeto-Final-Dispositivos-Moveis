import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const API_BASE_URL = 'https://65625a05ee04015769a65a6c.mockapi.io/';

const ConsultaDemandasScreen = () => {
  const [numeroDemanda, setNumeroDemanda] = useState('');
  const [demanda, setDemanda] = useState(null);
  const [status, setStatus] = useState('');

  const handleConsultaDemanda = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/demandas/${numeroDemanda}`);
      const demandaEncontrada = response.data;

      if (demandaEncontrada) {
        setDemanda(demandaEncontrada);

        if (demandaEncontrada.vistoriada) {
          setStatus('VISTORIADA');
        } else if (demandaEncontrada.emAndamento) {
          setStatus('EM ANDAMENTO');
        } else if (demandaEncontrada.finalizada) {
          setStatus('FINALIZADA');
        } else {
          setStatus('ABERTA');
        }
      } else {
        setDemanda(null);
        setStatus('');
        Alert.alert('Demanda não encontrada. Verifique o número da demanda.');
      }
    } catch (error) {
      console.error('Erro ao buscar demanda:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>CONSULTA DE DEMANDAS</Text>
      <TextInput
        style={styles.input}
        placeholder="Número da Demanda"
        keyboardType="numeric"
        onChangeText={(text) => setNumeroDemanda(text)}
       />
      <Button title="Consultar" onPress={handleConsultaDemanda} />
      
      {demanda && (
        <View style={styles.demandaItem}>
          <Text>ID: {demanda.id}</Text>
          <Text>Data: {demanda.data}</Text>
          <Text>Endereço: {demanda.endereco}</Text>
          <Text>Observação: {demanda.observacao}</Text>
          <Text>Status: {status}</Text>
        </View>
      )}
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
  demandaItem: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default ConsultaDemandasScreen;