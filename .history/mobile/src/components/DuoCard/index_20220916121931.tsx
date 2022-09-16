import React from 'react';
import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps{
  id: string,
  hourStart: string,
  hourEnd: string,
  name: string,
  useVoiceChannel: boolean,
  weekday: string[],
  yearPlaying: number,

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