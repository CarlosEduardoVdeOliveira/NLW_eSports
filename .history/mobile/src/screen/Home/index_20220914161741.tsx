import React from 'react';
import { View, Image } from 'react-native';
import logoImg from '../../assets/Background.png'
import { styles } from './style';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
       />
    </View>
  );
}