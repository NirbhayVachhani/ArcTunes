import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  const showAudioQualityAlert = () => {
    Alert.alert(
      "Select Audio Quality",
      "Choose your preferred audio quality",
      [
        { text: "Low", onPress: () => console.log("Low quality selected") },
        { text: "Medium", onPress: () => console.log("Medium quality selected") },
        { text: "High", onPress: () => console.log("High quality selected") },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.settingsList}>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="notifications" size={24} color="#fff" />
          </View>
          <Text style={styles.settingText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={showAudioQualityAlert}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="volume-high" size={24} color="#fff" />
          </View>
          <Text style={styles.settingText}>Audio Quality</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="information-circle" size={24} color="#fff" />
          </View>
          <Text style={styles.settingText}>About</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="person" size={24} color="#fff" />
          </View>
          <Text style={styles.settingText}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="shield-checkmark" size={24} color="#fff" />
          </View>
          <Text style={styles.settingText}>Privacy</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#1E1E2C',
  },
  header: {
    flexDirection: 'row', alignItems: 'center', padding: 20,
  },
  headerTitle: {
    color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 20,
  },
  settingsList: {
    marginTop: 20,
  },
  settingItem: {
    flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#333',
  },
  settingIconContainer: {
    marginRight: 15,
  },
  settingText: {
    color: '#fff',
  },
});

export default Settings;
