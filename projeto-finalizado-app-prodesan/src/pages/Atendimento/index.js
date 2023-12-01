import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function Atendimento({ route }) {
  const navigation = useNavigation();

  navigation.setOptions({
    title: 'Atendimento',
  });

  const numeroWhatsApp = '+1399999-9999';
  const email = 'atendimento@prodesan.com.br';

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>CANAIS DE ATENDIMENTO</Text>

      <View style={styles.contactContainer}>
        <FontAwesome name="whatsapp" size={35} color="#11118c" />
        <Text style={styles.contactText}>{numeroWhatsApp}</Text>
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>{email}</Text>
      </View>

      <Text style={styles.headerText}>Horários de Atendimento:</Text>
      <Text>Segundas a Sextas, das 08:00 às 17:00 horas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20, 
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#11118c',
  },
});
