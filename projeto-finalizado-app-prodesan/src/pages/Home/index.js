import React from 'react';
import { View, Text, Button, TouchableOpacity, Linking, ScrollView,StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

  
export default function Home() {
  const navigation = useNavigation();

  function irEmpresa() {
    navigation.navigate('Empresa', { nome: '' });
  }

  function irAtendimento() {
    navigation.navigate('Atendimento', { nome: '' });
  }

  function irLogin() {
    navigation.navigate('Login', { nome: '' });
  }

   function irSolicitarDemanda() {
    navigation.navigate('SolicitarDemanda', { nome: '' });
  }

  function abrirInstagram() {
     Linking.openURL('https://www.instagram.com/prodesan.santos/');
  }

  return (

      <View style={styles.content}>
      <Text style={styles.mainTitle}>PRODESAN</Text>
      <Text style={styles.subtitle}>SERVIÇO TAPA BURACOS</Text>

      <Text style={styles.subtitle1}>Notícias</Text>
     
       <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
   <TouchableOpacity
  style={styles.menuItem}
  onPress={() => {
  
    const materiaLink = 'https://www.prodesan.com.br/mary-christine-da-prodesan-e-uma-das-homenageadas-pela-prefeitura-no-dia-do-servidor/';
    Linking.openURL(materiaLink);
    }}
>
    <Image
        source={ require('../../../imagem/mary.jpg')}
        style={styles.newsImage} 
      />
  <Text style={styles.menuItemText}>Abrir Matéria</Text>
  
</TouchableOpacity>

<TouchableOpacity
  style={styles.menuItem}
  onPress={() => {
  
    const materiaLink = 'https://www.prodesan.com.br/com-reforco-na-cobertura-tapa-buraco-em-santos-ja-atendeu-mais-de-3-400-enderecos-neste-ano-publicado-no-portal-da-prefeitura/';
    Linking.openURL(materiaLink);
  }}
>
 <Image
        source={ require('../../../imagem/com-esforco.jpeg')}
        style={styles.newsImage} 
      />
  <Text style={styles.menuItemText}>Abrir Matéria</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.menuItem}
  onPress={() => {

    const materiaLink = 'https://www.prodesan.com.br/alunos-conhecem-o-cotidiano-da-prodesan-durante-feira-universitaria/';
    Linking.openURL(materiaLink);
  }}
>
 <Image
        source={ require('../../../imagem/feira4-1.jpg')}
        style={styles.newsImage} 
      />
  <Text style={styles.menuItemText}>Abrir Matéria</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.menuItem}
  onPress={() => {
    
    const materiaLink = 'https://www.prodesan.com.br/limpeza-do-sistema-de-drenagem-da-orla-entra-em-terceira-fase/';
    Linking.openURL(materiaLink);
  }}
>
 <Image
        source={ require('../../../imagem/limpeza.jpeg')}
        style={styles.newsImage} 
      />
  <Text style={styles.menuItemText}>Abrir Matéria</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.menuItem}
  onPress={() => {

    const materiaLink = 'https://www.prodesan.com.br/prodesan-participa-da-24a-feira-de-carreiras-e-inovacao-promovida-pela-unisantos/';
    Linking.openURL(materiaLink);
  }}
>
 <Image
        source={ require('../../../imagem/uni1.jpg')}
        style={styles.newsImage} 
      />
  <Text style={styles.menuItemText}>Abrir Matéria</Text>
</TouchableOpacity>

   </ScrollView>

    </View>
    
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20, padding: 30 }}>
  <TouchableOpacity onPress={irLogin} style={{ alignItems: 'center', marginHorizontal: 10 }}>
    <FontAwesome name='user' size={30} color='#11118c' />
    <Text style={{ color: '#11118c' }}></Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={irAtendimento} style={{ alignItems: 'center', marginHorizontal: 10 }}>
    <FontAwesome name='envelope' size={30} color='#11118c' />
    <Text style={{ color: '#11118c' }}></Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={abrirInstagram} style={{ alignItems: 'center', marginHorizontal: 10 }}>
    <FontAwesome name='instagram' size={30} color='#11118c' />
    <Text style={{ color: '#11118c' }}></Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={irAtendimento} style={{ alignItems: 'center', marginHorizontal: 10 }}>
    <FontAwesome name='whatsapp' size={30} color='#11118c' />
    <Text style={{ color: '#11118c' }}></Text>
  </TouchableOpacity>
</View>


      </View>

  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ''
  },
    content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150, 
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop:25,
    fontSize: 18,
    marginBottom: 10,
    color: 'red',
    fontWeight: 'bold'

  },
  subtitle1: {
    marginTop:25,
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold'

  },
  sectionTitle: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    marginBottom:20,
  },
  scrollView: {
    marginTop: 30,
    marginBottom: 30,
  },
  newsItem: {
    marginHorizontal: 10,
  },
  newsImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
 menuItem: {
    padding: 10,
    backgroundColor: '', // Cor de fundo do menuItem
    borderRadius: 10,
    marginBottom: 10, // Espaçamento inferior entre os itens do menu
    alignItems: 'center',
   
  },
  menuItemText: {
    color: 'black', // Cor do texto do menuItem
    fontSize: 16,
    fontWeight: 'black',
    fontWeight: 'bold'
  },
});

