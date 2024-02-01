
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName]= useState("")
  const [wellcome, setWellcome]= useState("")


  const handleOnChangeText = (value)=>{
    if(value ==''){
      setWellcome("")
    }
     setName(value)
  }

  const handleOnPress = ()=>{
    if(name==''){
      alert("Digite seu nome!")
    }
    setWellcome("Bem vindo")
 }
  return (
    <View style={styles.container}>
      <TextInput value={name} style={styles.input} placeholder='Digite seu nome' underlineColorAndroid='transparent' onChangeText={handleOnChangeText}/>
      <Button title="Entrar"onPress={handleOnPress}/>
     {wellcome && name && <Text style={{textAlign:"center"}}> Bem vindo: {name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:45,
  },
  input:{
    
    height:45,
    borderWidth:1,
    borderColor:"#222",
    margin:10,
    fontSize:20,
    padding:10,
  }
});
