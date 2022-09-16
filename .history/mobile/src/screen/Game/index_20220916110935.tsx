
import { SafeAreaView } from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameParam } from '../../@types/navigation';

export function Game() {
  const route = useRoute();
  const { params } = route as GameParam;
  console.log(params);
  
  return (
    <Background>    
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}