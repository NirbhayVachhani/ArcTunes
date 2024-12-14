import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
    const navigation = useNavigation();

    const user = {
        name: 'Nirbhay',
        username: 'nirbhayvachhani@gmail.com',
        profilePic: require('../assets/album/profile.png'),
        bio: 'Music enthusiast and explorer. Always searching for new sounds.',
        followers: 1250,
        following: 870,
        playlists: [
            { id: 1, name: 'My Favorites', cover: require('../assets/album/songcover.png') },
            { id: 2, name: 'Chill Vibes', cover: require('../assets/album/chill.png') },
        ],
        favoriteGenres: ['Pop', 'Electronic', 'Rock'],
        topArtists: ['The Weeknd', 'Daft Punk', 'Queen'],
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.profileHeader}>
                    <Image source={user.profilePic} style={styles.profileImage} />
                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.username}>{user.username}</Text>
                        <Text style={styles.bio}>{user.bio}</Text>
                        <View style={styles.followStats}>
                            <Text style={styles.statsText}>
                                <Text style={styles.statsNumber}>{user.followers}</Text> Followers
                            </Text>
                            <Text style={styles.statsText}>
                                <Text style={styles.statsNumber}>{user.following}</Text> Following
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.playlistsSection}>
                    <Text style={styles.sectionTitle}>Playlists</Text>
                    {user.playlists.map(playlist => (
                        <TouchableOpacity key={playlist.id} style={styles.playlistItem}>
                            <Image source={playlist.cover} style={styles.playlistCover} />
                            <Text style={styles.playlistName}>{playlist.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Favorite Genres</Text>
                    {user.favoriteGenres.map((genre, index) => (
                        <Text key={index} style={styles.genreText}>{genre}</Text>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Top Artists</Text>
                    {user.topArtists.map((artist, index) => (
                        <Text key={index} style={styles.artistText}>{artist}</Text>
                    ))}
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FAQ')}>
                    <Text style={styles.buttonText}>Frequently Asked Questions</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Selection')}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </ScrollView>
            <BottomNavigation />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#1E1E2C',
    },
    profileHeader: {
        flexDirection: 'row', padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#333',
    },
    profileImage: {
        width: 100, height: 100, borderRadius: 50, marginRight: 20,
    },
    profileInfo: {
        flex: 1,
    },
    name: {
        color: '#fff', fontSize: 22, fontWeight: 'bold',
    },
    username: {
        color: '#00ADEF', fontSize: 16, marginBottom: 10,
    },
    bio: {
        color: '#fff', fontSize: 14, marginBottom: 10,
    },
    followStats: {
        flexDirection: 'row',
    },
    statsText: {
        color: '#fff', marginRight: 20,
    },
    statsNumber: {
        fontWeight: 'bold',
    },
    playlistsSection: {
        padding: 20,
    },
    sectionTitle: {
        color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 15,
    },
    playlistItem: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 10, backgroundColor: '#282838', padding: 10, borderRadius: 10,
    },
    playlistCover: {
        width: 50, height: 50, borderRadius: 10, marginRight: 10,
    },
    playlistName: {
        color: '#fff', fontSize: 16,
    },
    section: {
        padding: 20, backgroundColor: '#282838', borderRadius: 10, marginBottom: 20,
    },
    genreText: {
        color: '#fff', fontSize: 16, marginBottom: 5,
    },
    artistText: {
        color: '#fff', fontSize: 16, marginBottom: 5,
    },
    button: {
        backgroundColor: '#00ADEF', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20, marginHorizontal: 20,
    },
    signOutButton: {
        backgroundColor: '#FF3B30', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20, marginHorizontal: 20,
    },
    buttonText: {
        color: 'white', fontSize: 16, fontWeight: 'bold',
    },
});

export default ProfilePage;
