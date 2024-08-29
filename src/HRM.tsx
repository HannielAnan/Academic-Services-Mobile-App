import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './HRMbtn';

function HRM() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>Efficient Research Paper Publication Services</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        From Research Paper Publication Services, We offer efficient editing solutions that can save costs. We make it possible through manuscript preparation and post-submission, we enhance and automate your research travel.
        </Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
          More than 5,400 students have achieved top grades with the help of our Research Paper Publication Services, provided by UK-certified editors and official proofreaders from the United Kingdom.
        </Text>
      
        <AnimatedButton />
     
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
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 80, // Adjust as needed to make room for the footer
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  firstheading: {
    fontSize: 24,
    textAlign: 'left',
    color: '#E41C3A',
    fontWeight: '800',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
  },
  firstpara: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
    color: '#22326A',
    textAlign: 'left',
    paddingBottom: 10,
  },
});

export default HRM;
