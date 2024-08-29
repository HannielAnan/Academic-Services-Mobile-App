// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './itbtn';

function IT() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>Professional IT Assignment Help</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        The IT Assignment Services play an very important role in helping the students from the uk to complete their institute’s heavy workload. Although they have been taught the best and quality computer science studies, the students continue to encounter many internal problems that work against their IT Assignments.
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
    paddingBottom: 10,
  },
});

export default IT;
