import React, { useEffect } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import {useRoute, useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Entypo } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import { THEME } from '../../theme';

import { GameParam } from '../../@types/navigation';
import { TouchableOpacity, View, Image } from 'react-native';
import { DuoCard } from '../../components/DuoCard';

export function Game() {
  const route = useRoute();
  const navigation = useNavigation();
  const game = route.params as GameParam;
  function handleGoBack(){
    navigation.goBack();
  }
    useEffect(()=>{
    fetch(`http://192.168.0.16:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setGames(data))
  },[])
  return (
    <Background>    
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_400}
              size={20}
            />
          </TouchableOpacity>
            <Image  source={logoImg} style={styles.logo}/>
            <View style={styles.right}/>
        </View>
        <Image 
        source={{uri: game.bannerUrl}}
        style={styles.cover}
        resizeMode='cover'
        /> 
        <Heading 
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />
        <DuoCard />
      </SafeAreaView>
    </Background>
  );
}