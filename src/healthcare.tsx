// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './healthcarebtn';

function healthcare() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>Premium Health Care Assignments</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        The challenges of Health Care Assignments may be very overwhelming. These research-based projects cover many subjects such as Nursing, Pharmacy, Surgery in Dentistry Physiology, Pathology and others that come with complex specifications and challenging methodologies.
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

export default healthcare;
