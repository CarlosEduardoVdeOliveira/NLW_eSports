
import { SafeAreaView } from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'
import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameParam } from '../../@types/navigation';
import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { THEME } from '../../theme';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParam;
  console.log(game.bannerUrl);
  
  return (
    <Background>    
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
            name='chevron-thin-left'
            color={THEME.COLORS.CAPTION_400}
            size={20}
            />

          </TouchableOpacity>
        </View> 
      </SafeAreaView>
    </Background>
  );
}