import { TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

export interface GameCardProps{
  id: string,
  name: string,
  ads: string,
  cover: ImageSourcePropType,
}
interface Props extends TouchableOpacityProps{
  data: GameCardProps
}

export function GameCard({data}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
      style={styles.cover}
      source={data.cover}
      />
    </TouchableOpacity>
  );
}