import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kmh: '',
      ms: ''
    };
  }

  converterParaMs = () => {
    try {
      let velocidadeMs = parseFloat(this.state.kmh);
      if (velocidadeMs === 0) {
        throw new Error('A velocidade (km/h) não pode ser 0, tente novamente :(');
      }
      velocidadeMs = parseFloat(this.state.kmh) / 3.6;
      this.setState({ ms: velocidadeMs.toFixed(2) });
    } catch (error) {
      alert(error.message);
    }
  };

  converterParaKmh = () => {
    try {
      let velocidadeKmh = parseFloat(this.state.ms);
      if (velocidadeKmh === 0) {
        throw new Error('A velocidade (m/s) não pode ser 0, tente novamente :(');
      }
      velocidadeKmh = parseFloat(this.state.ms) * 3.6;
      this.setState({ kmh: velocidadeKmh.toFixed(2) });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { kmh, ms } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Conversor de km/h e m/s</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Velocidade em km/h"
            keyboardType="numeric"
            value={kmh}
            onChangeText={(text) => this.setState({ kmh: text })}
            placeholderTextColor="gray"
          />

          <Button
            title="Converter para m/s"
            onPress={this.converterParaMs}
            color="green"
          />
          <Text style={styles.resultado}>Resultado em m/s: {ms}</Text>

          <TextInput
            style={styles.input}
            placeholder="Velocidade em m/s"
            keyboardType="numeric"
            value={ms}
            onChangeText={(text) => this.setState({ ms: text })}
            placeholderTextColor="gray"
          />
          <Button
            title="Converter para km/h"
            onPress={this.converterParaKmh}
            color="green"
          />
          <Text style={styles.resultado}>Resultado em km/h: {kmh}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  resultado: {
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 15,
  },
});

export default Calculadora;