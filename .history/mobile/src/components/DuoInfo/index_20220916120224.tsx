import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function DuoInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{}</Text>
      <Text style={styles.value}>{}</Text>
    </View>
  );
}