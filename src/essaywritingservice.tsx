// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import FooterNav from './FooterNav';
import AnimatedButton from './AnimatedButton';
import Navigator from './Navigator';
import HomeScreen from './HomeScreen';
function EssayWritingService() {
  const navigation = useNavigation();

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>Essay Writing Help From Renowned UK Professionals</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        AcademicExpert.uk is the best online platform for Reflective Essay Writing – your trusted partner in academic achievements. Here we go into the details of creating reflective essays and show how our professional writers can help you become a master in this field
        </Text>
        <View style={styles.buttonContainer}>
        <AnimatedButton />
        </View>
      </ScrollView>
      <FooterNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer:{
    marginTop: 20,
  },
  content: {
    paddingBottom: 30, // Make room for the footer
  },
  firstheading: {
    fontSize: 24,
    textAlign: 'left',
    color: '#E41C3A',
    fontWeight: '800',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 15,
    paddingRight: 15,
  },
  firstpara: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    color:'#22326A',
    textAlign:'left',
    paddingBottom: 10,
  },
});

export default EssayWritingService;
