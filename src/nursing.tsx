// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './nursingbtn';

function Nursing() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>Professional Nursing Assignment</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        Our Assignment services offer a reassuring environment designed to allow you to leverage the reliability and power that come with our expertise and resources during heavy-load assignments. Our nursing assignment writing services have gained a positive reputation throughout the entire UK, helping numerous nursing students to write excellent assignments. Thanks to our respectable services, we provide you with such a well-rehearsed way of reaching your goal and dream about becoming a nurse.
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

export default Nursing;
