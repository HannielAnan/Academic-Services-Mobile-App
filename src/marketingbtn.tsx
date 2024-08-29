import React, {FunctionComponent, useEffect, useRef} from 'react';
import {View, StyleSheet, Pressable, Text, Animated, Linking} from 'react-native';

const SpringButton: FunctionComponent = () => {
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const handleOnPress = () => {
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 20,
      useNativeDriver: true,
    }).start(() => {
      Linking.openURL('https://academicexpert.uk/marketing-assignment/');
    });
  };

  return (
    <View style={style.container}>
      <Pressable onPress={handleOnPress}>
        <Animated.View
          style={[style.button, {transform: [{scale: animatedScale}]}]}>
          <Text style={style.buttonText} allowFontScaling={false}>Read More!</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#22326A',
    width: 150,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
});

export default SpringButton;
