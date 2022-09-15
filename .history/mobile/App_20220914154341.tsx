
import React from 'react';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"></StatusBar>
    </Background>
  );
}
