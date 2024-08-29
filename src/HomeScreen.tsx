import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Pressable, Animated, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Service from './service';
import MyForm from './orderform';
import Footer from './FooterNav';
import FooterNav from './FooterNav';

interface SliderItem {
  id: string;
  icon: any;
  link: string;
}

type RootStackParamList = {
  Home: undefined;
  EssayWritingService: undefined;
  Service: undefined;
  OrderForm: undefined;
  AssignmentWritingService: undefined;
  DissertationWritingService: undefined;
  DissertationProposalsService: undefined;
};

const { width: screenWidth } = Dimensions.get('window');
const sliderData: SliderItem[] = [
  { id: '1', icon: require('../assets/website.png'), link: 'https://academicexpert.uk/' },
  { id: '2', icon: require('../assets/facebook.png'), link: 'https://www.facebook.com/academicexpertuk' },
  { id: '3', icon: require('../assets/instagram.png'), link: 'https://www.instagram.com/academicexpertuk' },
  { id: '4', icon: require('../assets/x-logo.png'), link: 'https://twitter.com/AcademicExperUK' },
  { id: '5', icon: require('../assets/pinterest.png'), link: 'https://www.pinterest.co.uk/academicexpertuk/' },
  { id: '6', icon: require('../assets/youtube.png'), link: 'https://www.youtube.com/channel/UChytMgfgOyg7p_JF4GkLfpg' },
  { id: '7', icon: require('../assets/sound-cloud.png'), link: 'https://soundcloud.com/academicexpertuk' },
];

const calculateFontSize = (size: number): number => {
  const baseWidth = 375; // Base width for scaling
  return Math.min(size * (screenWidth / baseWidth), 24); // Max font size is 24
};

