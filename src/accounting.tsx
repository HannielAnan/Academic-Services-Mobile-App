// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './accoountingbtn';

function accounting() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>EXPERT FINANCIAL ACCOUNTING ASSIGNMENT HELP</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
          It is expected of you as a student that every assignment you make should be excellent and you should excel. Nevertheless, the desire to succeed is usually hindered by financial problems. These challenges are addressed at Academicexpert.uk by providing quality service at competitive prices without mistakes and other problems. Concerning the financial side of things we can give you competitive prices for our services but still offer high quality work.
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
  buttonContainer:{
    marginTop:10,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 30, // Make room for the footer
  },
  firstheading: {
    fontSize: 24,
    textAlign: 'left',
    color: '#E41C3A',
    fontWeight: '800',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    paddingLeft:10,
    paddingRight:10,
  },
  firstpara: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color:'#22326A',
    textAlign:'left',
  },
});

export default accounting;
