import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}><Text style={styles.text}>Hello World!</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#a356ec',
    padding: 20,
    borderRadius: 10,
  },
  text:{
    color: '#FFF',
    fontSize: 18,
  }

});
