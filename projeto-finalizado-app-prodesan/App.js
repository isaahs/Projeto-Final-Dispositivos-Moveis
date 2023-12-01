import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

import Home from './src/pages/Home';
import Empresa from './src/pages/Empresa';
import Atendimento from './src/pages/Atendimento';
import Login from './src/pages/Login';
import CadastroUsuario from './src/pages/CadastroUsuario';
import SolicitarDemanda from './src/pages/SolicitarDemanda';
import ConsultarDemanda from './src/pages/ConsultarDemanda'; 

const Stack = createStackNavigator();

const CustomHeaderLeft = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={{ marginLeft: 10 }}>
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <Text style={{ color: 'white', fontSize: 18 }}>Menu</Text>
      </TouchableOpacity>

      <Modal visible={menuVisible} transparent animationType="slide">
        <View style={styles.menuContainer}>
          
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('Login');
            }}
          >
            <Text style={styles.menuItemText}>LOGIN</Text>

          </TouchableOpacity>

           <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('CadastroUsuario');
            }}
          >
            <Text style={styles.menuItemText}>CADASTRO DE USUARIO</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('SolicitarDemanda');
            }}
          >
            <Text style={styles.menuItemText}>SOLICITAR DEMANDA</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('ConsultarDemanda');
            }}
          >
            <Text style={styles.menuItemText}>CONSULTAR DEMANDA</Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('Empresa');
            }}
          >
            <Text style={styles.menuItemText}>A EMPRESA</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('CanaisDeAtendimento');
            }}
          >
            <Text style={styles.menuItemText}>CANAIS DE ATENDIMENTO</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setMenuVisible(false)}
          >
            <Text style={styles.menuItemText}>Fechar</Text>
            
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  menuItemText: {
    color: 'white',
    fontSize: 18,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFF',
            headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
          })}
        />

        <Stack.Screen name="Empresa" component={Empresa} />
        <Stack.Screen name="Atendimento" component={Atendimento} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="SolicitarDemanda" component={SolicitarDemanda} />
        <Stack.Screen name="ConsultarDemanda" component={ConsultarDemanda} />
        <Stack.Screen name="CanaisDeAtendimento" component={Atendimento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


