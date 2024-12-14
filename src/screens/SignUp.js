import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignUp = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // After successful sign up, navigate to Home
        alert('Account created successfully!');
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Image source={require('../assets/horizontal.png')} style={[styles.logo, { width: 400, height: 200 }]} />
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>If You Need Any Support Click Here</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#AAAAAA"
                value={fullName}
                onChangeText={setFullName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor="#AAAAAA"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#AAAAAA"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity>
                <Text style={styles.recoveryText}>Recovery Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or</Text>
           <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png' }} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.footerText}>
                    Already A Member? <Text style={styles.footerLink}>Sign In</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E2C',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
    },
    subtitle: {
        fontSize: 14,
        color: '#AAAAAA',
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
    recoveryText: {
        alignSelf: 'flex-end',
        color: '#00ADEF',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#00ADEF',
        padding: 15,
        borderRadius: 30,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
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

export default SignUp;
