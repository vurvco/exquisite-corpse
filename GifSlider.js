import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  View,
  Dimensions
} from 'react-native';

export default function GifSlider({
  images,
  justify = 'center'
}) {
  const [image, setImage] = useState(0)
  const [imgWidth, setImgWidth] = useState(Dimensions.get('window').width)
  const [imgHeight, setImgHeight] = useState(Dimensions.get('window').height)

  function nextImage() {
    // Loop through image options
    setImage((image + 1) % images.length)
  }

  function handleLayout(e) {
    const { width, height } = e.nativeEvent.layout
    setImgWidth(Math.ceil(width))
    setImgHeight(Math.ceil(height))
  }

  const imgStyle = {
    minWidth: imgWidth,
    minHeight: imgHeight,
  }

  return (
    <TouchableWithoutFeedback onPress={nextImage}>
      <View style={styles.container}
        justifyContent={justify}
        onLayout={handleLayout}>
        <Image source={images[image]} style={imgStyle} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden'
  },
});
