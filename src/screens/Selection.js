import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Selection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/horizontal.png')} style={[styles.logo, { width: 100, height: 100 }]} />
      <Text style={styles.title}>Stream, Play, and Feel the Rhythm.</Text>
      <Text style={styles.subtitle}>
        Discover a world of melodies, rhythms, and beats tailored just for you.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E2C', padding: 20,
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginBottom: 10,
  },
  subtitle: {
    fontSize: 14, color: '#AAAAAA', textAlign: 'center', marginBottom: 30,
  },
  button: {
    backgroundColor: '#00ADEF', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF', fontSize: 16, fontWeight: 'bold',
  },
});

export default Selection;
