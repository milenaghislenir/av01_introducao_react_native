import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const NotasApp = () => {
  //definindo dados das notas
  const [notas, setNotas] = useState([]);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novoConteudo, setNovoConteudo] = useState('');

  const adicionarNota = () => {
    //função para adicionar a nova nota
    if (novoTitulo && novoConteudo) {
      setNotas([...notas, { id: Date.now(), titulo: novoTitulo, conteudo: novoConteudo }]);
      setNovoTitulo('');
      setNovoConteudo('');
    } else {
      alert('Por favor, preencha o título e o conteúdo da nota.');
    }
  };

  const removerNota = (id) => {
    //removendo nota pelo id
    setNotas(notas.filter(nota => nota.id !== id));
  };

  return ( //estrutura da tela
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Notas</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={novoTitulo}
          onChangeText={text => setNovoTitulo(text)}
          placeholderTextColor="gray"
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Conteúdo"
          multiline
          value={novoConteudo}
          onChangeText={text => setNovoConteudo(text)}
          placeholderTextColor="gray"
        />
        <Button onPress={adicionarNota} title="Adicionar Nota" color="green" />
      </View>
      <FlatList
        data={notas}
        renderItem={({ item }) => (
          <View style={styles.nota}>
            <Text style={styles.notaTitulo}>{item.titulo}</Text>
            <Text style={styles.notaConteudo}>{item.conteudo}</Text>
            <Button onPress={() => removerNota(item.id)} title="Excluir" />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({ //estilização
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  nota: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  notaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notaConteudo: {
    fontSize: 16,
  },
});

export default () => <NotasApp />; 