// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './CaseStudybtn';

function CaseStudy() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>Case Study</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
          Are you a psychology, sociology, or anthropology student looking to master case studies? This comprehensive guide from our dissertation writing service will show you how to write a professional case study, covering everything from research methods to proper citation. We'll delve into different types of case studies and provide clear examples, ensuring you have all the tools you need to succeed. Whether you're studying a person, group, or situation, our step-by-step instructions will help you create an exceptional case study.
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
  buttonContainer: {
    marginTop: 10,
    paddingBottom: 20, // Make sure the button has enough space at the bottom
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
    color: '#22326A',
    textAlign: 'left',
  },
});

export default CaseStudy;
