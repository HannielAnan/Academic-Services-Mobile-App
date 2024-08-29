import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from './slider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 5, // Add top margin
  },
  headingStyle2: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    padding: 5,
    marginTop: -5,
  },
  headingStyle5: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    padding: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Evenly distribute icons
    alignItems: 'center', // Vertically center icons
    paddingVertical: 10, // Add vertical padding
    color: 'white',
    backgroundColor: 'white',
  },
  iconStyle: {
    width: 50,
    height: 50,
  },
  iconText: {
    textAlign: 'center',
    marginTop: 5, 
  },
  iconWithText: {
    alignItems: 'center',
    flex: 1,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the WhatsApp button on the second row
    padding: 0,
    width: '100%', // Ensure the container takes the full width
  },
});

const AppNavigator = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object
  const handlePhonePress = () => {
    Linking.openURL('tel:+441158883562');
  };

  const handlePress = () => {
    Linking.openURL('https://academicexpert.uk/');
  };

  const handleMailPress = () => {
    Linking.openURL('mailto:info@academicexpert.uk');
  };

  const handleWhatsAppPress = () => {
    Linking.openURL('https://wa.me/+447564313614');
  };
  
  const handleOrderNowPress = () => {
    // Use navigation object to navigate to the OrderNow screen
    Linking.openURL('https://academicexpert.uk/order-now/');
  };
  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/academicexpertuk'); // Add your Facebook page URL here
  };
  const handleXPress = () => {
    Linking.openURL('https://twitter.com/AcademicExperUK'); // Add your Facebook page URL here
  };
  const handletiktokPress = () => {
    Linking.openURL('https://www.tiktok.com/@academicexpert.uk'); // Add your Facebook page URL here
  };
  const handleinstaPress = () => {
    Linking.openURL('https://www.instagram.com/academicexpertuk/?hl=en'); // Add your Facebook page URL here
  };
  return (
    <View style={{ flex: 1 }}>
    <View style={styles.iconContainer}>
    <TouchableOpacity style={styles.iconWithText} onPress={handleFacebookPress}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/facebook.png')}
            />
            <Text  style={[styles.headingStyle2, { color: 'black' }]}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWithText} onPress={handleXPress}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/twitter.png')}
            />
            <Text  style={[styles.headingStyle2, { color: 'black' }]}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWithText} onPress={handletiktokPress}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/tik-tok.png')}
            />
            <Text  style={[styles.headingStyle2, { color: 'black' }]}>Tiktok</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWithText} onPress={handleinstaPress}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/instagram.png')}
            />
            <Text  style={[styles.headingStyle2, { color: 'black' }]}>Instagram</Text>
          </TouchableOpacity>

    </View>
      <SafeAreaView style={styles.container}>
        <Image
          style={{ width: 220, height: 220 }}
          source={require('../assets/woman.png')}
        />
        <Text style={styles.headingStyle}>5044+ PhD Experts</Text>
        <Text style={[styles.headingStyle5, { color: 'black' }]}>
          Domain specific experts, Having 10+ years of experience, Available
          24x7 to help
        </Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWithText} onPress={handleMailPress}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/mail.png')}
            />
            <Text  style={[styles.headingStyle2, { color: 'black' }]}>Mail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWithText} onPress={handlePhonePress}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/phone-call.png')}
            />
            <Text  style={[styles.headingStyle2, { color: 'black' }]}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWithText} onPress={handlePress}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/website.png')}
            />
            <Text  style={[styles.headingStyle2, { color: 'black' }]}>Website</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.secondRow}>
          <TouchableOpacity style={styles.iconWithText} onPress={handleWhatsAppPress}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/whatsapp.png')}
            />
            <Text  style={[styles.headingStyle2, { color: 'black' }]}>Whatsapp</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.iconWithText} onPress={handleOrderNowPress}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/checkout.png')}
            />
            <Text  style={[styles.headingStyle2, { color: 'black' }]}>OrderNow</Text>
          </TouchableOpacity>
        </View>
  
     
      </SafeAreaView>
    </View>
  );
};

export default AppNavigator;
