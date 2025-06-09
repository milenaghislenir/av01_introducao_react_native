import React from 'react';
import {View} from 'react-native';
import ListagemFilmes from './components/ListagemFilmes';//importação da listagem

const App = function(){
  return (
    <View><ListagemFilmes/></View>
  );
}; //incluindo componente da listagem de filmes

export default App;
