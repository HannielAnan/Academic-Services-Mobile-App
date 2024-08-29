import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const Slider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        loop={false}
        autoplay={true}
        autoplayTimeout={2}
      >
        <View style={styles.slide}>
          <Image
            source={require('../assets/banner1.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/banner2.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/banner3.png')}
            style={styles.image}
          />
        </View>
        {/* Add more slides as needed */}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    height: 100, // Set the desired height
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%', // Take up the full width of the container
    height: '100%', // Take up the full height of the container
    borderRadius: 10, // Optional: Add borderRadius for a rounded rectangle
  },
});

export default Slider;
