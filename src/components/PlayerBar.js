import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlayerBar = ({ currentSong, isPlaying, onPlayPause, onNavigate }) => {
  if (!currentSong) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={onNavigate} activeOpacity={0.9}>
      <View style={styles.songInfo}>
        <Image source={currentSong.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{currentSong.title}</Text>
          <Text style={styles.artist}>{currentSong.artist}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={(e) => {
          e.stopPropagation();
          onPlayPause();
        }}
      >
        <Ionicons name={isPlaying ? 'pause-circle' : 'play-circle'} size={40} color="#1DB954" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#282838',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  songInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50, height: 50, borderRadius: 25, marginRight: 10,
  },
  title: {
    color: '#fff', fontSize: 16, fontWeight: 'bold',
  },
  artist: {
    color: '#ccc', fontSize: 14,
  },
});

export default PlayerBar;
