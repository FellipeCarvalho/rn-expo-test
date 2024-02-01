import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:1, backgroundColor:'red'}}>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>
        <Text>Olá que tal </Text>

        </View>
      <View style={{flex:1, backgroundColor:'yellow'}}>
        <Text>Olá que tal </Text></View>
      <View style={{flex:1, backgroundColor:'green'}}>
         <Text>Olá que tal </Text>
      </View>

      {/* <Button title="Entrar" OnPress={()=>{return}} /> */}
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width:340,
    // height:100,
    flex: 1,
    marginTop: 30,
    backgroundColor: 'gray',
    // alignItems: 'center',
     justifyContent: 'center',
  },
});
