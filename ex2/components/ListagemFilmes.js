import React, { useMemo, useState } from 'react'; //importação das bibliotecas
import RadioGroup from 'react-native-radio-buttons-group';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const ListagemFilmes = () => {
  //array dos filmes com seus respectivos atributos
  const [filmes, setFilmes] = useState([
    { titulo: 'Interstellar', genero: 'Ficção-Científica', pais: 'EUA' },
    { titulo: 'Duas Irenes', genero: 'Drama', pais: 'Brasil' },
    {
      titulo: 'Tudo em Todo Lugar ao Mesmo Tempo',
      genero: 'Ficção-Científica',
      pais: 'EUA',
    },
    { titulo: 'Cidade de Deus', genero: 'Drama', pais: 'Brasil' },
    { titulo: 'Invasão Zumbi', genero: 'Terror', pais: 'Coreia' },
    {
      titulo: 'Hoje Eu Quero Voltar Sozinho',
      genero: 'Romance',
      pais: 'Brasil',
    },
    { titulo: 'mother!', genero: 'Suspense', pais: 'EUA' },
    { titulo: 'Que Horas Ela Volta?', genero: 'Drama', pais: 'Brasil' },
    { titulo: 'LaLaLand', genero: 'Musical', pais: 'EUA' },
    { titulo: 'Nerve', genero: 'Aventura', pais: 'EUA' },
  ]);

  const [listaFiltrada, setListaFiltrada] = useState(filmes); // estado da lista filtrada

  const [selectedId, setSelectedId] = useState(); // variável do id selecionado

  const radioButtons = useMemo(
    //botões de filtro
    () => [
      { id: 'Brasil', label: 'Brasil' },
      { id: 'EUA', label: 'EUA' },
      { id: 'Coreia', label: 'Coreia' },
    ],
    []
  );

  const aplicarFiltro = () => {
    //função para filtrar a lista de filmes pelo país
    setListaFiltrada(filmes.filter((filme) => filme.pais == selectedId));
  };

  return (
    //estrutura da tela
    <View style={styles.container}>
      <Text style={styles.title}>Filmes</Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        layout="row"
      />
      <Button onPress={aplicarFiltro} title="Aplicar Filtro" color="green" />
      <FlatList
        data={listaFiltrada}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.label}>Título do filme: {item.titulo}</Text>
            <Text style={styles.label}>Gênero: {item.genero}</Text>
            <Text style={styles.label}>País: {item.pais}</Text>
          </View>
        )}
        keyExtractor={(item) => item.titulo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //estilização dos componentes
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
});

export default ListagemFilmes; //exportação para a importação no app.js
