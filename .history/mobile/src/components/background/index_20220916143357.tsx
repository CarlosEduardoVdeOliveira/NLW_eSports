
import { ImageBackground } from 'react-native';
import backgroudImg from '../../assets/background-galaxy.png'

import { styles } from './styles';

interface Props{
    children: React.ReactNode
}
export function Background({children}: Props) {
  return (
    <ImageBackground
        source={backgroudImg} 
        defaultSource={backgroudImg} 
        style={styles.container}
    >
        {children}
    </ImageBackground>
  );
}