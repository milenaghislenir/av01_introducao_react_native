import React, { useRef } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';

const App = () => {
  //fadeAnim é usada como valor pra opacidade, valor é 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    //muda o valor de fadeAnim de 1 a 5s
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    //muda o valor de fadeAnim de 0 a 3s
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            //valor de opacidade da animação
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Dúvidas ou dívidas?</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button
          title="olha a surpresa profe :)"
          onPress={fadeIn}
          color="green"
        />
        <Button
          title="bye bye teacher jack :("
          onPress={fadeOut}
          color="green"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //estilização
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    paddingTop: 50,
  },
  fadingText: {
    color: 'green',
    fontWeight: 'bold',
    paddingTop: 50,
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default App;
