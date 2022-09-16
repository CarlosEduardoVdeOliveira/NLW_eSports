import React, { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameCardProps } from '../../components/GameCard';
import { GAMES } from '../../utils/games'
import { Heading } from '../../components/Heading';
import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  useEffect(()=>{
    fetch("http://192.168.0.16:3333/games")
      .then(response => response.json())
      .then(data => setGames(data))
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
            games
            />
        )}
        
        horizontal
        contentContainerStyle={styles.contentList}
        />
    </View>
  );
}