import React from 'react';
import { AudioProvider } from './src/context/AudioContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AudioProvider>
      <AppNavigator />
    </AudioProvider>
  );
}
