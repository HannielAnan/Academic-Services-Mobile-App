import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import FooterNav from './FooterNav';
import Icon from 'react-native-vector-icons/Ionicons'; 
import backButtonImage from '../assets/Back-button.png'; // Ensure this import is correct
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
  accounting: undefined;
  finance: undefined;
  economics: undefined;
  IT: undefined;
  healthcare: undefined;
  management: undefined;
  law: undefined;
  english: undefined;
  Marketing: undefined;
  Psychology: undefined;
  nursing: undefined;
  BusinessManagement: undefined;
  CaseStudy: undefined;
  HRM: undefined;
  ReflectiveEssay: undefined;
  // Add other screen names and their parameters here
};

const sliderData: SliderItem[] = [
  { id: '1', icon: require('../assets/website.png'), link: 'https://academicexpert.uk/' },
  { id: '2', icon: require('../assets/facebook.png'), link: 'https://www.facebook.com/academicexpertuk' },
  { id: '3', icon: require('../assets/instagram.png'), link: 'https://www.instagram.com/academicexpertuk' },
  { id: '4', icon: require('../assets/x-logo.png'), link: 'https://twitter.com/AcademicExperUK' },
  { id: '5', icon: require('../assets/pinterest.png'), link: 'https://www.pinterest.co.uk/academicexpertuk/' },
  { id: '6', icon: require('../assets/youtube.png'), link: 'https://www.youtube.com/channel/UChytMgfgOyg7p_JF4GkLfpg' },
  { id: '7', icon: require('../assets/sound-cloud.png'), link: 'https://soundcloud.com/academicexpertuk' },
];

