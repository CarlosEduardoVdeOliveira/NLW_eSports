import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
interface Props{
  label: string,
  value: string,
}
export function DuoInfo({label, value}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{}</Text>
      <Text style={styles.value}>{}</Text>
    </View>
  );
}