
import { ImageBackground } from 'react-native';

import { styles } from './style';

interface Props{
    children: React.ReactNode
}
export function background({children}: Props) {
  return (
    <ImageBackground style={styles.container}>

    </ImageBackground>
  );
}