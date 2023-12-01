import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Empresa = () => {
  const handlePress = () => {
    Linking.openURL('https://www.prodesan.com.br');
      
 };

  return (
    <View style={styles.container}>

    <Text style={styles.text}> PRODESAN </Text>

      <Text style={styles.text}>
        Criada em 15 de outubro de 1965, a Prodesan é uma empresa de economia mista, parceira da Prefeitura de Santos em ações integradas de planejamento e execução de serviços — sempre tendo em vista o desenvolvimento da cidade. Atendemos, ainda, empresas e órgãos públicos da região.
      </Text>

      <Text style={styles.text}>
        {'\n'}
      </Text>

      <Text style={styles.text}>
        Nós estamos presentes no cotidiano do santista em diversas frentes. Seja na manutenção das escolas municipais, na execução da coleta seletiva, na limpeza do sistema de drenagem, na operação dos sanitários públicos móveis ou na conservação da pavimentação asfáltica.
      </Text>

      <Text style={styles.text}>
        {'\n'}
      </Text>

      <Text style={styles.text}>
        Também desenvolvemos estudos, projetos, consultorias e acompanhamento para obras de engenharia, de arquitetura e urbanismo, de infraestrutura e, ainda, na área da tecnologia da informação.
      </Text>

      <Text style={styles.text}>
        {'\n'}
      </Text>

      <Text style={styles.text}>
        Confira, em detalhes, nossos campos de atuação:
      </Text>

      <Text style={styles.text}>
        {'\n'}
      </Text>

      <Text style={styles.textBullet}>Arquitetura e Urbanismo</Text>
      <Text style={styles.textBullet}>Engenharia</Text>
      <Text style={styles.textBullet}>Tecnologia da Informação</Text>
      <Text style={styles.textBullet}>Apoio à Limpeza Pública</Text>
      <Text style={styles.textBullet}>Operacional</Text>
      <Text style={styles.textBullet}>Conservação de Vias Asfaltadas</Text>

      <Text style={styles.text}>
        {'\n'}
      </Text>

      <Text style={styles.text}>
        Por isso, dizemos: mesmo quando não se vê, a Prodesan trabalha para você!
      </Text>

       <View style={styles.containerImagem}>

          <Image
          source={ require('../../../imagem/imagem1.jpg')}
          style={styles.imagem}
          />

          <Image

              source={ require('../../../imagem/imagem2.jpg')}

            style={styles.imagem}

          />

        </View>

      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.link}>Visite o Site Oficial da Prodesan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  textBullet: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 20,
  },
  imagem: {

    width: 80,
    height: 80,

  },

  containerImagem: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Empresa;