function HomeScreen(_props: any) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showOffer, setShowOffer] = useState(false);
  const slideAnim = useRef(new Animated.Value(305)).current;


  const handlePress1 = () => {
    navigation.navigate('EssayWritingService');
  };
  const handlePress2 = () => {
    navigation.navigate('AssignmentWritingService');
  };
  const handlePress3 = () => {
    navigation.navigate('DissertationWritingService');
  };
  const handlePress4 = () => {
    navigation.navigate('DissertationProposalsService');
  };

  const renderItem = ({ item }: { item: SliderItem }) => (
    <TouchableOpacity style={styles.iconContainer} onPress={() => Linking.openURL(item.link)}>
      <Image source={item.icon} style={styles.iconStyle} />
    </TouchableOpacity>
  );

  const handlePress = () => {
    Linking.openURL('https://academicexpert.uk/cheap-assignment-writing-services/');
  };

  const toggleOfferBanner = () => {
    const toValue = showOffer ? 305 : -30;
    setShowOffer(!showOffer);
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.viewStyle}>
      <View style={[styles.frameView, styles.app1IconLayout]}>
        <View style={[styles.groupChild1, styles.groupChild1Bg]} />
        <View style={styles.textContainer}>
          <Text style={styles.assignmentWritingServices} allowFontScaling={false}>
            Assignment Writing Services
          </Text>
          <Image
            style={styles.app1Icon}
            resizeMode="cover"
            source={require('../assets/girl.png')}
          />
        </View>
      </View>
      <View style={styles.sliderWrapper}>
        <Carousel
          data={sliderData}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={70}
          loop={true}
          autoplay={true}
          autoplayDelay={0}
          autoplayInterval={1000}
        />
      </View>
      <View>
        <Text style={styles.servicesheading} allowFontScaling={false}>Services</Text>
        <View style={styles.seeAllButtonContainer}>
          <Pressable style={styles.viewAllButton} onPress={() => navigation.navigate('Services')}>
            <Text style={styles.viewAllButtonText} allowFontScaling={false}>View All</Text>
            <Image style={styles.viewAllIcon} source={require("../assets/eye.png")} />
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.servicesContainer}>
          <TouchableOpacity
            style={[styles.serviceBox, styles.shadowBox]}
            onPress={handlePress1}
          >
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require('../assets/BOX1.png')}
            />
            <Text style={styles.serviceText} allowFontScaling={false}>Essay Writing Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.serviceBox, styles.shadowBox]}
            onPress={handlePress2}
          >
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require('../assets/box4.png')}
            />
            <Text style={styles.serviceText} allowFontScaling={false}>Assignment Writing Services</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.servicesContainer}>
        <TouchableOpacity
            style={[styles.serviceBox, styles.shadowBox]}
            onPress={handlePress3}
          >
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require('../assets/box3.png')}
            />
            <Text style={styles.serviceText} allowFontScaling={false}>Dissertation Writing Services</Text>
            </TouchableOpacity>
            
 
          <TouchableOpacity
            style={[styles.serviceBox, styles.shadowBox]}
            onPress={handlePress4}
          >
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require('../assets/box2.png')}
            />
            <Text style={styles.serviceText} allowFontScaling={false}>Dissertation Proposals</Text>
            </TouchableOpacity>
     
        </View>
      </View>
      <Animated.View style={[styles.offerContainer, { transform: [{ translateX: slideAnim }] }]}>
        <TouchableOpacity onPress={toggleOfferBanner} style={styles.offer}>
          <View style={styles.animatedView}>
            <Image
              style={styles.offerImage}
              resizeMode="cover"
              source={require('../assets/offer.png')}
            />
          </View>
        </TouchableOpacity>
        {showOffer && (
          <View style={styles.offerBannerContent}>
            <Text style={styles.offerBannerText} allowFontScaling={false}>20% OFF {'\n'} on all services</Text>
          </View>
        )}
      </Animated.View>
      <FooterNav /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  shadowBox: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  textContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAllIcon: {
    width: 18,
    height: 11,
    marginTop: -2,
    marginLeft:5,
  },
  seeAllButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: -30,
    paddingBottom: 10,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22326A',
    borderRadius: 7,
    paddingVertical: 2,
    paddingHorizontal: 2,
    paddingRight: 8,
    paddingLeft: 8,
  },
  viewAllButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginRight: 0,
    marginTop: 2,
  },
  offerContainer: {
    position: 'absolute',
    top: 400, // Adjust based on where you want it
    right: -50,
    width: 360, // Adjust the width based on the content
    height: 192, // Match the height of the offer image
    backgroundColor: '#e41c3a',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  offer: {
    width: 40,
    height: 192,
    overflow: 'hidden',
    zIndex: 1,
    right: 30,
  },
  animatedView: {
    width: 40,
    height: 192,
    borderRadius: 20,
  },
  offerImage: {
    width: '100%',
    height: '100%',
  },
  offerBannerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerBannerText: {
    fontSize: 36,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: -10,
  },
  Icons: {
    top: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#E41C3A',
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
  viewtext: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  whatsappLayout: {
    height: 11,
    position: 'absolute',
  },
  seeAllBotton: {
    borderRadius: 7,
    backgroundColor: '#22326A',
    left: 0,
    top: 0,
  },
  objectsIcon: {
    top: 5,
    width: 18,
    overflow: 'hidden',
    left: 305,
  },
  seeAllBottonParent: {
    top: 0,
    left: 300,
  },
  groupParent: {
    top: 415,
    left: 255,
  },
  parentLayout: {
    height: 20,
    width: 85,
    position: 'absolute',
  },
  viewAll1: {
    fontSize: 48,
    width: 57,
    height: 18,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    marginRight: 50,
  },
  viewAll: {
    left: 25,
    top: 0,
    position: 'absolute',
  },
  serviceText4: {
    color: '#E41C3A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    top: 4,
  },
  serviceText1: {
    color: '#E41C3A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    top: 4,
  },
  serviceText2: {
    color: '#E41C3A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    top: -4,
  },
  serviceText: {
    color: '#E41C3A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
  },
  groupIcon: {
    width: 76,
    height: 61,
  },
  homeChildShadowBox3: {
    height: 120,
    width: 155,
    top: -50,
    left: 0,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: 'rgba(35, 35, 35, 35)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Add margin between rows
  },
  homeChildShadowBox2: {
    height: 120,
    width: 155,
    top: -20,
    right: 0,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: 'rgba(35, 35, 35, 35)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Add margin between rows
  },
  homeChildShadowBox4: {
    height: 120,
    width: 155,
    top: -50,
    right: 0,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: 'rgba(35, 35, 35, 35)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Add margin between rows
  },
  homeChildShadowBox1: {
    height: 130,
    width: 155,
    top: -20,
    left: 0,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: 'rgba(35, 35, 35, 35)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Add margin between rows
  },
  serviceBox: {
    height: 120,
    width: 145,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: 'rgba(35, 35, 35, 35)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Add margin between rows
  },
  serviceBoxMargin: {
    marginLeft: 10, // Adjust the margin to space out the boxes
  },
  servicesheading: {
    fontSize: 32,
    color: '#22326A',
    textAlign: 'left',
    fontWeight: '700',
    marginTop: -12,
    paddingLeft: 15,
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -5,
    marginLeft: 20,
    marginRight: 20,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  groupChild1Bg: {
    backgroundColor: '#E41C3A',
    position: 'absolute',
    width: '100%',
  },
  viewAll1Clr: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
  },
  app1IconLayout: {
    height: 249,
    position: 'relative',
    fontFamily: 'Poppins-Regular',
  },
  app1Icon: {
    width: 150,
    height: 250,
    position: 'absolute',
    top: 0,
    left: 10,
  },
  assignmentWritingServices: {
    top: 35,
    fontSize: 44, // Fixed font size
    width: 250, // Fixed width
    color: '#ffffff',
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    right:5,
    position: 'absolute',
  },
  rectangleGroup: {
    width: '100%',
    height: 249,
    left: 0,
    top: 0,
  },
  groupChild1: {
    top: 23,
    height: 199,
    left: 0,
    borderRadius: 30,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  frameView: {
    width: '100%',
    height: 249,
    borderRadius: 40,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  iconStyle: {
    width: 58,
    height: 58,
  },
  sliderWrapper: {
    marginTop: -10, // Adjust the space between the banner and the slider
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
