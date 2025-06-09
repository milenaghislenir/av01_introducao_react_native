import React, { useState } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';

const ImageMona = () => {
  //estado pra mostrar a imagem
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    //inverter o estado atual da imagem
    setShowImage(!showImage);
  };

  return (
    //estrutura da tela
    <View style={styles.container}>
      <Button
        title={showImage ? 'Ocultar Imagem' : 'Mostrar Imagem'} //se o estado do show image for verdadeiro, mostra o button ocultar imagem
        onPress={toggleImage}
        color="green"
      />
      {showImage && ( //se show image for verdadeiro renderiza a imagem
        <>
          <Image style={styles.image} source={require('./image/mona.jpeg')} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  //estilização
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
  },
});

export default ImageMona;
