// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './englishbtn';

function English() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstHeading} allowFontScaling={false}>
          Research Paper Writing
        </Text>
        <Text style={styles.firstPara} allowFontScaling={false}>
          Research paper Writing involves sharing original findings with the academic community. The process starts with choosing a novel topic and conducting thorough research. The paper typically includes sections like an abstract, introduction, methodology, results, and conclusion. After writing, the paper is submitted to a journal, where it undergoes peer review. Based on feedback, the paper may require revisions before acceptance. Once published, the research becomes accessible to others in the field, contributing to knowledge and potentially influencing future studies and applications.
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
  firstHeading: {
    fontSize: 24,
    textAlign: 'left',
    color: '#E41C3A',
    fontWeight: '800',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 10,
  },
  firstPara: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#22326A',
    textAlign: 'left',
    paddingBottom: 10,
  },
});

export default English;
