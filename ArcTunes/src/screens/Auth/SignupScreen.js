// src/screens/Auth/AuthScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = () => {
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          navigation.replace('Main'); // Navigate to the main app after login
        })
        .catch(error => console.error('Login Error: ', error));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          navigation.replace('Main'); // Navigate to the main app after sign up
        })
        .catch(error => console.error('Signup Error: ', error));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={handleAuth} />
      <Text
        style={styles.switchText}
        onPress={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Dont have an account? Sign Up' : 'Already have an account? Login'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#6200EE',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  switchText: {
    marginTop: 16,
    color: '#6200EE',
    textDecorationLine: 'underline',
  },
});

export default AuthScreen;