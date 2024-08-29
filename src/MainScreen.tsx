import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import HomeScreen from './HomeScreen';
import MyForm from './orderform';
import TawkToWidget from './twakto';
import { StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator();

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
  tabBarStyle: {
    backgroundColor: '#E41C3A',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
  },
});

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Order"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'lightgray',
        tabBarStyle: styles.tabBarStyle,
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
            <FontAwesomeIcon icon={faHome} color={color} size={size} style={styles.customTabBarIcon} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Order" 
        component={MyForm} 
        options={{ 
          tabBarLabel: ({ focused }) => (
            <Text style={styles.customTabBarLabel}>Order</Text>
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
            <FontAwesomeIcon icon={faWhatsapp} color={color} size={size} style={styles.customTabBarIcon} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
