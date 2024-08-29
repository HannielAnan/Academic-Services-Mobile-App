// src/Navigator.js
import React from 'react';
import { Image, StyleSheet, Text, Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import EssayWritingService from './essaywritingservice';
import AssignmentWritingService from './assignmentwritingservice';
import DissertationWritingService from './dissertationwritingservice';
import DissertationProposalsService from './dissertationproposalhelp';
import MyForm from './orderform';
import Service from './service';
import TawkToWidget from './twakto';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import accounting from './accounting';
import finance from './finance';
import IT from './IT';
import healthcare from './healthcare'
import management from './Management';
import law from './law'
import english from './english';
import Marketing from './Marketing';
import Psychology from './Psychology';
import Nursing from './nursing';
import BusinessManagement from './BusinessManagement';
import economics from './economics';
import RefundRequestForm from './RefundRequest';
import CaseStudy from './CaseStudy';
import HRM from './HRM';
import ReflectiveEssay from './ReflectiveEssay';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  customTabBarLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute',
  },
  customTabBarIcon: {
    color: '#FFFFFF',
    width: '8.33%',
    top: '-10%',
  },
  headerLogo: {
    width: 150,
    height: 55,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: 52,
    marginTop: 0,
  },
  headerStyle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
  },
});

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: 'lightgray',
//         tabBarStyle: {
//           backgroundColor: '#E41C3A',
//           borderBottomWidth: 2,
//           borderBottomColor: '#000',
//           shadowColor: 'rgba(0, 0, 0, 0.05)',
//           shadowOpacity: 1,
//         },
//         headerTitleAlign: 'center',
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: () => <Text style={styles.customTabBarLabel}>Home</Text>,
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesomeIcon icon={faHome} color={color} size={size} style={styles.customTabBarIcon} />
//           ),
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Order"
//         component={MyForm}
//         options={{
//           tabBarLabel: () => <Text style={styles.customTabBarLabel} allowFontScaling={false}>Order</Text>,
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesomeIcon icon={faEnvelope} color={color} size={size} style={styles.customTabBarIcon} />
//           ),
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Whatsapp"
//         component={TawkToWidget}
//         options={{
//           tabBarLabel: () => <Text style={styles.customTabBarLabel}>Whatsapp</Text>,
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesomeIcon icon={faWhatsapp} color={color} size={size} style={styles.customTabBarIcon} />
//           ),
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
const GPACalculatorScreen = () => {
  React.useEffect(() => {
    Linking.openURL('https://academicexpert.uk/gpa-calculator/');
  }, []);

  return null;
};

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
        headerStyle: styles.headerStyle,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} /> 
      <Drawer.Screen name="Services" component={Service} />
      <Drawer.Screen name="Order Now" component={MyForm} />
      <Drawer.Screen name="Refund Form" component={RefundRequestForm} />
      <Stack.Screen name="GPA Calculator" component={GPACalculatorScreen} />
      <Drawer.Screen name="Essay Writing Service" component={EssayWritingService} />
      <Drawer.Screen name="Dissertation Writing Service" component={DissertationWritingService} />
      <Drawer.Screen name="Dissertation Proposals Service" component={DissertationProposalsService} />
      <Drawer.Screen name="Assignment Writing Service" component={AssignmentWritingService} />
      <Drawer.Screen name="Research Paper Publication Service " component={HRM} />
      <Drawer.Screen name="Research Paper Editing and Proofreading" component={Marketing} />
      <Drawer.Screen name="Research Paper Writing" component={english} />
    </Drawer.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen
          name="EssayWritingService"
          component={EssayWritingService}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
          <Stack.Screen
          name="AssignmentWritingService"
          component={AssignmentWritingService}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
         <Stack.Screen
          name="DissertationWritingService"
          component={DissertationWritingService}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
         <Stack.Screen
          name="DissertationProposalsService"
          component={DissertationProposalsService}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
         <Stack.Screen
          name="accounting"
          component={accounting}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
        <Stack.Screen
          name="CaseStudy"
          component={CaseStudy}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
         <Stack.Screen
          name="ReflectiveEssay"
          component={ReflectiveEssay}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
         <Stack.Screen
          name="finance"
          component={finance}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
          <Stack.Screen
          name="economics"
          component={economics}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
         <Stack.Screen
          name="business"
          component={accounting}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
         <Stack.Screen
          name="IT"
          component={IT}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
        <Stack.Screen
          name="HRM"
          component={HRM}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
        <Stack.Screen
          name="healthcare"
          component={healthcare}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
          <Stack.Screen
          name="management"
          component={management}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
          <Stack.Screen
          name="law"
          component={law}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
             <Stack.Screen
          name="english"
          component={english}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
        <Stack.Screen
          name="Marketing"
          component={Marketing}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
        <Stack.Screen
          name="Psychology"
          component={Psychology}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
         <Stack.Screen
          name="nursing"
          component={Nursing}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
        <Stack.Screen
          name="BusinessManagement"
          component={BusinessManagement}
          options={{
            headerShown: true,
            headerTitle: () => <Image source={logo} style={styles.headerLogo} />,
            headerStyle: styles.headerStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
