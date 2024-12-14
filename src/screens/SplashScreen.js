import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Selection');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/main_logo.png')} style={styles.logo} />
      <Text style={styles.tagline}>Stream, Play, and Feel the Rhythm.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E2C',
  },
  logo: {
    width: 100, height: 100, marginBottom: 20,
  },
  tagline: {
    fontSize: 16, color: '#FFFFFF', textAlign: 'center', paddingHorizontal: 20,
  },
});

export default SplashScreen;
