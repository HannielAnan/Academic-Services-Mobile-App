// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './psychologybtn';

function Psychology() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>Get Top Quality Psychology Assignment Help</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        With the aid of our Psychology Assignment service, you will be able to remove the academic pressure from your life. The major benefit of using an assignment writing service is that you can get high grades without having to panic over all the details involved. Further, when you give your assignments to professionals, there is more time for you to cultivate a social life and pursue hobbies.
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
    paddingBottom: 30, // Make room for the footer
  },
  firstheading: {
    fontSize: 24,
    textAlign: 'left',
    color: '#E41C3A',
    fontWeight: '800',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 10,
  },
  firstpara: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    color:'#22326A',
    textAlign:'left',
    paddingBottom: 10,
  },
});

export default Psychology;
