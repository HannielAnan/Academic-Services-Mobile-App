import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './HomeScreen';
import MyForm from './orderform';
import TawkToWidget from './twakto';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from './assets/logo.png';

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
    width: "8.33%",
    top: "-10%",
  },
  logoStyle: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    alignItems: 'center'
  },
  headerLogo: {
    width: 150,
    height: 55,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: 52,
    marginTop:0,
  },
  headerStyle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 }, // More prominent shadow
    shadowOpacity: 0.3, // Increase opacity for better visibility
    shadowRadius: 10, // Increase radius for a larger shadow spread
    elevation: 15, // Increase elevation for Android
  },
});


function Footer() {
  return (
    <Tab.Navigator
      initialRouteName="Order"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'lightgray',
        tabBarStyle: { 
          backgroundColor: '#E41C3A', 
          borderBottomWidth: 2, // Add border bottom width
          borderBottomColor: '#000', // Add border bottom color (black in this case)
          shadowColor: "rgba(0, 0, 0, 0.05)",
          shadowOpacity: 1,
        },
        headerTitleAlign: 'center',
      
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: ({ focused }) => (
            <Text style={styles.customTabBarLabel}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} style={styles.customTabBarIcon}/>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Order" 
        component={MyForm} 
        options={{ 
          tabBarLabel: ({ focused }) => (
            <Text style={styles.customTabBarLabel}>Order Now</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faEnvelope} color={color} size={size} style={styles.customTabBarIcon} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Whatsapp" 
        component={TawkToWidget} 
        options={{ 
          tabBarLabel: ({ focused }) => (
            <Text style={styles.customTabBarLabel}>Whatsapp</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faWhatsapp} color={color} size={size} style={styles.customTabBarIcon}/>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}




export default Footer;
