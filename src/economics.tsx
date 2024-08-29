// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './economicsbtn';
import { useNavigation, NavigationProp } from '@react-navigation/native';
function economics() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>The Best Economics Assignment Help In The UK</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        Composing writing assignments may require so much time that a student gets very tired and even unable to enjoy his hobbies as well as social activities just for the sake of satisfying academic urgency. If this resonates with you, don’t fret as we have got your back.

Our Economics Assignment Help Service covers every kind of assistance from Microeconomics to Macroeconomics assignment for proofreading and editing. Distinguishing ourselves from other UK services, we provide remarkable grades delivered on time and are zealous about information protection.
        </Text>
        <AnimatedButton />
      </ScrollView>
      <FooterNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 150, // Make room for the footer
  },
  firstheading: {
    fontSize: 24,
    textAlign: 'center',
    color: '#E41C3A',
    fontWeight: '800',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
  },
  firstpara: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    color:'#22326A',
    textAlign:'left',
  },
});

export default economics;
