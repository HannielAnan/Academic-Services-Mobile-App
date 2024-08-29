import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './ReflectiveEssaybtn';

function ReflectiveEssay() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>Reflective Essay</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
          Writing a reflective essay is like diving deep into your experiences and thoughts, sharing the insights you've gained. Unlike typical academic papers, reflective essays focus on personal growth and understanding. They involve looking back on significant moments in your life, analyzing their impact on you, and expressing these insights clearly and meaningfully.
        </Text> 
        <Text style={styles.firstpara} allowFontScaling={false}>
          This article will guide you through starting a reflective essay and choosing the right stylistic devices, helping you offer readers a glimpse into the complexities of your human experience.
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
  scrollView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 80, // Adjust as needed to make room for the footer
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
  },
});

export default ReflectiveEssay;