function Service() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem = ({ item }: { item: SliderItem }) => (
    <TouchableOpacity style={styles.iconContainer} onPress={() => Linking.openURL(item.link)}>
      <Image source={item.icon} style={styles.iconStyle} />
    </TouchableOpacity>
  );

  const handlePress = () => {
    Linking.openURL('https://academicexpert.uk/cheap-assignment-writing-services/');
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
  const handlePressaccounting = () => {
    navigation.navigate('accounting');
  };  
  const handlePressfinance = () => {
    navigation.navigate('finance');
  };
  const handlePresseconomics = () => {
    navigation.navigate('economics')
  };
  const handlePressIT = () => {
    navigation.navigate('IT')
  };
  const handlePresshealthcare = () => {
    navigation.navigate('healthcare')
  };
  const handlePressManagement = () => {
    navigation.navigate('management')
  };
  const handlePresslaw= () => {
    navigation.navigate('law')
  };
  const handlePressenglish= () =>{
    navigation.navigate('english')
  };
  const handlePressMarketing= () =>{
    navigation.navigate('Marketing')
  };
  const handlePressPsychology=() =>{
    navigation.navigate('Psychology')
  };
  const handlePressnursing=() =>{
    navigation.navigate('nursing')
  }
  const handlePressBusinessManagement=() =>{
    navigation.navigate('BusinessManagement')
  }
  const handlePressCaseStudy=() =>{
    navigation.navigate('CaseStudy')
  }
  const handlePressHRM=() =>{
    navigation.navigate('HRM')
  }
  const handlePressReflectiveEssay=() =>{
    navigation.navigate('ReflectiveEssay')
  }
    // New back button handler
    const handleBackPress = () => {
      navigation.goBack();
    };
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.viewStyle}>
          <View style={styles.sliderWrapper}>
            <Carousel
              data={sliderData}
              renderItem={renderItem}
              sliderWidth={400}
              itemWidth={70}
              loop
              autoplay
              autoplayDelay={0}
              autoplayInterval={1000}
            />
          </View>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Image source={backButtonImage} style={styles.backButtonImage} />
          </TouchableOpacity>

          <View>
            <Text style={styles.servicesheading} allowFontScaling={false}>Services</Text>
          </View>
          <View style={styles.servicesContainer}>
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBox1]}
              onPress={() => navigation.navigate('EssayWritingService')}
            >
              <Image style={styles.groupIcon} resizeMode="cover" source={require('../assets/BOX1.png')} />
              <Text style={styles.serviceText4} allowFontScaling={false}>Essay</Text>
              <Text style={styles.serviceText} allowFontScaling={false}>Writing Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.serviceBox, styles.homeChildShadowBox2, styles.serviceBoxMargin]}
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
              style={[styles.serviceBox, styles.homeChildShadowBox10]}
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
              style={[styles.serviceBox, styles.homeChildShadowBox4, styles.serviceBoxMargin]}
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
          
          
          <View style={styles.servicesContainer}>
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxaccounting]}
              onPress={handlePressaccounting}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/accounting-icon.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Accounting</Text>
            </TouchableOpacity>
            {/* Uncomment these sections if needed */}
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBox40, styles.serviceBoxMargin]}
              onPress={handlePressCaseStudy}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/case-study.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Case Study</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBox40]}
              onPress={handlePressfinance}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/finance-icon.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Finance</Text>
            </TouchableOpacity>
            <View style={[styles.serviceBox, styles.homeChildShadowBox40, styles.serviceBoxMargin]}>
              <Image style={styles.groupIcon} resizeMode="cover" source={require('../assets/finance-icon.png')} />
              <Text style={styles.serviceText1} allowFontScaling={false}>Finance</Text>
            </View> */}
          </View>
          <View style={styles.servicesContainer}>
            {/* <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBox11]}
              onPress={handlePresseconomics}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/Economics-icon.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Economics</Text>
            </TouchableOpacity> */}
            {/* <Pressable onPress={handlePress}>
              <View style={[styles.serviceBox, styles.homeChildShadowBox11]}>
                <Image style={styles.groupIcon} resizeMode="cover" source={require('../assets/Economics-icon.png')} />
                <Text style={styles.serviceText} allowFontScaling={false}>Economics</Text>
              </View>
            </Pressable> */}
            {/* <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxbusiness]}
              onPress={handlePressBusinessManagement}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/Business-Management-icon.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Business Management</Text>
            </TouchableOpacity> */}
            {/* <View style={[styles.serviceBox, styles.homeChildShadowBoxbusiness, styles.serviceBoxMargin]}>
              <Image style={styles.groupIcon} resizeMode="cover" source={require('../assets/Business-Management-icon.png')} />
              <Text style={styles.serviceText1} allowFontScaling={false}>Business</Text>
              <Text style={styles.serviceText2} allowFontScaling={false}>Management</Text>
            </View> */}
          </View>
          <View style={styles.servicesContainer}>
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxIT]}
              onPress={handlePressIT}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/IT-icon.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>IT</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxHealth]}
              onPress={handlePresshealthcare}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/Health-Care-icon.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Health Care</Text>
            </TouchableOpacity> */}
             <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxHealth]}
              onPress={handlePresshealthcare}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/proofreading&editing.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Proof Reading & {"\n"} Editing</Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.servicesContainer}>
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxManagement]}
              onPress={handlePressReflectiveEssay}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/reflective-essay.jpg')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Reflective Essay</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxLaw]}
              onPress={handlePresslaw}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/Law.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Law</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.servicesContainer}>
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxenglish]}
              onPress={handlePressenglish}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/English-Literature.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Research Paper Writing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxMarketing]}
              onPress={handlePressMarketing}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/Marketing.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Research Paper Editing/Proofreading</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.servicesContainer}>
             <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxpsychology]}
              onPress={handlePressPsychology}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/Psychology.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Health Care {"\n"}Assignment</Text>
            </TouchableOpacity> 
            {/* <Pressable onPress={handlePress}>
              <View style={[styles.serviceBox, styles.homeChildShadowBox11]}>
                <Image style={styles.groupIcon} resizeMode="cover" source={require('../assets/Economics-icon.png')} />
                <Text style={styles.serviceText} allowFontScaling={false}>Economics</Text>
              </View>
            </Pressable> */}
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxNursing]}
              onPress={handlePressnursing}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/Nursing.png')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Nursing Assignment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.serviceBox, styles.homeChildShadowBoxHRM]}
              onPress={handlePressHRM}
            >
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/HRM.jpg')}
              />
              <Text style={styles.serviceText} allowFontScaling={false}>Research Paper Publication Services</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FooterNav />
    </View>
  );
}


