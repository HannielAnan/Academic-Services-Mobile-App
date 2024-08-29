// src/EssayWritingService.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './FooterNav';
import AnimatedButton from './dissertationwritingservicebtn';
import { useNavigation, NavigationProp } from '@react-navigation/native';
function DissertationWritingService() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.firstheading} allowFontScaling={false}>WELCOME TO THE BEST DISSERTATION WRITING SERVICE IN THE UK</Text>
        <Text style={styles.firstpara} allowFontScaling={false}>
        Are you having trouble with your dissertation? Don’t worry if you are in the middle of it or haven’t started yet! Academic Expert UK is the best place you need. They give great help with writing dissertations in the UK. Let us change your worries into a good and happy experience.
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
        marginTop:18,
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
    paddingLeft:12,
    paddingRight:12,
  },
  firstpara: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
    paddingLeft: 12,
    paddingRight: 12,
    color:'#22326A',
    textAlign:'left',
  },
});

export default DissertationWritingService;
