import { TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';
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
        value={`${data.yearPlaying} ano(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo 
        label='Disponibilidade' 
        value={`${data.weekday.length} dia(s) `}
      />
      <DuoInfo 
        label='Chamada de áudio?' 
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      <TouchableOpacity>
        <Text>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}