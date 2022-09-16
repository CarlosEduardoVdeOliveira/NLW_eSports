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
interface Props{
  data: DuoCardProps
}

export function DuoCard({data}:Props) {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label='Nome' 
        value={data.name}
      />
      <DuoInfo 
        label='Tempo de jogo' 
        value={`${data.yearPlaying} ano(s)`}
      />
      <DuoInfo 
        label='Disponibilidade' 
        value={`${data.weekday.length} dia(s) `}
      />
      <DuoInfo 
        label='Chamada de áudio?' 
        value='{data.useVoiceChannel}'
        colorValue='green'
      />
    </View>
  );
}