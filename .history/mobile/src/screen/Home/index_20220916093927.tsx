import React, { useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games'
import { Heading } from '../../components/Heading';
import { styles } from './styles';

export function Home() {
  useEffect(()=>{
    fetch("http://192.168.56.1:3333/games")
      .then(response => response.json())
      .then(data => console.log(data))
  },[])
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
       />
       <Heading title="Encontre seu duo" subtitle="Selecione o jogo que deseja jogar..." />
       <FlatList 
        data={GAMES} 
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
            <GameCard
            data={item}
            />
        )}
        
        horizontal
        contentContainerStyle={styles.contentList}
        />
    </View>
  );
}