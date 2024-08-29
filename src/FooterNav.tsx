import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

type RootStackParamList = {
  Home: undefined;
  Order: undefined;
  Whatsapp: undefined;
};

const FooterNav = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleWhatsappPress = () => {
    const url = 'whatsapp://send?phone=+447564313614';
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Make sure WhatsApp is installed on your device');
    });
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
        <FontAwesomeIcon icon={faHome} size={24} color="white" />
        <Text style={styles.footerText} allowFontScaling={false}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItemorder} onPress={() => navigation.navigate('Order Now')}>
        <FontAwesomeIcon icon={faEnvelope} size={24} color="white" />
        <Text style={styles.footerText} allowFontScaling={false}>Order Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={handleWhatsappPress}>
        <FontAwesomeIcon icon={faWhatsapp} size={24} color="white" />
        <Text style={styles.footerText} allowFontScaling={false}>Whatsapp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#E41C3A',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerItemorder:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20,
  },
  footerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 4,
    fontWeight: '700',
  },
});

export default FooterNav;
