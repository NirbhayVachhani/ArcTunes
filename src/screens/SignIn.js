import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        // Add your custom sign-in logic here
        Alert.alert('Success', 'Sign in successful!');
        navigation.navigate('Home');
    };

    const handleGoogleSignIn = async () => {
        // Add your custom Google sign-in logic here
        Alert.alert('Info', 'Google sign-in to be implemented');
    };

    const handleAppleSignIn = async () => {
        // Add your custom Apple sign-in logic here
        Alert.alert('Info', 'Apple sign-in to be implemented');
    };

    return (
        <View style={styles.container}>
            {/* Back button to go back to Selection */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Selection')}>
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <Image source={require('../assets/horizontal.png')} style={[styles.logo, { width: 400, height: 200 }]} />
            <Text style={styles.title}>Sign In</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#AAAAAA"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#AAAAAA"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or</Text>

            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handleGoogleSignIn}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleAppleSignIn}>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png' }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.footerText}>
                    Don't have an account? <Text style={styles.footerLink}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E2C',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    logo: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 10,
        marginBottom: 10,
        color: '#FFFFFF',
    },
    button: {
        backgroundColor: '#00ADEF',
        padding: 15,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        color: '#FFFFFF',
        marginVertical: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    footerText: {
        color: '#AAAAAA',
    },
    footerLink: {
        color: '#00ADEF',
    },
});

export default SignIn;
