import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  View,
} from 'react-native';

export default function GifSlider({ images }) {
  // Index of image to display
  const [image, setImage] = useState(0)

  // Loop through image options
  function nextImage() {
    setImage((image + 1) % images.length)
  }

  return (
    <TouchableWithoutFeedback onPress={nextImage}>
      <View style={styles.container}>
        <Image source={images[image]} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden'
  },

  image: {
    height: '100%',
    width: '33%'
  }
});
