// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './marketingbtn';

function Marketing() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>
        Research paper editing and proofreading</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        Research paper editing and proofreading are crucial steps to ensure clarity, accuracy, and professionalism in academic writing. Editing involves revising the content for structure, coherence, and logical flow, while proofreading focuses on correcting grammatical errors, typos, and formatting issues. A well-edited and proofread paper enhances readability, strengthens arguments, and meets academic standards, increasing the likelihood of acceptance in journals.
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

export default Marketing;
