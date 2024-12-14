import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();
  const state = navigation.getState();
  const currentRoute = state?.routeNames[state?.index] || 'Home';

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={24} color={currentRoute === 'Home' ? "#00ADEF" : "#666"} />
        <Text style={[styles.navText, currentRoute === 'Home' ? styles.activeNavText : null]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
        <Ionicons name="search" size={24} color={currentRoute === 'Search' ? "#00ADEF" : "#666"} />
        <Text style={[styles.navText, currentRoute === 'Search' ? styles.activeNavText : null]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={24} color={currentRoute === 'Profile' ? "#00ADEF" : "#666"} />
        <Text style={[styles.navText, currentRoute === 'Profile' ? styles.activeNavText : null]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#1E1E2C', borderTopWidth: 1, borderTopColor: '#333',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#666', fontSize: 12, marginTop: 5,
  },
  activeNavText: {
    color: '#00ADEF',
  },
});

export default BottomNavigation;
