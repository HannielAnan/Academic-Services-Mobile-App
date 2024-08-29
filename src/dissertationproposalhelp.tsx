// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './dissertationproposalbtn';
import { useNavigation, NavigationProp } from '@react-navigation/native';
function DissertationProposalsService() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>Acquire Immediate Dissertation Proposal Help!</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        Undertaking this process presents many difficulties for any student. Indeed, your entire dissertation rests on this because the proposal points you in a particular direction for your studies. Neverthless, watch out because one mistake may ruin everything with your academics. Do you want to gamble with your future? Then, consider hiring a competent dissertation proposal writing company. Isn't that the sensible choice?

That is just the right website where you can order a professional assistant for writing dissertation proposals. Our collaboration with these leading industry professionals is aimed at turning your idea into a coherent research proposal. We know that we have competent people who can come up with a superb proposal that will satisfy professor’s requirements. Don't wait any longer! Hire the best dissertation proposal writers today, and pass through your proposal with flying colours in the very first try!
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
  buttonContainer:{
    marginTop:12,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 150, // Make room for the footer
  },
  firstheading: {
    fontSize: 24,
    textAlign: 'left',
    color: '#E41C3A',
    fontWeight: '800',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
    paddingLeft:10,
    paddingRight:10,
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

export default DissertationProposalsService;
