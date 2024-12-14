import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SplashScreen from '../screens/SplashScreen';
import Selection from '../screens/Selection';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Search from '../screens/Search';
import SongDetails from '../screens/SongDetails';
import FAQ from '../screens/FAQ';
import Settings from '../screens/Settings';
import ProfilePage from '../screens/ProfilePage';
import MusicPlayerScreen from '../screens/MusicPlayerScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Selection" component={Selection} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SongDetails" component={SongDetails} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
