import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AudioContext } from '../context/AudioContext';
import PlayerBar from '../components/PlayerBar';
import BottomNavigation from '../components/BottomNavigation';

const Home = () => {
  const navigation = useNavigation();
  const { isPlaying, playPauseHandler } = useContext(AudioContext);

  const categories = [
    { id: '1', name: 'Pop', image: require('../assets/album/pop.png') },
    { id: '2', name: 'HipHop', image: require('../assets/album/hiphop.png') },
    { id: '3', name: 'Lo-Fi', image: require('../assets/album/sleep.png') },
    { id: '4  ', name: 'chill', image: require('../assets/album/chill.png') },
    { id: '5  ', name: 'sleep', image: require('../assets/album/songcover.png') },
 
  ];

  const artists = [
    { id: '1', name: 'Justin Bieber', image: require('../assets/album/justin.png') },
    { id: '2', name: 'Shreya Ghoshal', image: require('../assets/album/tumhiho.png') },
    { id: '3', name: 'Sonu Nigam', image: require('../assets/album/sonunigam.png') },
  ];

  const trending = [
    {
      id: '1',
      title: 'Baarishein',
      artist: 'Anuv Jain',
      image: require('../assets/album/anuvjain.png'),
    },
    {
      id: '2',
      title: 'Baby',
      artist: 'Justin Bieber',
      image: require('../assets/album/justin.png'),
    },
    {
      id: '3',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: require('../assets/album/tumhiho.png'),
    },
  ];

  const current = {
    title: 'Baarishein',
    artist: 'Anuv Jain  ',
    image: require('../assets/album/anuvjain.png'),
  };

  const handleNavigateToPlayer = () => {
    if (current) {
      navigation.navigate('MusicPlayerScreen', { track: current });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/album/profile.png')}
              style={styles.profilePic}
            />
            <View>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.username}>Nirbhay</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <Ionicons name="chevron-forward" size={24} color="#00ADEF" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryItem}>
                <Image source={category.image} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Artists */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Artists</Text>
            <Ionicons name="chevron-forward" size={24} color="#00ADEF" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {artists.map((artist) => (
              <TouchableOpacity key={artist.id} style={styles.artistItem}>
                <Image source={artist.image} style={styles.artistImage} />
                <Text style={styles.artistName}>{artist.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Trending */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending</Text>
          {trending.map((song) => (
            <TouchableOpacity
              key={song.id}
              style={styles.trendingItem}
              onPress={() =>
                navigation.navigate('MusicPlayerScreen', { track: song })
              }
            >
              <Image source={song.image} style={styles.trendingSongImage} />
              <View style={styles.trendingSongInfo}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.songArtist}>{song.artist}</Text>
              </View>
              <Ionicons name="play-circle" size={36} color="#00ADEF" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* PlayerBar */}
      {current && (
        <TouchableOpacity
          style={styles.playerBarContainer}
          activeOpacity={0.9}
          onPress={handleNavigateToPlayer}
        >
          <PlayerBar
            currentSong={current}
            isPlaying={isPlaying}
            onPlayPause={playPauseHandler}
            onNavigate={handleNavigateToPlayer}
          />
        </TouchableOpacity>
      )}

      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#1E1E2C',
  },
  scrollView: { flex: 1 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20,
  },
  userInfo: {
    flexDirection: 'row', alignItems: 'center',
  },
  profilePic: {
    width: 50, height: 50, borderRadius: 25, marginRight: 10,
  },
  welcomeText: {
    color: '#00ADEF', fontSize: 16,
  },
  username: {
    color: '#fff', fontSize: 20, fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15,
  },
  sectionTitle: {
    color: '#fff', fontSize: 20, fontWeight: 'bold',
  },
  categoryItem: {
    marginRight: 15, alignItems: 'center',
  },
  categoryImage: {
    width: 60, height: 60, borderRadius: 30,
  },
  categoryName: {
    color: '#fff', marginTop: 5, fontSize: 12,
  },
  artistItem: {
    marginRight: 15, alignItems: 'center',
  },
  artistImage: {
    width: 100, height: 100, borderRadius: 10,
  },
  artistName: {
    color: '#fff', marginTop: 5, fontSize: 14,
  },
  trendingItem: {
    flexDirection: 'row', alignItems: 'center', marginBottom: 15, backgroundColor: '#282838', padding: 10, borderRadius: 10,
  },
  trendingSongImage: {
    width: 50, height: 50, borderRadius: 25,
  },
  trendingSongInfo: {
    flex: 1, marginLeft: 15,
  },
  songTitle: {
    color: '#fff', fontSize: 16, fontWeight: 'bold',
  },
  songArtist: {
    color: '#666', fontSize: 14,
  },
  playerBarContainer: {
    position: 'absolute', bottom: 60, left: 0, right: 0, zIndex: 1000,
  },
});

export default Home;
