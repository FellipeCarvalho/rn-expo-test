import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá que tal :) </Text>
      <Text>Olá que tal :) </Text>
      <Text>Olá que tal :) </Text>
      <Text>Olá que tal :) </Text>
      <Text>By Fe </Text>
      <Button title="Entrar" OnPress={()=>{return}} />
  
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
});
