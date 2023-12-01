import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Item} from 'react-native';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';

const API_BASE_URL = 'https://65625a05ee04015769a65a6c.mockapi.io/';
const VIACEP_API_URL = 'https://viacep.com.br/ws';

const SolicitarDemandaScreen = () => {
  const [data, setData] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleConsultaCEP = async () => {
    try {
      const response = await axios.get(`${VIACEP_API_URL}/${cep}/json`);
      const { logradouro, bairro, localidade, uf } = response.data;

      setEndereco(`${logradouro}, ${bairro}, ${localidade} - ${uf}`);
    } catch (error) { 
      Alert.alert('Erro ao consultar CEP. Verifique o CEP e tente novamente.');
    }
  };

  const handleSolicitarDemanda = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/demandas`, {
        data, cep, endereco, observacao,
      });
      Alert.alert('Cadastro de demanda realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao cadastrar demanda. Verifique os dados e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="DATA"
        onChangeText={(text) => setData(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="CEP"
        onChangeText={(text) => setCep(text)}
        onBlur={handleConsultaCEP}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="ENDEREÇO"
        value={endereco}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="OBSERVACAO"
        onChangeText={(text) => setObservacao(text)}
      />
      <Button title="Cadastrar Demanda" onPress={handleSolicitarDemanda} />
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

export default SolicitarDemandaScreen;



