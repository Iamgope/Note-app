import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View,Button,ScrollView,Alert } from 'react-native';
import Header from './components/Header';
import Notes from './components/notes';
import firebase from 'firebase';
import Loginscreen from './components/Loginscreen';
export default function App() {
  const [userLoggedIn,setuserLoggedIn]=useState(false)
  if (firebase.apps.length===0){
  var firebaseConfig = {
    apiKey: "AIzaSyBv7nhFNyEvmzH58b7jidYl1dc8XyTcb1w",
    authDomain: "rn-notes-00.firebaseapp.com",
    databaseURL: "https://rn-notes-00.firebaseio.com",
    projectId: "rn-notes-00",
    storageBucket: "rn-notes-00.appspot.com",
    messagingSenderId: "811328400312",
    appId: "1:811328400312:web:4ae9f02f8b0112e4713d4d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
firebase.auth().onAuthStateChanged((user)=>{
  if(user===null)
  {
    setuserLoggedIn(false)
  }
  else{
    setuserLoggedIn(true)
  }
})
if(userLoggedIn)
{
  return <View style={styles.container}>
  <Header/>
   <Notes/>
 <StatusBar style="auto" />
</View>
}
else{
  return <View style={styles.container}>
  <Header/>
   <View style={styles.login}>
     <Loginscreen/>
   </View>
   
 <StatusBar style="auto" />
</View>
}
  
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#fff',
    
    
  },
  heading:{
    marginTop:50,
    marginHorizontal:140,
    fontFamily:'lucida grande',
    fontWeight:'bold'
    
  },
  
  login:{
    
    alignItems:'center',
    marginTop:100

  }
  
});
