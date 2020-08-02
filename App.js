import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Notes from './components/notes';
export default function App() {
  const AppButton=({onPress,title})=>(
    <TouchableOpacity onPress={onPress}style={styles.appButtonContainer}>
    
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>

  );
  return (

   
    <View style={styles.container}>
       <Header/>
       <Notes/>
      <View style={styles.Button}>
      <AppButton
         style={styles.button}
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>
       
     
     

      <StatusBar style="auto" />
    </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
  heading:{
    marginTop:50,
    marginHorizontal:140,
    fontFamily:'lucida grande',
    fontWeight:'bold'
    
  },
  appButtonContainer: {
    elevation: 50,
    backgroundColor: "#009688",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12
    
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  Button:{
    

  }
  
});
