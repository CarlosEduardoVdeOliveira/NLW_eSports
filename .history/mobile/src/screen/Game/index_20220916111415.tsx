
import { SafeAreaView } from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameParam } from '../../@types/navigation';
import { View } from 'react-native';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParam;
  console.log(game.bannerUrl);
  
  return (
    <Background>    
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        </View> 
      </SafeAreaView>
    </Background>
  );
}