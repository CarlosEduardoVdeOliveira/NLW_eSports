
import { ImageBackground } from 'react-native';

import { styles } from './style';

interface Props{
    children: React.ReactNode
}
export function Bsackground({children}: Props) {
  return (
    <ImageBackground style={styles.container}>
        {children}
    </ImageBackground>
  );
}