import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AudioContext } from '../context/AudioContext';
import PlayerBar from '../components/PlayerBar';
import BottomNavigation from '../components/BottomNavigation';

const recommendations = ["Tu hai kahan", "Tu na mane", "Shor"];

const topSongs = [
  {
    id: '1',
    title: 'Espresso',
    artist: 'Sabrina Carpenter',
    image: require('../assets/album/sleep.png'),
  },
  {
    id: '2',
    title: 'Wavy',
    artist: 'Karan Aujla',
    image: require('../assets/album/chill.png'),
  },
  {
    id: '3',
    title: 'Russian Bandana',
    artist: 'Dhanda Nyalanda',
    image: require('../assets/album/songcover.png'),
  },
  {
    id: '4',
    title: 'Baby',
    artist: 'Justin Biber',
    image: require('../assets/album/justin.png'),
  },
  {
    id: '5',
    title: 'Die With Smile',
    artist: 'Lady Gaga, Bruno Mars',
    image: require('../assets/album/tumhiho.png'),
  },
];

const Search = () => {
  const navigation = useNavigation();
  const { currentSong, isPlaying, playPauseHandler } = useContext(AudioContext);
  const [searchQuery, setSearchQuery] = useState('');

  // For testing purposes, set a dummy currentSong if not set
  // Remove this after confirming your PlayerBar works
  const testSong = {
    title: 'Tum Hi Ho',
    artist: 'Mithoon & Arijit Singh',
    image: require('../assets/album/tumhiho.png'),
  };

  const activeSong = currentSong || testSong;

  const filteredSongs = topSongs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNavigateToPlayer = () => {
    if (activeSong) {
      navigation.navigate('MusicPlayerScreen', { track: activeSong });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Recommendations */}
        <Text style={styles.sectionTitle}>Recommendation</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
          {recommendations.map((item, index) => (
            <View key={index} style={styles.chip}>
              <Ionicons name="musical-notes" size={16} color="#fff" />
              <Text style={styles.chipText}>{item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Top Searched Songs */}
        <View style={styles.topSongsHeader}>
          <Text style={styles.sectionTitle}>Top Searched Songs 🔥</Text>
          <Text style={styles.moreText}>More</Text>
        </View>

        {filteredSongs.map((song, index) => (
          <View key={song.id} style={styles.songItem}>
            <Text style={styles.songRank}>{index + 1}</Text>
            <Image source={song.image} style={styles.songImage} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.songArtist}>{song.artist}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* PlayerBar above BottomNavigation */}
      {activeSong && (
        <PlayerBar
          currentSong={activeSong}
          isPlaying={isPlaying}
          onPlayPause={playPauseHandler}
          onNavigate={handleNavigateToPlayer}
        />
      )}
  
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B29',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3C3C4C',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#fff',
    fontSize: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 12,
    marginTop: 8,
  },
  chipContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2D3E',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  chipText: {
    color: '#fff',
    marginLeft: 4,
  },
  topSongsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  moreText: {
    color: '#00FFFF',
    fontSize: 14,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  songRank: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    width: 24,
    textAlign: 'center',
  },
  songImage: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginHorizontal: 12,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  songArtist: {
    color: '#999',
    fontSize: 14,
  },
});

export default Search;