const styles = StyleSheet.create({
  backButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    padding: 8,
    backgroundColor: '#22326A',
    borderRadius: 10,
    marginLeft: 10,
  },
  backButtonImage: {
    width: 80,
    height: 25,
    marginTop: -7,
  },
  
  container: {
    flex: 1,
  },
  viewtext: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  whatsappLayout: {
    height: 11,
    position: "absolute",
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
    overflow: "hidden",
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
    position: "absolute",
  },
  viewAll1: {
    fontSize: 48,
    // color: '#000000',
    width: 57,
    height: 18,
    fontFamily: 'Poppins-Regular',
    fontWeight: "600",
    marginRight: 50,
  },
  viewAll: {
    left: 25,
    top: 0,
    position: "absolute",
  },
  serviceText4: {
    color: '#E41C3A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontWeight: "700",
    top: 4,
  },
  serviceText1: {
    color: '#E41C3A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontWeight: "700",
    top: 4,
  },
  serviceText2: {
    color: '#E41C3A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontWeight: "700",
    top: -4,
  },
  serviceText: {
    color: '#E41C3A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontWeight: "700",
  },
  groupIcon: {
    width: 76,
    height: 61,
  },
  homeChildShadowBox3: {
    height: 130,
    width: 145,
    top: -50,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBox11: {
    height: 130,
    width: 145,
    top: -110,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  CaseStudyBox: {
    height: 130,
    width: 145,
    top: -110,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxManagement: {
    height: 130,
    width: 145,
    top: -160,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxpsychology: {
    height: 130,
    width: 145,
    top: -220,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxNursing: {
    height: 130,
    width: 145,
    top: -220,
    left: 52,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxHRM: {
    height: 130,
    width: 145,
    top: -80,
    left: -280,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxLaw: {
    height: 130,
    width: 145,
    top: -160,
    left: -10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxbusiness: {
    height: 130,
    width: 145,
    top: -110,
    left: -10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxaccounting: {
    height: 130,
    width: 145,
    top: -80,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxIT: {
    height: 130,
    width: 145,
    top: -130,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxenglish: {
    height: 130,
    width: 145,
    top: -190,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBox10: {
    height: 130,
    width: 145,
    top: -50,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBox2: {
    height: 130,
    width: 145,
    top: -20,
    right: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBox40: {
    height: 130,
    width: 145,
    top: -80,
    right: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxHealth: {
    height: 130,
    width: 145,
    top: -130,
    right: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBoxMarketing: {
    height: 130,
    width: 145,
    top: -190,
    right: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBox4: {
    height: 130,
    width: 145,
    top: -50,
    right: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  homeChildShadowBox1: {
    height: 130,
    width: 145,
    top: -20,
    left: 10,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
  serviceBox: {
    height: 130,
    width: 135,
    borderRadius: 20,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(35, 35, 35, 35)",
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
    marginLeft: 20, // Adjust the margin to space out the boxes
  },
  servicesheading: {
    fontSize: 32,
    color: '#22326A',
    textAlign: "center",
    fontWeight: "700",
    marginTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  groupChild1Bg: {
    backgroundColor: '#E41C3A',
    position: "absolute",
    width: '100%',
  },
  viewAll1Clr: {
    textAlign: "center",
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
  },
  app1IconLayout: {
    height: 249,
    position: "relative",
    fontFamily: 'Poppins-Regular'
  },
  app1Icon: {
    width: 250,
    left: -35,
    top: 0,
  },
  assignmentWritingServices: {
    top: 35,
    left: 130,
    fontSize: 46,
    width: 250,
    height: 12,
    color: '#ffffff',
    fontWeight: "700",
    position: "absolute",
    fontFamily: 'Poppins-Regular',
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
    marginTop: 10, // Adjust the space between the banner and the slider
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Service;
