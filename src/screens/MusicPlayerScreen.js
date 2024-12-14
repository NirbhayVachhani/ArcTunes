import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
// Adjust the track and albumArt paths as needed
const track1 = require('../assets/songs/track1.mp3');
const albumArt = require('../assets/album/anuvjain.png');

const MusicPlayerScreen = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const track = route.params?.track; // If you pass a track from Home

  useEffect(() => {
    loadAudio();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const loadAudio = async () => {
    try {
      const { sound: loadedSound } = await Audio.Sound.createAsync(
        track1,
        { shouldPlay: false }
      );
      setSound(loadedSound);

      loadedSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setIsLoaded(true);
          setDuration(status.durationMillis || 0);
          setPosition(status.positionMillis || 0);
        } else if (status.didJustFinish) {
          setIsPlaying(false);
          setPosition(0);
          loadedSound.setPositionAsync(0);
        }
      });
    } catch (error) {
      console.error('Error loading audio:', error);
    }
  };

  const playPauseHandler = async () => {
    if (sound && isLoaded) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipBackward = async () => {
    if (sound && isLoaded) {
      const newPosition = Math.max(0, position - 10000);
      await sound.setPositionAsync(newPosition);
    }
  };

  const skipForward = async () => {
    if (sound && isLoaded) {
      const newPosition = Math.min(duration, position + 10000);
      await sound.setPositionAsync(newPosition);
    }
  };

  const onSliderChange = async (value) => {
    if (sound && isLoaded) {
      await sound.setPositionAsync(value);
    }
  };

  const formatTime = (ms) => {
      const totalSeconds = Math.floor(ms / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-down" size={32} color="#FFFFFF" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>NOW PLAYING</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.albumContainer}>
        <Image 
          source={albumArt} 
          style={styles.albumArt}
          resizeMode="cover"
        />
      </View>

      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{track?.title || 'Track Title'}</Text>
        <Text style={styles.artistName}>{track?.artist || 'Artist Name'}</Text>
      </View>

      <View style={styles.progressContainer}>
        <Slider
          style={styles.slider}
          value={position}
          minimumValue={0}
          maximumValue={duration}
          onValueChange={onSliderChange}
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="rgba(255,255,255,0.3)"
          thumbTintColor="#1DB954"
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatTime(position)}</Text>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="shuffle" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={skipBackward}>
          <Ionicons name="play-skip-back" size={36} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={playPauseHandler} style={styles.playButton}>
          <Ionicons
            name={isPlaying ? 'pause' : 'play'}
            size={40}
            color="#000000"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={skipForward}>
          <Ionicons name="play-skip-forward" size={36} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="repeat" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomControls}>
        <TouchableOpacity>
          <Ionicons name="bluetooth" size={24} color="#1DB954" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="list" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 16,
  },
  headerTitle: {
    color: '#FFFFFF', fontSize: 12, fontWeight: '600', letterSpacing: 1,
  },
  albumContainer: {
    alignItems: 'center', marginTop: windowHeight * 0.05,
  },
  albumArt: {
    width: windowWidth * 0.75, height: windowWidth * 0.75, borderRadius: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, shadowRadius: 4.65, elevation: 8,
  },
  songInfo: {
    alignItems: 'center', marginTop: 32,
  },
  songTitle: {
    color: '#FFFFFF', fontSize: 24, fontWeight: '700', marginBottom: 8,
  },
  artistName: {
    color: '#B3B3B3', fontSize: 16, fontWeight: '500',
  },
  progressContainer: {
    marginTop: 32, paddingHorizontal: 20,
  },
  slider: {
    width: '100%', height: 40,
  },
  timeContainer: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: -8,
  },
  timeText: {
    color: '#B3B3B3', fontSize: 12,
  },
  controlsContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, paddingHorizontal: 32,
  },
  playButton: {
    backgroundColor: '#1DB954', width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center',
  },
  bottomControls: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 'auto', paddingBottom: 32, paddingHorizontal: 32,
  },
});

export default MusicPlayerScreen; 