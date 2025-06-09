import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BhaskaraCalculator = () => {
  //setando as variáveis da equação (a,b,c)
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularBhaskara = () => {
    //conversão dos valores para float

    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);

    const discriminante = B * B - 4 * A * C;
    //cálculo do discriminante
    if (discriminante < 0) {
      setResultado('Não há raízes reais');
    } else {
      const x1 = (-B + Math.sqrt(discriminante)) / (2 * A); //calcula as duas raízes da equação
      const x2 = (-B - Math.sqrt(discriminante)) / (2 * A);

      setResultado(`x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`); //escreve as raízes
    }
  };

  return (
    //estrutura da tela
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Bhaskara</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor de A"
        keyboardType="numeric"
        value={a}
        onChangeText={(text) => setA(text)}
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de B"
        keyboardType="numeric"
        value={b}
        onChangeText={(text) => setB(text)}
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de C"
        keyboardType="numeric"
        value={c}
        onChangeText={(text) => setC(text)}
        placeholderTextColor="gray"
      />
      <Button onPress={calcularBhaskara} title="Calcular" color="green" />
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  //estilização
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default BhaskaraCalculator;
