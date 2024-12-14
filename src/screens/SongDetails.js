import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SongDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Song Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#1E1E2C', justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 20, color: '#fff',
  },
});

export default SongDetails;
