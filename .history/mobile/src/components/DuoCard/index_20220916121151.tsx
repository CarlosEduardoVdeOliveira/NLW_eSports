import React from 'react';
import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

interface Props{
  
}

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label='Nome' 
        value='Carlos Eduardo'
      />
      <DuoInfo 
        label='Nome' 
        value='Carlos Eduardo'
      />
      <DuoInfo 
        label='Nome' 
        value='Carlos Eduardo'
      />
      <DuoInfo 
        label='Nome' 
        value='Carlos Eduardo'
        colorValue='green'
      />
    </View>
  );
}