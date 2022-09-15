import { TouchableOpacity, ImageBackground, ImageSourcePropType } from 'react-native';

import { styles } from './styles';

export interface GameCardProps{
  id: string,
  name: string,
  ads: string,
  cover: ImageSourcePropType,
}

export function GameCard() {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
      style={styles.cover}
      source={require('../../assets/cover.png')}
      />
    </TouchableOpacity>
  );
}